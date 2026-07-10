import os
from pathlib import Path
import numpy as np
import tensorflow as tf
from tensorflow import keras
from tensorflow.keras.models import load_model

# Patch numpy for older tensorflowjs compatibility
if not hasattr(np, 'object'):
    np.object = object
if not hasattr(np, 'bool'):
    np.bool = bool

PROJECT_ROOT = Path(__file__).resolve().parents[2]
model_path = PROJECT_ROOT / "model" / "rock_classifier" / "best_rock_classifier.h5"
out_dir = PROJECT_ROOT / "model" / "rock_classifier" / "tfjs"
os.makedirs(out_dir, exist_ok=True)

model = load_model(model_path)

try:
    import tensorflowjs as tfjs
    tfjs.converters.save_keras_model(model, out_dir)
    print(f"Saved TensorFlow.js model to {out_dir}")
except Exception as exc:
    print(f"Conversion failed: {exc}")
