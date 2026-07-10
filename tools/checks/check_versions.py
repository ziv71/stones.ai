import importlib.metadata as m
import tensorflow as tf
import tensorflow_hub
import tensorflowjs

print('tensorflow', tf.__version__)
print('tensorflow_hub', m.version('tensorflow-hub'))
print('tensorflowjs', m.version('tensorflowjs'))
