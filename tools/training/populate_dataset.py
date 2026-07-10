from pathlib import Path
import shutil

PROJECT_ROOT = Path(__file__).resolve().parents[2]
root = PROJECT_ROOT / 'datasets'
reference_dir = PROJECT_ROOT / 'assets' / 'reference'
for split in ['train', 'val', 'test']:
    for cls in ['granite', 'basalt', 'marble', 'sandstone', 'limestone', 'slate']:
        (root / split / cls).mkdir(parents=True, exist_ok=True)

asset_names = [
    'linked-scan-check.png',
]

for image_name in asset_names:
    source = reference_dir / image_name
    if not source.exists():
        continue
    class_name = 'granite'
    if 'real' in source.stem.lower() or 'final' in source.stem.lower():
        class_name = 'marble'
    elif 'no-squares' in source.stem.lower() or 'stone-check' in source.stem.lower():
        class_name = 'slate'
    target = root / 'train' / class_name / source.name
    target.parent.mkdir(parents=True, exist_ok=True)
    shutil.copy2(source, target)

print('Dataset folders populated from available workspace images.')
