from pathlib import Path
import shutil

root = Path('datasets')
for split in ['train', 'val', 'test']:
    for cls in ['granite', 'basalt', 'marble', 'sandstone', 'limestone', 'slate']:
        (root / split / cls).mkdir(parents=True, exist_ok=True)

asset_names = [
    'crystal-machine-check.png',
    'crystal-machine-final-check.png',
    'crystal-machine-no-squares-check.png',
    'crystal-machine-real-stone-check.png',
    'crystal-machine-real-stone-final.png',
    'crystal-machine-stone-check.png',
    'crystal-machine-stone-check-2.png',
    'linked-scan-check.png',
]

for image_name in asset_names:
    source = Path(image_name)
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
