import importlib
import unittest

import numpy as np


class ExportTfjsCompatibilityTest(unittest.TestCase):
    def test_numpy_compatibility_aliases_are_available(self):
        import export_tfjs

        self.assertTrue(hasattr(np, "object"))
        self.assertTrue(hasattr(np, "bool"))


if __name__ == "__main__":
    unittest.main()
