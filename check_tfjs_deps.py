import importlib
import sys
import numpy as np
import tensorflow as tf
print('python', sys.version)
print('numpy', np.__version__)
print('tensorflow', tf.__version__)
print('has compat.v1.estimator', hasattr(tf.compat.v1, 'estimator'))
for pkg in ['tensorflow_estimator','tensorflow_hub','tensorflowjs']:
    try:
        mod = importlib.import_module(pkg)
        print(pkg, 'OK', getattr(mod, '__file__', ''))
    except Exception as exc:
        print(pkg, 'FAIL', exc)
