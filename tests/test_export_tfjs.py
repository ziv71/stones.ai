import json
from pathlib import Path
import unittest

import numpy as np


class ExportTfjsCompatibilityTest(unittest.TestCase):
    def test_numpy_compatibility_aliases_are_available(self):
        from tools.training.export_tfjs import ensure_numpy_compatibility_aliases

        ensure_numpy_compatibility_aliases()
        self.assertTrue(hasattr(np, "object"))
        self.assertTrue(hasattr(np, "bool"))

    def test_tfjs_labels_match_trained_model_order(self):
        report_path = Path("model/rock_classifier/test_evaluation_report.json")
        labels_path = Path("model/rock_classifier/tfjs/class_names.txt")

        expected_labels = json.loads(report_path.read_text(encoding="utf-8"))["class_names"]
        actual_labels = labels_path.read_text(encoding="utf-8").splitlines()

        self.assertEqual(expected_labels, actual_labels)


if __name__ == "__main__":
    unittest.main()
