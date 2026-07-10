import argparse
import json
import os
import subprocess
import sys

import numpy as np
import tensorflow as tf


def resolve_dataset_root(data_dir):
    candidate = os.path.abspath(os.path.expanduser(str(data_dir or "")))
    if not candidate:
        candidate = os.path.abspath(DEFAULT_DATA_DIR)

    if all(os.path.isdir(os.path.join(candidate, split_name)) for split_name in ["train", "val", "test"]):
        return candidate

    for alternate in [
        os.path.join(candidate, "datasets"),
        os.path.join(candidate, "rock-classification"),
        os.path.join(candidate, "dataset"),
    ]:
        if all(os.path.isdir(os.path.join(alternate, split_name)) for split_name in ["train", "val", "test"]):
            return alternate

    return candidate


def build_dataset_splits(data_dir, img_size, batch_size, seed=123):
    dataset_root = resolve_dataset_root(data_dir)
    train_dir = os.path.join(dataset_root, "train")
    val_dir = os.path.join(dataset_root, "val")
    test_dir = os.path.join(dataset_root, "test")

    if not os.path.isdir(train_dir) or not os.path.isdir(val_dir) or not os.path.isdir(test_dir):
        raise FileNotFoundError(
            "Expected train/val/test folders under the dataset root. Create them and add class folders inside each split."
        )

    train_ds = tf.keras.preprocessing.image_dataset_from_directory(
        train_dir,
        labels="inferred",
        label_mode="categorical",
        batch_size=batch_size,
        image_size=(img_size, img_size),
        seed=seed,
        shuffle=True,
    )

    val_ds = tf.keras.preprocessing.image_dataset_from_directory(
        val_dir,
        labels="inferred",
        label_mode="categorical",
        batch_size=batch_size,
        image_size=(img_size, img_size),
        seed=seed,
        shuffle=False,
    )

    test_ds = tf.keras.preprocessing.image_dataset_from_directory(
        test_dir,
        labels="inferred",
        label_mode="categorical",
        batch_size=batch_size,
        image_size=(img_size, img_size),
        seed=seed,
        shuffle=False,
    )

    class_names = train_ds.class_names
    print("Found classes:", class_names)
    return train_ds, val_ds, test_ds, class_names

try:
    from kaggle.api.kaggle_api_extended import KaggleApi
except ImportError:
    KaggleApi = None


KAGGLE_DATASET = "salmaneunus/rock-classification"
DEFAULT_DATA_DIR = "datasets"
DEFAULT_MODEL_DIR = "model/rock_classifier"
DEFAULT_CLASS_LABELS = ["granite", "basalt", "marble", "sandstone", "limestone", "slate"]


def download_kaggle_dataset(dest_dir):
    if KaggleApi is None:
        raise RuntimeError("The kaggle package is not installed. Install it with `pip install kaggle`.")

    api = KaggleApi()
    api.authenticate()
    os.makedirs(dest_dir, exist_ok=True)
    print(f"Downloading Kaggle dataset {KAGGLE_DATASET} into {dest_dir}...")
    api.dataset_download_files(KAGGLE_DATASET, path=dest_dir, unzip=True)
    print("Download finished.")


def build_model(input_shape, num_classes, base_model_name="efficientnetb0"):
    if base_model_name == "efficientnetb0":
        base_model = tf.keras.applications.EfficientNetB0(
            input_shape=input_shape,
            include_top=False,
            weights="imagenet",
        )
        preprocess_input = tf.keras.applications.efficientnet.preprocess_input
    elif base_model_name == "resnet50":
        base_model = tf.keras.applications.ResNet50(
            input_shape=input_shape,
            include_top=False,
            weights="imagenet",
        )
        preprocess_input = tf.keras.applications.resnet.preprocess_input
    else:
        base_model = tf.keras.applications.MobileNetV2(
            input_shape=input_shape,
            include_top=False,
            weights="imagenet",
        )
        preprocess_input = tf.keras.applications.mobilenet_v2.preprocess_input

    base_model.trainable = False

    inputs = tf.keras.Input(shape=input_shape)
    x = preprocess_input(inputs)
    x = base_model(x, training=False)
    x = tf.keras.layers.GlobalAveragePooling2D()(x)
    x = tf.keras.layers.Dropout(0.35)(x)
    x = tf.keras.layers.Dense(256, activation="relu")(x)
    x = tf.keras.layers.Dropout(0.2)(x)
    outputs = tf.keras.layers.Dense(num_classes, activation="softmax")(x)

    model = tf.keras.Model(inputs, outputs)
    model.compile(
        optimizer=tf.keras.optimizers.Adam(learning_rate=1e-4),
        loss="categorical_crossentropy",
        metrics=["accuracy"],
    )
    return model


