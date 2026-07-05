import argparse
import os
import random
import shutil
import sys
import tempfile
import zipfile
from pathlib import Path
from typing import Iterable


TARGET_CLASSES = ["granite", "basalt", "marble", "sandstone", "limestone", "slate"]
ALLOWED_EXTENSIONS = {".jpg", ".jpeg", ".png", ".bmp", ".webp", ".tif", ".tiff"}


def iter_image_files(source_dir: str) -> Iterable[Path]:
    source_path = Path(source_dir)
    if not source_path.exists():
        raise FileNotFoundError(f"Source directory does not exist: {source_dir}")

    for path in sorted(source_path.rglob("*")):
        if path.is_file() and path.suffix.lower() in ALLOWED_EXTENSIONS:
            yield path


def normalize_class_name(class_name: str) -> str:
    value = class_name.strip().lower()
    alias_map = {
        "granite": "granite",
        "basalt": "basalt",
        "marble": "marble",
        "sandstone": "sandstone",
        "limestone": "limestone",
        "slate": "slate",
        "igneous": "granite",
        "metamorphic": "marble",
        "sedimentary": "sandstone",
        "coal": "limestone",
        "quartzite": "slate",
    }
    return alias_map.get(value, value)


def collect_source_files(source_dir: str) -> dict[str, list[Path]]:
    grouped_files: dict[str, list[Path]] = {name: [] for name in TARGET_CLASSES}
    for file_path in iter_image_files(source_dir):
        parent_name = file_path.parent.name.lower()
        normalized = normalize_class_name(parent_name)
        if normalized in grouped_files:
            grouped_files[normalized].append(file_path)
        else:
            parts = file_path.parts
            if len(parts) >= 2:
                grandparent_name = parts[-2].lower()
                normalized = normalize_class_name(grandparent_name)
                if normalized in grouped_files:
                    grouped_files[normalized].append(file_path)
    return grouped_files


def import_dataset(source_dir: str, output_dir: str, seed: int = 7, train_ratio: float = 0.70, val_ratio: float = 0.15) -> list[str]:
    if not 0 < train_ratio < 1 or not 0 < val_ratio < 1:
        raise ValueError("train_ratio and val_ratio must be between 0 and 1")

    random.seed(seed)
    grouped_files = collect_source_files(source_dir)
    output_path = Path(output_dir)
    for split_name in ["train", "val", "test"]:
        for class_name in TARGET_CLASSES:
            destination_dir = output_path / split_name / class_name
            destination_dir.mkdir(parents=True, exist_ok=True)

    copied_files: list[str] = []
    for class_name in TARGET_CLASSES:
        files = grouped_files.get(class_name, [])
        if not files:
            print(f"No images found for class '{class_name}', skipping.")
            continue

        random.shuffle(files)
        total = len(files)
        train_count = max(1, int(total * train_ratio)) if total > 1 else 1
        val_count = max(1, int(total * val_ratio)) if total > 2 else 0
        test_count = total - train_count - val_count

        if test_count < 0:
            test_count = 0

        splits = [
            ("train", train_count),
            ("val", val_count),
            ("test", test_count),
        ]
        start = 0
        for split_name, count in splits:
            for idx in range(count):
                source_file = files[start + idx]
                destination_dir = output_path / split_name / class_name
                destination_name = f"{class_name}_{start + idx + 1}{source_file.suffix.lower()}"
                destination_path = destination_dir / destination_name
                shutil.copy2(source_file, destination_path)
                copied_files.append(str(destination_path))
            start += count

    print(f"Imported images into {output_path}")
    return copied_files


def import_from_zip(zip_path: str, output_dir: str, seed: int = 7) -> list[str]:
    zip_file_path = Path(zip_path)
    if not zip_file_path.exists():
        raise FileNotFoundError(f"ZIP file does not exist: {zip_path}")

    temp_dir = Path(tempfile.mkdtemp(prefix="stone-import-", dir="."))
    try:
        with zipfile.ZipFile(zip_file_path, "r") as archive:
            archive.extractall(temp_dir)
        source_dir = temp_dir
        return import_dataset(str(source_dir), output_dir, seed=seed)
    finally:
        shutil.rmtree(temp_dir, ignore_errors=True)


def main():
    parser = argparse.ArgumentParser(description="Import rock images into the train/val/test folder layout used by the training script.")
    parser.add_argument("source", help="Path to a source folder or a ZIP archive containing class folders or images")
    parser.add_argument("--output-dir", default="datasets", help="Directory to create train/val/test splits under")
    parser.add_argument("--seed", type=int, default=7, help="Random seed for splitting")
    parser.add_argument("--train-ratio", type=float, default=0.70, help="Fraction of images assigned to train")
    parser.add_argument("--val-ratio", type=float, default=0.15, help="Fraction of images assigned to val")
    args = parser.parse_args()

    if not os.path.exists(args.source):
        raise SystemExit(f"Source path does not exist: {args.source}")

    if args.source.lower().endswith(".zip"):
        import_from_zip(args.source, args.output_dir, seed=args.seed)
    else:
        import_dataset(args.source, args.output_dir, seed=args.seed, train_ratio=args.train_ratio, val_ratio=args.val_ratio)


if __name__ == "__main__":
    main()
