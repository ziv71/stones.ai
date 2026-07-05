# stones.ai

This repository is a browser-based stone scanner and classifier with a visual storytelling layer. The app lets a user upload or select a stone image, estimate its type, and surface geology/ecology/art context. The project also includes a training pipeline for building a stronger stone classifier model.

## Project map

```text
stones.ai/
├── index.html                 # Main app entry point for scanning and results UI
├── app.js                     # Core scan flow, image analysis, matching logic, and model loading
├── styles.css                 # Main UI styling for the scan experience
├── crystal-machine.html       # Secondary experience page for procedural crystal growth
├── crystal-machine.js         # 3D crystal simulation logic and controls
├── crystal-machine.css        # Styling for the crystal machine experience
├── train_rock_classifier.py   # Training pipeline for a custom stone classifier
├── README.md                  # Project overview and handoff notes
└── model/                     # Expected location for trained model artifacts
    └── rock_classifier/
        ├── rock_classifier.h5
        ├── class_names.txt
        └── tfjs/
            └── model.json
```

## File-by-file plan guide

### 1) index.html
Purpose:
- Primary website entry point for the scan experience.
- Hosts the scan chamber, upload control, result cards, and navigation between pages.

What matters for planning:
- The page loads the TensorFlow.js and MobileNet scripts.
- It provides the UI hooks that the logic in app.js depends on.
- It is the main surface for improving user experience and adding new detection features.

### 2) app.js
Purpose:
- Main application logic for the stone scanner.
- Handles image upload, preprocessing, quality scoring, model inference, matching, and result rendering.

What matters for planning:
- This is the highest-value file for improving accuracy.
- It currently combines: image signature extraction, image quality checks, MobileNet fallback, and stone matching.
- It is the right place to add a stronger classifier, better preprocessing, calibration, and confidence logic.

Key responsibilities:
- Load a custom TensorFlow.js model if present.
- Run inference on uploaded images.
- Score image readiness before trusting the prediction.
- Map model outputs to the six supported stone profiles.
- Display a result card with ecology, art, and origin content.

### 3) styles.css
Purpose:
- Visual design for the scanner and results experience.
- Controls layout, panels, buttons, scanner animation, and overall interface feel.

What matters for planning:
- This file is mostly presentation-focused, but it affects perceived quality and usability.
- Better scanning guidance and clearer confidence states can be added here.

### 4) crystal-machine.html
Purpose:
- Secondary page for the crystal-growth simulation experience.
- Separate from the stone recognition flow.

What matters for planning:
- This is a different feature domain and can be treated as an independent experience.
- It does not currently affect the stone detection model directly.

### 5) crystal-machine.js
Purpose:
- Implements the procedural 3D crystal-growth simulation.
- Includes controls for temperature, pressure, diffusion, symmetry, mineral type, and camera interaction.

What matters for planning:
- This is a generative art / visualization module.
- It is useful for extending the product experience after the detection model is improved.

### 6) crystal-machine.css
Purpose:
- Styles for the crystal machine experience.

What matters for planning:
- Presentation only.
- Low priority unless the visual experience needs refinement.

### 7) train_rock_classifier.py
Purpose:
- Training pipeline for building a custom stone classifier.
- Supports downloading data, preparing datasets, training a transfer-learning model, and exporting it to TensorFlow.js.

What matters for planning:
- This is the training entry point for improving classification quality.
- The current version is designed to be upgraded with a stronger backbone and better data handling.
- It is the file to edit when tuning accuracy, model size, and export behavior.

### 8) model/
Purpose:
- Runtime location for trained model artifacts.
- Expected files include the trained Keras model, class labels, and TensorFlow.js export.

What matters for planning:
- The browser app expects these files to be present for the stronger inference path.
- If the model is missing, the app falls back to a weaker heuristic path.

## Recommended next steps for a stronger LLM planner

### Priority 1: Build a real evaluation pipeline
- Create train / val / test splits.
- Report validation accuracy, per-class accuracy, and confusion matrices.
- Save an evaluation report from training so progress can be measured.

### Priority 2: Add an unknown or uncertain result
- If the top confidence is too low, show an uncertain state instead of forcing a label.
- Use a margin check between the top two predictions to avoid false confidence.

### Priority 3: Improve image readiness scoring
- Measure blur, brightness, stone coverage, and background complexity.
- Surface a quality score before trusting the classifier output.

### Priority 4: Show top-3 predictions
- Display the top three choices with percentages instead of a single hard label.
- This improves consumer experience and reduces the feel of overconfidence.

### Priority 5: Explain the prediction
- Show short reasons such as texture, grain pattern, visible mineral contrast, or lighting quality.
- This makes the system more interpretable even if the science is imperfect.

### Priority 6: Collect more training data
- Gather more images per stone class, especially close-up texture shots.
- This is likely the biggest long-term gain.

### Priority 7: Add multi-photo scanning
- Ask for a full photo, a texture photo, and a side view.
- Combine predictions across views for stronger results.

## Dataset collection setup

A dataset intake structure is now available in [datasets/README.md](datasets/README.md) and [datasets/sample_collection_plan.md](datasets/sample_collection_plan.md).

Use this layout for your training images:

```text
datasets/
├── train/
├── val/
└── test/
```

Each split should contain class folders such as `granite`, `basalt`, `marble`, `sandstone`, `limestone`, and `slate`.

## Dataset research and import plan

A detailed dataset recommendation and import plan is available in [datasets/dataset_research.md](datasets/dataset_research.md).

The best starting source is the Kaggle dataset "Rock Classifier" by Asghar Qamber Rizvi for granite, basalt, marble, sandstone, and slate, with limestone added from a supplemental source or your own collection.

## Suggested training command

```bash
python train_rock_classifier.py --data-dir datasets --img-size 224 --batch-size 16 --epochs 18 --base-model efficientnetb0 --tfjs
```

## Suggested local run command

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000/
```

## Notes for handoff

- The most important file for improving accuracy is app.js.
- The most important file for improving model quality is train_rock_classifier.py.
- The current project is already structured for a stronger classifier workflow; the main remaining work is data quality, model training, and confidence handling.
