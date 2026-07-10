import os
from pathlib import Path
import numpy as np
import tensorflow as tf
from tensorflow.keras.models import load_model

print('TensorFlow', tf.__version__)
print('NumPy', np.__version__)

PROJECT_ROOT = Path(__file__).resolve().parents[2]
model_path = PROJECT_ROOT / "model" / "rock_classifier" / "best_rock_classifier.h5"
out_dir = PROJECT_ROOT / "model" / "rock_classifier" / "tfjs"
os.makedirs(out_dir, exist_ok=True)

model = load_model(model_path, compile=False)
print('Loaded model from', model_path)

# Save a Keras-native model artifact and export the SavedModel via the newer API.
export_path = os.path.join(out_dir, 'rock_classifier.keras')
model.save(export_path)
print('Saved Keras model to', export_path)

# Export a SavedModel for downstream tooling.
export_dir = os.path.join(out_dir, 'saved_model')
model.export(export_dir)
print('Exported SavedModel to', export_dir)

labels_path = PROJECT_ROOT / "model" / "rock_classifier" / "class_names.txt"
if labels_path.exists():
    class_names = labels_path.read_text(encoding='utf-8').splitlines()
else:
    class_names = [
        'basalt',
        'granite',
        'limestone',
        'marble',
        'sandstone',
        'slate'
    ]
with open(os.path.join(out_dir, 'class_names.txt'), 'w', encoding='utf-8') as handle:
    handle.write('\n'.join(class_names))

print('Wrote class names to', os.path.join(out_dir, 'class_names.txt'))