def evaluate_model(model, ds, class_names, model_dir, split_name="val"):
    print(f"Evaluating {split_name} set...")
    loss, accuracy = model.evaluate(ds, verbose=2)

    predictions = []
    labels = []
    for images, batch_labels in ds:
        batch_preds = model.predict(images, verbose=0)
        predictions.append(np.argmax(batch_preds, axis=1))
        labels.append(np.argmax(batch_labels, axis=1))

    predictions = np.concatenate(predictions)
    labels = np.concatenate(labels)

    num_classes = len(class_names)
    confusion_matrix = np.zeros((num_classes, num_classes), dtype=int)
    for true_label, pred_label in zip(labels, predictions):
        confusion_matrix[true_label, pred_label] += 1

    per_class_accuracy = {}
    for idx, class_name in enumerate(class_names):
        class_mask = labels == idx
        if np.any(class_mask):
            class_accuracy = float(np.mean(predictions[class_mask] == labels[class_mask]))
        else:
            class_accuracy = 0.0
        per_class_accuracy[class_name] = class_accuracy

    top3_correct = 0
    for true_label, pred_probs in zip(labels, [np.array(batch) for batch in []]):
        pass

    prediction_probabilities = []
    for images, batch_labels in ds:
        batch_preds = model.predict(images, verbose=0)
        prediction_probabilities.append(batch_preds)

    prediction_probabilities = np.concatenate(prediction_probabilities)
    top3_correct = 0
    for true_label, probs in zip(labels, prediction_probabilities):
        top3 = np.argsort(probs)[-3:][::-1]
        if true_label in top3:
            top3_correct += 1

    report = {
        f"{split_name}_loss": float(loss),
        f"{split_name}_accuracy": float(accuracy),
        "top3_accuracy": float(top3_correct / len(labels)) if len(labels) else 0.0,
        "per_class_accuracy": per_class_accuracy,
        "confusion_matrix": confusion_matrix.tolist(),
        "class_names": class_names,
    }

    report_path = os.path.join(model_dir, f"{split_name}_evaluation_report.json")
    with open(report_path, "w") as f:
        json.dump(report, f, indent=2)

    print(f"{split_name.title()} accuracy:", round(float(accuracy) * 100, 2), "%")
    print(f"{split_name.title()} top-3 accuracy:", round(float(report['top3_accuracy']) * 100, 2), "%")
    print("Per-class accuracy:")
    for class_name, class_accuracy in per_class_accuracy.items():
        print(f"- {class_name}: {round(class_accuracy * 100, 2)}%")
    print("Confusion matrix:")
    print(confusion_matrix)
    print(f"Saved evaluation report to {report_path}")
    return report


def save_model(model, model_dir, tfjs=False):
    os.makedirs(model_dir, exist_ok=True)
    keras_path = os.path.join(model_dir, "rock_classifier.h5")
    model.save(keras_path)
    print(f"Saved Keras model to {keras_path}")

    if tfjs:
        try:
            import tensorflowjs as tfjs
        except ImportError:
            print("tensorflowjs not installed, skipping TFJS export.")
            return

        tfjs_target = os.path.join(model_dir, "tfjs")
        os.makedirs(tfjs_target, exist_ok=True)
        tfjs.converters.save_keras_model(model, tfjs_target)
        print(f"Saved TFJS model to {tfjs_target}")


def main():
    parser = argparse.ArgumentParser(description="Train a rock classifier using the Kaggle rock dataset.")
    parser.add_argument("--data-dir", default=DEFAULT_DATA_DIR, help="Directory containing train/val/test class folders")
    parser.add_argument("--model-dir", default=DEFAULT_MODEL_DIR, help="Directory to save the trained model")
    parser.add_argument("--img-size", type=int, default=224, help="Image size for training")
    parser.add_argument("--batch-size", type=int, default=16, help="Batch size for training")
    parser.add_argument("--epochs", type=int, default=18, help="Number of training epochs")
    parser.add_argument("--base-model", default="efficientnetb0", choices=["mobilenetv2", "efficientnetb0", "resnet50"], help="Backbone model to use for transfer learning")
    parser.add_argument("--download", action="store_true", help="Download the Kaggle dataset before training")
    parser.add_argument("--tfjs", action="store_true", help="Export the trained model to TFJS format")
    args = parser.parse_args()

    data_dir = resolve_dataset_root(args.data_dir)

    if args.download:
        download_kaggle_dataset(data_dir)

    train_ds, val_ds, test_ds, class_names = build_dataset_splits(data_dir, args.img_size, args.batch_size)
    model = build_model((args.img_size, args.img_size, 3), len(class_names), args.base_model)
    model.summary()

    callbacks = [
        tf.keras.callbacks.EarlyStopping(patience=3, restore_best_weights=True),
        tf.keras.callbacks.ModelCheckpoint(
            os.path.join(args.model_dir, "best_rock_classifier.h5"),
            save_best_only=True,
            monitor="val_accuracy",
            verbose=1,
        ),
    ]

    model.fit(
        train_ds,
        validation_data=val_ds,
        epochs=args.epochs,
        callbacks=callbacks,
    )

    evaluate_model(model, val_ds, class_names, args.model_dir, split_name="val")
    evaluate_model(model, test_ds, class_names, args.model_dir, split_name="test")
    save_model(model, args.model_dir, tfjs=args.tfjs)

    labels_path = os.path.join(args.model_dir, "class_names.txt")
    with open(labels_path, "w") as f:
        f.write("\n".join(class_names))
    print(f"Saved class names to {labels_path}")


if __name__ == "__main__":
    main()
