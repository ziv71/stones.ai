import os
import numpy as np
import tensorflow as tf
from tensorflow.keras.models import load_model

# TensorFlow.js 3.x still expects deprecated NumPy aliases in older code paths.
if not hasattr(np, 'object'):
    np.object = object
if not hasattr(np, 'bool'):
    np.bool = bool

import tensorflowjs as tfjs

print('TensorFlow', tf.__version__)
print('NumPy', np.__version__)

model_path = r"C:\Users\User\Desktop\stones.ai\model\rock_classifier\best_rock_classifier.h5"
out_dir = r"C:\Users\User\Desktop\stones.ai\model\rock_classifier\tfjs"
os.makedirs(out_dir, exist_ok=True)

model = load_model(model_path, compile=False)
print('Loaded model:', model_path)

try:
    tfjs.converters.save_keras_model(model, out_dir)
    print('Saved TensorFlow.js model to', out_dir)
except Exception as exc:
    print('Export failed:', exc)
    raise
