# stones.ai

This project is a browser-based stone scanner and classifier.

## Train a custom rock classifier with Kaggle dataset

1. Install Python dependencies:
   ```bash
   python -m pip install tensorflow tensorflowjs kaggle
   ```

2. Configure Kaggle API credentials:
   - Place your `kaggle.json` file in `%USERPROFILE%\.kaggle\kaggle.json`
   - Or set `KAGGLE_USERNAME` and `KAGGLE_KEY` environment variables.

3. Download dataset and train:
   ```bash
   python train_rock_classifier.py --download --tfjs
   ```

4. Model outputs:
   - `model/rock_classifier/rock_classifier.h5`
   - `model/rock_classifier/tfjs/` (if TensorFlow.js export is enabled)
   - `model/rock_classifier/class_names.txt`

## Browser integration plan

1. Add the TFJS model files to the web app (for example `model/rock_classifier/tfjs/model.json`).
2. Load the TFJS model in `app.js` with `tf.loadGraphModel()`.
3. Preprocess upload images to the same size used in training (e.g. `224x224`).
4. Predict classes, then merge confidence with the existing image quality checks.

## Notes

- The Kaggle dataset contains rock images organized by type.
- It is best for a quick proof-of-concept transfer learning model.
- You can extend the dataset with your own `granite`, `basalt`, `marble`, `sandstone`, `limestone`, and `slate` images.
