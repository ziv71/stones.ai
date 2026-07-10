import os
import tempfile
import unittest
from pathlib import Path

from tools.training.train_rock_classifier import resolve_dataset_root


class ResolveDatasetRootTests(unittest.TestCase):
    def test_resolve_dataset_root_accepts_split_root_directly(self):
        with tempfile.TemporaryDirectory(prefix="stone-train-test-", dir=".") as temp_dir:
            root = Path(temp_dir)
            for split_name in ["train", "val", "test"]:
                (root / split_name).mkdir(parents=True, exist_ok=True)

            resolved = resolve_dataset_root(str(root))

            self.assertEqual(Path(resolved), root)

    def test_resolve_dataset_root_falls_back_to_repo_data_layout(self):
        with tempfile.TemporaryDirectory(prefix="stone-train-test-", dir=".") as temp_dir:
            root = Path(temp_dir)
            datasets_root = root / "datasets"
            for split_name in ["train", "val", "test"]:
                (datasets_root / split_name).mkdir(parents=True, exist_ok=True)

            original_cwd = os.getcwd()
            try:
                os.chdir(root)
                resolved = resolve_dataset_root("datasets")
            finally:
                os.chdir(original_cwd)

            self.assertEqual(Path(resolved), datasets_root)


if __name__ == "__main__":
    unittest.main()
