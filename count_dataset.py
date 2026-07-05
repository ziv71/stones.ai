from pathlib import Path

root = Path('datasets')
counts = {}
for split in ['train', 'val', 'test']:
    for cls in ['granite', 'basalt', 'marble', 'sandstone', 'limestone', 'slate']:
        p = root / split / cls
        if p.exists():
            counts[(split, cls)] = len(list(p.glob('*')))

print(counts)
