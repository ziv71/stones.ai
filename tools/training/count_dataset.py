from pathlib import Path

PROJECT_ROOT = Path(__file__).resolve().parents[2]
root = PROJECT_ROOT / 'datasets'
counts = {}
for split in ['train', 'val', 'test']:
    for cls in ['granite', 'basalt', 'marble', 'sandstone', 'limestone', 'slate']:
        p = root / split / cls
        if p.exists():
            counts[(split, cls)] = len(list(p.glob('*')))

print(counts)
