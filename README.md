# stones.ai

A browser-based stone scanner and classifier with a visual storytelling layer. The app lets a user upload or select a stone image, estimate its type, and surface geology, ecology, and art context. The repo also includes training utilities for building a stronger stone classifier model.

## Project Structure

```text
stones.ai/
|-- index.html                  # Main scanner/results page
|-- assets/
|   |-- css/
|   |   `-- styles.css
|   |-- js/
|   |   `-- app.js
|   `-- reference/              # Demo/reference images used by training helpers
|-- model/                      # Runtime/training model artifacts
|   `-- rock_classifier/
|       `-- tfjs/
|           |-- model.json
|           `-- class_names.txt
|-- datasets/                   # Local training data
|-- tools/
|   |-- training/               # Dataset, training, and model export scripts
|   `-- checks/                 # Small environment/version check scripts
|-- tests/                      # Python tests for tooling
|-- archives/                   # Old exports/backups
`-- README.md
```

## Runtime App

- `index.html` loads the scanner UI.
- `assets/js/app.js` handles upload, image preprocessing, quality scoring, model inference, matching, and result rendering.
- `assets/css/styles.css` controls the scanner/results visual design.

The browser app expects the stronger classifier files at:

```text
model/rock_classifier/tfjs/model.json
model/rock_classifier/tfjs/class_names.txt
```

If the model cannot load, the scanner falls back to heuristic/MobileNet matching.

## Training Tools

Training and dataset scripts live in `tools/training/`.

Useful commands from the repo root:

```bash
python tools/training/import_dataset.py --source-dir path/to/source --output-dir datasets
python tools/training/train_rock_classifier.py --data-dir datasets --img-size 224 --batch-size 16 --epochs 18 --base-model efficientnetb0 --tfjs
python tools/training/count_dataset.py
```

Small dependency/version probes live in `tools/checks/`.

## Local Run

From the repo root:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000/
```

## Notes

- Best place to improve scan behavior: `assets/js/app.js`.
- Best place to improve model quality: `tools/training/train_rock_classifier.py`.
- `datasets/`, `.venv/`, Python caches, and large generated model artifacts are ignored by default.
