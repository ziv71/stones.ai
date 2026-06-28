import argparse
import os
import subprocess
import sys

import tensorflow as tf

try:
    from kaggle.api.kaggle_api_extended import KaggleApi
except ImportError:
    KaggleApi = None


KAGGLE_DATASET = "salmaneunus/rock-classification"
DEFAULT_DATA_DIR = "datasets/rock-classification"
DEFAULT_MODEL_DIR = "model/rock_classifier"
CLASS_LABELS = ["igneous", "metamorphic", "sedimentary"]


def download_kaggle_dataset(dest_dir):
    if KaggleApi is None:
        raise RuntimeError("The kaggle package is not installed. Install it with `pip install kaggle`.")

    api = KaggleApi()
    api.authenticate()
    os.makedirs(dest_dir, exist_ok=True)
    print(f"Downloading Kaggle dataset {KAGGLE_DATASET} into {dest_dir}...")
    api.dataset_download_files(KAGGLE_DATASET, path=dest_dir, unzip=True)
    print("Download finished.")


def build_datasets(data_dir, img_size, batch_size):
    print("Preparing datasets from", data_dir)
    train_ds = tf.keras.preprocessing.image_dataset_from_directory(
        data_dir,
        labels="inferred",
        label_mode="categorical",
        batch_size=batch_size,
        image_size=(img_size, img_size),
        validation_split=0.2,
        subset="training",
        seed=123,
        shuffle=True,
    )

    val_ds = tf.keras.preprocessing.image_dataset_from_directory(
        data_dir,
        labels="inferred",
        label_mode="categorical",
        batch_size=batch_size,
        image_size=(img_size, img_size),
        validation_split=0.2,
        subset="validation",
        seed=123,
        shuffle=True,
    )

    class_names = train_ds.class_names
    print("Found classes:", class_names)
    return train_ds, val_ds, class_names


def build_model(input_shape, num_classes):
    base_model = tf.keras.applications.MobileNetV2(
        input_shape=input_shape,
        include_top=False,
        weights="imagenet",
    )
    base_model.trainable = False

    inputs = tf.keras.Input(shape=input_shape)
    x = tf.keras.applications.mobilenet_v2.preprocess_input(inputs)
    x = base_model(x, training=False)
    x = tf.keras.layers.GlobalAveragePooling2D()(x)
    x = tf.keras.layers.Dropout(0.3)(x)
    x = tf.keras.layers.Dense(128, activation="relu")(x)
    x = tf.keras.layers.Dropout(0.2)(x)
    outputs = tf.keras.layers.Dense(num_classes, activation="softmax")(x)

    model = tf.keras.Model(inputs, outputs)
    model.compile(
        optimizer=tf.keras.optimizers.Adam(learning_rate=1e-4),
        loss="categorical_crossentropy",
        metrics=["accuracy"],
    )
    return model


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
    parser.add_argument("--data-dir", default=DEFAULT_DATA_DIR, help="Directory containing the Kaggle rock dataset")
    parser.add_argument("--model-dir", default=DEFAULT_MODEL_DIR, help="Directory to save the trained model")
    parser.add_argument("--img-size", type=int, default=224, help="Image size for training")
    parser.add_argument("--batch-size", type=int, default=16, help="Batch size for training")
    parser.add_argument("--epochs", type=int, default=12, help="Number of training epochs")
    parser.add_argument("--download", action="store_true", help="Download the Kaggle dataset before training")
    parser.add_argument("--tfjs", action="store_true", help="Export the trained model to TFJS format")
    args = parser.parse_args()

    if args.download:
        download_kaggle_dataset(args.data_dir)

    train_ds, val_ds, class_names = build_datasets(args.data_dir, args.img_size, args.batch_size)
    model = build_model((args.img_size, args.img_size, 3), len(class_names))
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

    save_model(model, args.model_dir, tfjs=args.tfjs)

    labels_path = os.path.join(args.model_dir, "class_names.txt")
    with open(labels_path, "w") as f:
        f.write("\n".join(class_names))
    print(f"Saved class names to {labels_path}")


if __name__ == "__main__":
    main()
