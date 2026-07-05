# Rock and stone dataset recommendations

## Summary recommendation

The best starting source for this project is the Kaggle dataset "Rock Classifier" by Asghar Qamber Rizvi.

Why it is the best fit:
- It directly matches 5 of the 6 target classes: granite, basalt, marble, sandstone, and slate.
- It is public-domain licensed via CC0.
- It is compact and easy to import.
- It is already structured as image folders rather than a mixed CSV/metadata bundle.

The remaining target class, limestone, is not present in that dataset, so it should be supplemented from a second source or from your own collected images.

## Recommended public sources

| Source | Type | Classes / labels | Approx. image count | License | Compatibility with target classes |
|---|---|---|---:|---|---|
| Rock Classifier (Asghar Qamber Rizvi, Kaggle) | Kaggle | Granite, Basalt, Marble, Sandstone, Slate | 1,568 files | CC0: Public Domain | Excellent for 5/6 classes |
| Type of Rocks and Minerals Dataset (Kutlay Usta, Kaggle) | Kaggle | Igneous, Metamorphic, Sedimentary | 10,800+ files | Other (specified in description) | Moderate; broad categories only, not direct class mapping |
| Rock Classification Dataset (Salman Ibne Eunus, Kaggle) | Kaggle | Igneous, Metamorphic, Sedimentary (with subfolders) | 2,082 files | Other (specified in description) | Moderate; useful for broad rock-type pretraining, not ideal for fine-grained stone classes |
| Rock Classification (anglilian GitHub repo) | GitHub repo | Basalt, Coal, Granite, Limestone, Marble, Quartzite, Sandstone | Not clearly stated in repo page | Not clearly specified on the repo page | Good supplemental source for limestone and other stone-like examples |

## Best choice

### Primary dataset
- Rock Classifier by Asghar Qamber Rizvi
- Best for: granite, basalt, marble, sandstone, slate
- Why: closest match to your current target classes, easy import, public domain license, manageable size

### Supplemental data needed
- Limestone: add a small curated set from the GitHub repo or collect new images manually

## Import plan for the train/val/test structure

### 1. Create the root folders
Use the current structure under the datasets folder:

```text
datasets/
├── train/
├── val/
└── test/
```

Inside each split, create one folder per class:

```text
granite/
basalt/
marble/
sandstone/
limestone/
slate/
```

### 2. Prepare the source data
For the primary dataset:
- Download the Kaggle archive
- Extract the image folders
- Keep only the classes that match the six target labels

For limestone:
- Pull images from the supplemental GitHub repo or collect your own
- Keep the images visually consistent with the other classes

### 3. Split the data
Use a simple 70/15/15 split per class:
- 70% to train
- 15% to val
- 15% to test

Suggested minimum starting point:
- 100 images per class before training
- 300+ images per class for a more meaningful first pass

### 4. Copy images into the target folders
Example:
- train/granite/...
- val/granite/...
- test/granite/...

Do the same for each target class.

### 5. Apply collection rules
Before importing, keep only images that meet the quality standard:
- the stone fills most of the frame
- the image is in focus
- lighting is good
- there is only one stone type in the image
- no heavy filters, screenshots, or watermarks

### 6. Train with the new structure
Once the images are in place, run:

```bash
python train_rock_classifier.py --data-dir datasets --img-size 224 --batch-size 16 --epochs 18 --base-model efficientnetb0 --tfjs
```

## Practical recommendation for the next step

Use this phased approach:
1. Start with the five-class Kaggle dataset for granite, basalt, marble, sandstone, and slate.
2. Add a small limestone set from a supplemental source or your own collection.
3. Build a first working train/val/test split with at least 100 images per class.
4. Use that split to validate the full pipeline before scaling up.

## Recommended next action

The most practical next move is:
- import the Asghar Qamber Rizvi dataset into the train/val/test structure first,
- add limestone from a supplemental source,
- and then train a baseline model to establish real metrics before collecting more data.
