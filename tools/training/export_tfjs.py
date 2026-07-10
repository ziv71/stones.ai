from pathlib import Path

import numpy as np


PROJECT_ROOT = Path(__file__).resolve().parents[2]
DEFAULT_MODEL_PATH = PROJECT_ROOT / "model" / "rock_classifier" / "best_rock_classifier.h5"
DEFAULT_OUTPUT_DIR = PROJECT_ROOT / "model" / "rock_classifier" / "tfjs"


def ensure_numpy_compatibility_aliases():
    # TensorFlow.js 3.x still expects deprecated NumPy aliases in older code paths.
    if not hasattr(np, "object"):
        np.object = object
    if not hasattr(np, "bool"):
        np.bool = bool


def export_model(model_path=DEFAULT_MODEL_PATH, out_dir=DEFAULT_OUTPUT_DIR):
    ensure_numpy_compatibility_aliases()

    import os
    import tensorflow as tf
    from tensorflow.keras.models import load_model
    import tensorflowjs as tfjs

    print("TensorFlow", tf.__version__)
    print("NumPy", np.__version__)

    os.makedirs(out_dir, exist_ok=True)
    model = load_model(model_path, compile=False)
    print("Loaded model:", model_path)

    tfjs.converters.save_keras_model(model, out_dir)
    print("Saved TensorFlow.js model to", out_dir)


if __name__ == "__main__":
    export_model()
