# Dataset collection guide

Use this folder structure for collecting stone images for training.

```text
datasets/
├── train/
│   ├── granite/
│   ├── basalt/
│   ├── marble/
│   ├── sandstone/
│   ├── limestone/
│   └── slate/
├── val/
│   ├── granite/
│   ├── basalt/
│   ├── marble/
│   ├── sandstone/
│   ├── limestone/
│   └── slate/
└── test/
    ├── granite/
    ├── basalt/
    ├── marble/
    ├── sandstone/
    ├── limestone/
    └── slate/
```

## Collection tips
- Prefer close-up photos of stone surfaces.
- Use natural lighting when possible.
- Include a mix of textures, colors, and angles.
- Avoid busy backgrounds and hands/people in the frame.
- Aim for at least a few hundred good images per class over time.
- Keep each image focused on a single stone type.
- Use the same general framing where possible.

## Suggested minimum target
- 200-300 images per class for a first pass
- 500+ images per class for better reliability

## Recommended naming
- Use descriptive filenames, for example:
  - granite_001.jpg
  - basalt_closeup_02.png
  - marble_sideview_03.jpeg
