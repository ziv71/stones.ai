import os
import shutil
import tempfile
import unittest

from tools.training.import_dataset import import_dataset


class ImportDatasetTests(unittest.TestCase):
    def setUp(self):
        self.temp_dir = tempfile.mkdtemp(prefix="stone-import-test-", dir=".")
        self.source_dir = os.path.join(self.temp_dir, "source")
        self.output_dir = os.path.join(self.temp_dir, "output")
        os.makedirs(self.source_dir, exist_ok=True)
        os.makedirs(os.path.join(self.source_dir, "granite"), exist_ok=True)
        os.makedirs(os.path.join(self.source_dir, "basalt"), exist_ok=True)
        os.makedirs(os.path.join(self.source_dir, "marble"), exist_ok=True)
        os.makedirs(os.path.join(self.source_dir, "sandstone"), exist_ok=True)
        os.makedirs(os.path.join(self.source_dir, "limestone"), exist_ok=True)
        os.makedirs(os.path.join(self.source_dir, "slate"), exist_ok=True)

        for class_name in ["granite", "basalt", "marble", "sandstone", "limestone", "slate"]:
            for i in range(6):
                path = os.path.join(self.source_dir, class_name, f"{class_name}_{i}.jpg")
                with open(path, "wb") as handle:
                    handle.write(b"fake-image")

    def tearDown(self):
        shutil.rmtree(self.temp_dir, ignore_errors=True)

    def test_imports_images_into_train_val_test_folders(self):
        import_dataset(self.source_dir, self.output_dir, seed=7)

        for split in ["train", "val", "test"]:
            for class_name in ["granite", "basalt", "marble", "sandstone", "limestone", "slate"]:
                class_dir = os.path.join(self.output_dir, split, class_name)
                self.assertTrue(os.path.isdir(class_dir))
                self.assertGreaterEqual(len(os.listdir(class_dir)), 1)


if __name__ == "__main__":
    unittest.main()
