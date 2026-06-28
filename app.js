const stones = [
  {
    id: "granite",
    name: "Granite",
    category: "Igneous rock",
    colors: "White, black, gray, pink",
    texture: "Coarse crystal grains",
    formation: "Slow cooling magma below the surface",
    found: "Mountain roots, continental crust, quarries",
    hardness: "High",
    eco: 42,
    ecoLabel: "Medium extraction concern",
    confidence: 94,
    signature: { brightness: 0.56, saturation: 0.2, warmth: 0.52, contrast: 0.42, edge: 0.5 },
    fact: "Granite often shows visible mineral crystals because it cooled slowly underground.",
    ecology: [
      "Granite landscapes can support thin soils and hardy plants adapted to rocky terrain.",
      "Quarrying granite can change drainage paths, create dust, and fragment habitats.",
      "Responsible use means choosing durable pieces, reusing slabs, and limiting unnecessary extraction."
    ],
    art: [
      "Excellent for monuments, public sculpture, kitchen surfaces, and polished architectural details.",
      "Its speckled pattern can inspire terrazzo, mosaic layouts, and digital texture studies.",
      "A strong eco-design idea is to use broken granite offcuts as decorative aggregate."
    ],
    life: [
      ["Molten origin", "Magma cools slowly deep underground and crystals begin to lock together."],
      ["Uplift", "Erosion reveals the rock after thousands to millions of years of landscape change."],
      ["Human use", "People cut and polish it for buildings, art, and long-lasting surfaces."],
      ["Sustainable future", "Reused granite can avoid new quarry damage and keep material in circulation."]
    ],
    svg: "granite"
  },
  {
    id: "basalt",
    name: "Basalt",
    category: "Volcanic igneous rock",
    colors: "Black, dark gray, charcoal",
    texture: "Fine-grained, sometimes porous",
    formation: "Rapid cooling lava at or near the surface",
    found: "Volcanic fields, ocean crust, lava flows",
    hardness: "High",
    eco: 34,
    ecoLabel: "Low to medium concern",
    confidence: 91,
    signature: { brightness: 0.2, saturation: 0.16, warmth: 0.36, contrast: 0.35, edge: 0.35 },
    fact: "Basalt makes up much of the ocean floor and is one of Earth's most common rocks.",
    ecology: [
      "Weathered basalt can enrich soil with minerals over long periods.",
      "Mining must avoid damaging young volcanic habitats and culturally important landscapes.",
      "Crushed basalt is being studied for carbon capture through enhanced rock weathering."
    ],
    art: [
      "Its dark color gives sculpture and architecture a powerful, minimal look.",
      "Vesicles and flow textures can inspire ceramics, black mosaics, and stage-set surfaces.",
      "Basalt columns are a strong reference for geometric installation art."
    ],
    life: [
      ["Eruption", "Lava reaches the surface and spreads across the land or ocean floor."],
      ["Rapid cooling", "Tiny crystals form because the lava cools quickly."],
      ["Weathering", "Rain and air slowly break the surface into mineral-rich soil."],
      ["Design reuse", "Basalt can become tiles, aggregate, sculpture, or landscape material."]
    ],
    svg: "basalt"
  },
  {
    id: "marble",
    name: "Marble",
    category: "Metamorphic rock",
    colors: "White, cream, green, rose, gray",
    texture: "Smooth crystalline veins",
    formation: "Limestone transformed by heat and pressure",
    found: "Metamorphic belts, old mountain regions",
    hardness: "Medium",
    eco: 63,
    ecoLabel: "High quarry sensitivity",
    confidence: 89,
    signature: { brightness: 0.78, saturation: 0.14, warmth: 0.54, contrast: 0.32, edge: 0.48 },
    fact: "Marble has been used in famous sculptures because it can hold fine detail.",
    ecology: [
      "Marble quarrying can scar landscapes and produce large volumes of stone waste.",
      "Dust and runoff need careful control near communities and water systems.",
      "Using reclaimed marble reduces demand for new cuts from sensitive sites."
    ],
    art: [
      "Classic material for sculpture, carved relief, flooring, and luxury interiors.",
      "Vein patterns can inspire line drawings, ink marbling, fashion prints, and product design.",
      "Fragments can become mosaic tiles or small crafted objects instead of waste."
    ],
    life: [
      ["Sea floor start", "Ancient shells and calcium carbonate settle into limestone."],
      ["Pressure change", "Heat and pressure recrystallize limestone into marble."],
      ["Carving phase", "Artists and builders value the stone for its smooth workability."],
      ["Circular use", "Old marble can be recut, repaired, or transformed into mosaics."]
    ],
    svg: "marble"
  },
  {
    id: "sandstone",
    name: "Sandstone",
    category: "Sedimentary rock",
    colors: "Tan, red, yellow, brown",
    texture: "Layered sand grains",
    formation: "Compacted and cemented sand",
    found: "Deserts, riverbeds, cliffs, beaches",
    hardness: "Low to medium",
    eco: 38,
    ecoLabel: "Medium habitat concern",
    confidence: 87,
    signature: { brightness: 0.55, saturation: 0.44, warmth: 0.78, contrast: 0.36, edge: 0.42 },
    fact: "Sandstone layers can preserve ancient dunes, river channels, and even footprints.",
    ecology: [
      "Sandstone cliffs create nesting and shelter spaces for specialized species.",
      "Extraction can destabilize slopes and damage visible geological history.",
      "Low-impact sourcing protects scenic landforms and avoids unnecessary erosion."
    ],
    art: [
      "Warm colors make it useful for carved facades, garden walls, and relief sculpture.",
      "Layering suggests landscape painting, ceramics, and tactile classroom models.",
      "Weathered blocks can inspire soft-edge architecture and natural color palettes."
    ],
    life: [
      ["Loose grains", "Sand moves by wind, river, or waves and collects in layers."],
      ["Compaction", "Burial squeezes grains together while minerals cement them."],
      ["Exposure", "Erosion reveals cliffs, arches, and striped rock faces."],
      ["Careful use", "Builders can use local sandstone while protecting fragile landforms."]
    ],
    svg: "sandstone"
  },
  {
    id: "limestone",
    name: "Limestone",
    category: "Sedimentary rock",
    colors: "White, beige, gray, pale yellow",
    texture: "Soft, fossil-rich, chalky",
    formation: "Marine shells and carbonate mud compacted over time",
    found: "Shallow sea deposits, caves, cliffs",
    hardness: "Low to medium",
    eco: 71,
    ecoLabel: "High carbon and habitat concern",
    confidence: 86,
    signature: { brightness: 0.72, saturation: 0.22, warmth: 0.63, contrast: 0.24, edge: 0.24 },
    fact: "Limestone can dissolve slowly in rainwater, forming caves and karst landscapes.",
    ecology: [
      "Karst limestone stores groundwater and supports cave ecosystems.",
      "Cement production from limestone releases significant carbon dioxide.",
      "Responsible use includes protecting caves, reducing cement waste, and choosing low-carbon mixes."
    ],
    art: [
      "Useful for carving, building blocks, limewash, and soft architectural details.",
      "Fossil patterns can inspire printmaking, classroom casts, and natural history displays.",
      "Lime-based finishes connect historical craft with modern sustainable design."
    ],
    life: [
      ["Ocean beginning", "Tiny shells and carbonate particles collect on an ancient sea floor."],
      ["Rock formation", "Sediment compacts into stone, sometimes preserving fossils."],
      ["Cave making", "Water dissolves paths through the rock and creates karst features."],
      ["Modern challenge", "Its role in cement makes careful material choices important."]
    ],
    svg: "limestone"
  },
  {
    id: "slate",
    name: "Slate",
    category: "Metamorphic rock",
    colors: "Blue-gray, green, black, purple-gray",
    texture: "Flat sheets, fine grain",
    formation: "Shale changed by low-grade metamorphism",
    found: "Old mountain belts and folded sediments",
    hardness: "Medium",
    eco: 29,
    ecoLabel: "Lower impact when durable",
    confidence: 90,
    signature: { brightness: 0.25, saturation: 0.23, warmth: 0.3, contrast: 0.34, edge: 0.56 },
    fact: "Slate splits into thin sheets, which made it useful for roofs and writing tablets.",
    ecology: [
      "Long-lasting slate roofs can reduce replacement waste over decades.",
      "Quarries still need land restoration and careful water management.",
      "Using reclaimed slate tiles preserves embodied energy and historic material."
    ],
    art: [
      "Ideal for roof patterns, engraved signs, drawing tablets, and dark display bases.",
      "Sheet-like cleavage inspires layered paper art, relief maps, and architectural cladding.",
      "Broken slate can become garden labels, mosaics, or textured wall panels."
    ],
    life: [
      ["Mud to shale", "Fine mud settles, compacts, and becomes shale."],
      ["Mountain pressure", "Pressure changes the shale into slate with strong flat cleavage."],
      ["Split sheets", "Craftspeople separate it into thin durable layers."],
      ["Reuse", "Old tiles can be salvaged for roofs, gardens, and art projects."]
    ],
    svg: "slate"
  }
];

const MIN_RELIABLE_CONFIDENCE = 66;
const ML_LABEL_MAP = {
  granite: "granite",
  basalt: "basalt",
  marble: "marble",
  sandstone: "sandstone",
  limestone: "limestone",
  slate: "slate"
};
const ML_BACKGROUND_LABELS = new Set([
  "sky",
  "cloud",
  "forest",
  "tree",
  "woodland",
  "mountain",
  "water",
  "river",
  "ocean",
  "lake",
  "beach",
  "field",
  "grass",
  "sand",
  "desert",
  "ice",
  "snow",
  "person",
  "face",
  "hand",
  "building",
  "city",
  "vehicle"
]);
let mobileNetModel = null;

async function loadMobileNetModel() {
  if (typeof mobilenet === "undefined") return;
  try {
    mobileNetModel = await mobilenet.load();
    console.log("MobileNet model loaded");
  } catch (error) {
    console.warn("Failed to load MobileNet model", error);
    mobileNetModel = null;
  }
}

loadMobileNetModel();

const sampleGrid = document.querySelector("#sampleGrid");
const previewImage = document.querySelector("#previewImage");
const emptyState = document.querySelector("#emptyState");
const fileInput = document.querySelector("#fileInput");
const scanButton = document.querySelector("#scanButton");
const scanFrame = document.querySelector("#scanFrame");
const analysisStrip = document.querySelector("#analysisStrip");
const resultEmpty = document.querySelector("#resultEmpty");
const resultCard = document.querySelector("#resultCard");
const resetButton = document.querySelector("#resetButton");
const dropZone = document.querySelector("#dropZone");
const tabPanel = document.querySelector("#tabPanel");
const scanStatus = document.querySelector("#scanStatus");
const signalGrid = document.querySelector("#signalGrid");
const qualityPanel = document.querySelector("#qualityPanel");
const qualitySummary = document.querySelector("#qualitySummary");
const qualityBarFill = document.querySelector("#qualityBarFill");
const qualityTips = document.querySelector("#qualityTips");
const qualityNotice = document.querySelector("#qualityNotice");
const resultStoneArt = document.querySelector("#resultStoneArt");
const navButtons = document.querySelectorAll(".nav-button");
const appPages = document.querySelectorAll(".app-page");

let selectedStone = stones[0];
let selectedImage = "";
let activeTab = "about";
let activePage = "scanPage";

function showPage(pageId) {
  activePage = pageId;
  appPages.forEach((page) => page.classList.toggle("active", page.id === pageId));
  navButtons.forEach((button) => button.classList.toggle("active", button.dataset.page === pageId));
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function stoneSvg(type) {
  const styles = {
    granite: ["#7d7569", "#ead8b7", "#2f302e", "#d76f9f"],
    basalt: ["#1b1b1c", "#57514b", "#050505", "#efc984"],
    marble: ["#e9dfcf", "#b79f90", "#6e5f56", "#d76f9f"],
    sandstone: ["#b27a4d", "#efc984", "#55352b", "#f3e4cf"],
    limestone: ["#d7c8aa", "#fff1cf", "#766955", "#89b7a7"],
    slate: ["#263035", "#71838a", "#101417", "#d76f9f"]
  }[type];

  return `
    <svg viewBox="0 0 300 150" role="img" aria-label="${type} stone illustration">
      <rect width="300" height="150" fill="#090707"/>
      <path d="M0 35c42 18 86 18 132 0s91-18 136 0 66 17 92-3v118H0Z" fill="#15100f" opacity=".8"/>
      <path d="M47 82c3-37 45-62 92-60 48 2 91 25 111 58 17 28 2 55-37 66-49 14-128 5-157-20-11-10-14-25-9-44Z" fill="${styles[0]}"/>
      <path d="M77 72c43-25 105-24 151 3M67 105c50 25 108 31 174 12" stroke="${styles[1]}" stroke-width="9" stroke-linecap="round" opacity=".62"/>
      <path d="M112 40c-13 21-18 43-11 65M181 36c23 21 33 48 31 82" stroke="${styles[2]}" stroke-width="7" stroke-linecap="round" opacity=".46"/>
      <path d="M61 88c38 8 74 5 108-9 38-16 75-14 111 5" stroke="${styles[3]}" stroke-width="4" stroke-linecap="round" opacity=".38"/>
      <circle cx="96" cy="93" r="5" fill="${styles[2]}" opacity=".7"/>
      <circle cx="154" cy="61" r="4" fill="${styles[1]}" opacity=".8"/>
      <circle cx="207" cy="96" r="6" fill="${styles[2]}" opacity=".5"/>
    </svg>`;
}

function svgDataUrl(type) {
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(stoneSvg(type))}`;
}

function renderSamples() {
  sampleGrid.innerHTML = stones.map((stone) => `
    <button class="sample-card ${stone.id === selectedStone.id ? "selected" : ""}" type="button" data-id="${stone.id}">
      <div class="stone-art">${stoneSvg(stone.svg)}</div>
      <strong>${stone.name}</strong>
      <p>${stone.category} - ${stone.texture}</p>
    </button>
  `).join("");
}

function selectStone(id) {
  selectedStone = { ...(stones.find((stone) => stone.id === id) || stones[0]), isUncertain: false };
  selectedImage = svgDataUrl(selectedStone.svg);
  previewImage.src = selectedImage;
  previewImage.style.display = "block";
  emptyState.style.display = "none";
  updateSignalGrid(selectedStone.signature);
  scanStatus.textContent = "Sample loaded";
  renderSamples();
  showPage("scanPage");
}

function chooseUpload(file) {
  if (!file || !file.type.startsWith("image/")) return;
  const reader = new FileReader();
  reader.onload = () => {
    selectedImage = reader.result;
    previewImage.src = selectedImage;
    previewImage.style.display = "block";
    emptyState.style.display = "none";
    analyzeImageSignature(selectedImage).then(({ signature, quality, mlLabels }) => {
      const match = matchStone(signature, mlLabels);
      selectedStone = match.confidence >= MIN_RELIABLE_CONFIDENCE && quality.score >= 50
        ? {
            ...match.stone,
            confidence: match.confidence,
            matchedSignature: signature,
            secondChoice: match.secondChoice,
            mlLabels,
            quality,
            isUncertain: false
          }
        : createUncertainResult(match, signature, quality, mlLabels);
      updateSignalGrid(signature);
      renderQualityPanel(quality);
      scanStatus.textContent = quality.label;
      renderSamples();
    });
  };
  reader.readAsDataURL(file);
}

function createUncertainResult(match, signature, quality, mlLabels = []) {
  const topWarning = quality.warnings.length ? quality.warnings[0] : `The closest stone-like profile was ${match.stone.name}, but the match is too weak to identify confidently.`;
  return {
    id: "uncertain",
    name: "No Reliable Stone Detected",
    category: "Low-confidence scan",
    colors: "Mixed image signals",
    texture: "Stone texture not clear",
    formation: topWarning,
    found: "Unknown",
    hardness: "Unknown",
    eco: 0,
    ecoLabel: "Not enough data",
    confidence: match.confidence,
    signature,
    secondChoice: match.secondChoice,
    closestStone: match.stone,
    mlLabels,
    quality,
    isUncertain: true,
    fact: topWarning,
    ecology: [
      "The scanner needs a clear view of the stone surface before giving ecology guidance.",
      "Use a close-up photo with the stone filling most of the frame.",
      "Avoid faces, hands, sky, text, or busy backgrounds in the scan image."
    ],
    art: [
      "For art analysis, upload a close texture photo so the pattern can be read clearly.",
      "A simple background helps the scanner focus on color, contrast, and surface density.",
      "If this is an exhibition demo, use one of the sample stones for a reliable guided result."
    ],
    life: [
      ["Scan quality", "The uploaded image does not contain enough stone-like surface information."],
      ["Closest hint", `${match.stone.name} was the nearest profile, but confidence stayed below the reliable threshold.`],
      ["Improve image", "Crop closer to the object and keep the stone centered in strong light."],
      ["Scan again", "Run the scan again with a clearer stone photo or choose a sample."]
    ],
    svg: "granite"
  };
}

function analyzeImageSignature(src) {
  return new Promise((resolve) => {
    const image = new Image();
    image.crossOrigin = "anonymous";
    image.onload = async () => {
      const square = Math.min(image.width, image.height);
      const size = 160;
      const canvas = document.createElement("canvas");
      canvas.width = size;
      canvas.height = size;
      const context = canvas.getContext("2d", { willReadFrequently: true });
      const sx = (image.width - square) / 2;
      const sy = (image.height - square) / 2;
      context.drawImage(image, sx, sy, square, square, 0, 0, size, size);
      const imageData = context.getImageData(0, 0, size, size);
      const pixels = imageData.data;
      let brightness = 0;
      let saturation = 0;
      let warmth = 0;
      let contrastSum = 0;
      let edgeSum = 0;
      let foregroundCount = 0;
      const luma = [];

      for (let y = 0; y < size; y += 1) {
        for (let x = 0; x < size; x += 1) {
          const index = (y * size + x) * 4;
          const r = pixels[index] / 255;
          const g = pixels[index + 1] / 255;
          const b = pixels[index + 2] / 255;
          const max = Math.max(r, g, b);
          const min = Math.min(r, g, b);
          const light = 0.2126 * r + 0.7152 * g + 0.0722 * b;
          const sat = max === 0 ? 0 : (max - min) / max;
          const warm = clamp((r + 0.35 * g - b + 0.35) / 1.7);
          const isCenterRegion = x > size * 0.2 && x < size * 0.8 && y > size * 0.2 && y < size * 0.8;
          const nextIndex = (y * size + x + 1) * 4;
          const rightLuma = x < size - 1 ? (pixels[nextIndex] / 255 * 0.2126 + pixels[nextIndex + 1] / 255 * 0.7152 + pixels[nextIndex + 2] / 255 * 0.0722) : light;
          const downIndex = ((y + 1) * size + x) * 4;
          const below = y < size - 1 ? (pixels[downIndex] / 255 * 0.2126 + pixels[downIndex + 1] / 255 * 0.7152 + pixels[downIndex + 2] / 255 * 0.0722) : light;
          const localContrast = Math.max(Math.abs(light - rightLuma), Math.abs(light - below));
          const isForeground = isCenterRegion && light > 0.06 && light < 0.95 && (sat > 0.06 || localContrast > 0.12 || Math.abs(light - 0.5) > 0.08);

          if (isForeground) {
            foregroundCount += 1;
            brightness += light;
            saturation += sat;
            warmth += warm;
            luma.push(light);
            contrastSum += Math.abs(light - 0.5);
          }

          if (x < size - 1) edgeSum += Math.abs(light - rightLuma);
          if (y < size - 1) edgeSum += Math.abs(light - below);
        }
      }

      const total = foregroundCount || size * size;
      brightness /= total;
      saturation /= total;
      warmth /= total;

      const signature = {
        brightness,
        saturation,
        warmth,
        contrast: clamp(contrastSum / total * 2.4),
        edge: clamp(edgeSum / (total * 2) * 5)
      };

      const mlLabels = await predictImageLabels(image);
      const quality = assessImageQuality(imageData, signature, foregroundCount / (size * size), mlLabels);

      resolve({ signature, quality, mlLabels });
    };
    image.onerror = () => resolve({
      signature: stones[0].signature,
      quality: {
        score: 0,
        label: "Image load error",
        warnings: ["Unable to load the uploaded image."]
      },
      mlLabels: []
    });
    image.src = src;
  });
}

function matchStone(signature, mlLabels = []) {
  const weights = {
    brightness: 1.35,
    saturation: 0.95,
    warmth: 1.15,
    contrast: 1,
    edge: 0.85
  };
  const ranked = stones.map((stone) => {
    const distance = Object.keys(weights).reduce((sum, key) => {
      return sum + Math.abs(signature[key] - stone.signature[key]) * weights[key];
    }, 0);
    return { stone, distance };
  }).sort((a, b) => a.distance - b.distance);

  const baselineConfidence = Math.round(clamp(1 - ranked[0].distance / 1.85, 0.58, 0.96) * 100);
  const mlMatch = findMlStoneMatch(mlLabels);

  if (mlMatch && mlMatch.probability > 0.45) {
    const mlConfidence = Math.round(clamp(0.8 + mlMatch.probability * 0.2, 0, 1) * 100);
    if (mlMatch.stone.id === ranked[0].stone.id || baselineConfidence < 75) {
      return {
        stone: mlMatch.stone,
        secondChoice: ranked[0].stone.id === mlMatch.stone.id ? ranked[1].stone : ranked[0].stone,
        confidence: Math.max(baselineConfidence, mlConfidence)
      };
    }
  }

  return {
    stone: ranked[0].stone,
    secondChoice: ranked[1].stone,
    confidence: baselineConfidence
  };
}

function findMlStoneMatch(labels) {
  if (!labels || !labels.length) return null;
  const synonyms = {
    granite: "granite",
    basalt: "basalt",
    marble: "marble",
    sandstone: "sandstone",
    limestone: "limestone",
    slate: "slate",
    quartz: "marble",
    amethyst: "marble",
    lava: "basalt",
    basaltic: "basalt",
    sand: "sandstone",
    rock: null,
    stone: null,
    crystal: null,
    "volcanic rock": "basalt",
    "metamorphic rock": "slate",
    "sedimentary rock": "sandstone",
    sky: null,
    cloud: null,
    forest: null,
    tree: null,
    woodland: null,
    mountain: null,
    water: null,
    river: null,
    ocean: null,
    lake: null,
    beach: null,
    field: null,
    grass: null,
    desert: null,
    ice: null,
    snow: null,
    person: null,
    face: null,
    hand: null,
    bird: null,
    building: null,
    city: null,
    vehicle: null
  };

  const normalized = labels.flatMap((entry) => {
    return entry.className.toLowerCase().split(/[,&]/g).map((part) => ({
      label: part.trim(),
      probability: entry.probability
    }));
  });

  for (const entry of normalized.sort((a, b) => b.probability - a.probability)) {
    const key = entry.label.replace(/[^a-z0-9 ]/g, "").trim();
    if (!key) continue;
    if (synonyms.hasOwnProperty(key)) {
      const mapping = synonyms[key];
      if (mapping && ML_LABEL_MAP[mapping]) {
        return { stone: stones.find((stone) => stone.id === mapping), probability: entry.probability };
      }
      return null;
    }
    if (ML_LABEL_MAP[key]) {
      return { stone: stones.find((stone) => stone.id === key), probability: entry.probability };
    }
  }

  return null;
}

function predictImageLabels(image) {
  if (!mobileNetModel) return Promise.resolve([]);
  return mobileNetModel.classify(image, 5).catch(() => []);
}

function assessImageQuality(imageData, signature, foregroundRatio = 0.5, mlLabels = []) {
  const size = Math.sqrt(imageData.data.length / 4);
  const pixels = imageData.data;
  let borderLuma = 0;
  let borderCount = 0;
  let centerLuma = 0;
  let centerCount = 0;
  let sharpness = 0;

  for (let y = 0; y < size; y += 1) {
    for (let x = 0; x < size; x += 1) {
      const index = (y * size + x) * 4;
      const r = pixels[index] / 255;
      const g = pixels[index + 1] / 255;
      const b = pixels[index + 2] / 255;
      const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b;
      const isBorder = x < 12 || x >= size - 12 || y < 12 || y >= size - 12;
      if (isBorder) {
        borderLuma += luma;
        borderCount += 1;
      } else {
        centerLuma += luma;
        centerCount += 1;
      }

      if (x < size - 1) {
        const right = (y * size + x + 1) * 4;
        const rightLuma = 0.2126 * (pixels[right] / 255) + 0.7152 * (pixels[right + 1] / 255) + 0.0722 * (pixels[right + 2] / 255);
        sharpness += Math.abs(luma - rightLuma);
      }
      if (y < size - 1) {
        const down = ((y + 1) * size + x) * 4;
        const downLuma = 0.2126 * (pixels[down] / 255) + 0.7152 * (pixels[down + 1] / 255) + 0.0722 * (pixels[down + 2] / 255);
        sharpness += Math.abs(luma - downLuma);
      }
    }
  }

  const borderAvg = borderCount ? borderLuma / borderCount : 0;
  const centerAvg = centerCount ? centerLuma / centerCount : 0;
  const borderDifference = Math.abs(borderAvg - centerAvg);
  const sharpnessScore = clamp(sharpness / (size * size * 2) * 6);
  const focusScore = clamp(foregroundRatio * 1.5);
  const sizeScore = clamp(foregroundRatio * 1.1 + Math.min(size, 160) / 160 * 0.2);
  const contrastScore = signature.contrast;
  const brightnessScore = 1 - Math.abs(signature.brightness - 0.5) * 1.6;
  const overall = clamp((sharpnessScore * 0.28) + (focusScore * 0.28) + (sizeScore * 0.2) + (contrastScore * 0.14) + (brightnessScore * 0.1));

  const normalizedLabels = mlLabels.flatMap((entry) => entry.className.toLowerCase().split(/[,&]/g).map((part) => part.trim().replace(/[^a-z0-9 ]/g, "")));
  const detectedBackground = normalizedLabels.find((label) => ML_BACKGROUND_LABELS.has(label));

  const warnings = [];
  if (detectedBackground) warnings.push(`Background contains ${detectedBackground}. Crop closer to the stone and avoid sky, trees, buildings or water.`);
  if (foregroundRatio < 0.35) warnings.push("The stone is too small in the frame. Crop closer to the object.");
  if (sharpnessScore < 0.25) warnings.push("The image looks soft or blurred. Use a sharper focus.");
  if (focusScore < 0.5) warnings.push("The frame is dominated by background. Center the stone and reduce surrounding clutter.");
  if (borderDifference < 0.04) warnings.push("Most of the image looks like background. Use a cleaner backdrop or place the stone on a neutral surface.");
  if (signature.brightness < 0.18) warnings.push("The scan is too dark. Add more light or avoid shadows.");
  if (signature.brightness > 0.88) warnings.push("The scan is too bright. Reduce glare and bright reflections.");

  const label = warnings.length ? warnings[0] : "Ready to identify";

  return {
    score: Math.round(overall * 100),
    label,
    warnings,
    sharpness: Math.round(sharpnessScore * 100),
    focus: Math.round(focusScore * 100),
    sizeScore: Math.round(sizeScore * 100),
    brightness: Math.round(signature.brightness * 100),
    contrast: Math.round(contrastScore * 100)
  };
}

function clamp(value, min = 0, max = 1) {
  return Math.min(max, Math.max(min, value));
}

function scanStone() {
  if (!selectedImage) {
    selectStone(selectedStone.id);
  }

  scanStatus.textContent = "Scanning";
  resultEmpty.classList.remove("hidden");
  resultCard.classList.add("hidden");
  scanFrame.classList.add("is-scanning");
  [...analysisStrip.children].forEach((step) => step.classList.remove("active"));

  [...analysisStrip.children].forEach((step, index) => {
    window.setTimeout(() => {
      step.classList.add("active");
      scanStatus.textContent = step.dataset.step;
    }, 380 * index);
  });

  window.setTimeout(() => {
    scanFrame.classList.remove("is-scanning");
    activeTab = "about";
    scanStatus.textContent = selectedStone.isUncertain ? "Needs clearer scan" : "Match locked";
    renderResult(selectedStone, selectedImage);
    showPage("resultsPage");
  }, 1850);
}

function renderResult(stone) {
  resultEmpty.classList.add("hidden");
  resultCard.classList.remove("hidden");
  document.querySelector("#confidenceLabel").textContent = stone.isUncertain
    ? "Uncertain Scan"
    : stone.confidence < 90 ? "Closest Match" : "Identification";
  document.querySelector("#stoneName").textContent = stone.name;
  document.querySelector("#stoneCategory").textContent = stone.category;
  document.querySelector("#confidenceValue").textContent = `${stone.confidence}%`;
  document.querySelector(".confidence-meter").style.setProperty("--score", `${stone.confidence}%`);
  if (qualityNotice) {
    const qualityText = stone.quality?.label || "Image readiness is still being evaluated.";
    qualityNotice.textContent = stone.isUncertain ? `Quality check: ${qualityText}` : `Quality check: ${qualityText}`;
  }
  resultStoneArt.innerHTML = stone.isUncertain ? stoneSvg((stone.closestStone || stones[0]).svg) : stoneSvg(stone.svg);
  document.querySelector("#quickFacts").innerHTML = [
    ["Texture", stone.texture],
    ["Colors", stone.colors],
    ["Found In", stone.found],
    ["Formation", stone.formation]
  ].map(([label, value]) => `<div class="fact"><span>${label}</span><strong>${value}</strong></div>`).join("");

  document.querySelectorAll(".tab").forEach((button) => {
    button.classList.toggle("active", button.dataset.tab === activeTab);
  });
  renderTab(stone);
}

function updateSignalGrid(signature) {
  if (!signature) {
    signalGrid.innerHTML = `
      <div><span>Brightness</span><strong>--</strong></div>
      <div><span>Warmth</span><strong>--</strong></div>
      <div><span>Contrast</span><strong>--</strong></div>
      <div><span>Texture</span><strong>--</strong></div>`;
    return;
  }

  signalGrid.innerHTML = [
    ["Brightness", signature.brightness],
    ["Warmth", signature.warmth],
    ["Contrast", signature.contrast],
    ["Texture", signature.edge]
  ].map(([label, value]) => `
    <div><span>${label}</span><strong>${Math.round(value * 100)}%</strong></div>
  `).join("");
}

function renderQualityPanel(quality) {
  if (!qualityPanel || !qualitySummary || !qualityBarFill || !qualityTips) return;

  const score = quality?.score ?? 0;
  const summary = quality?.label || "Waiting for scan";
  const tips = quality?.warnings?.length ? quality.warnings : ["The image looks suitable for a first pass. Keep the stone centered for better results."];

  qualitySummary.textContent = summary;
  qualityBarFill.style.width = `${Math.max(8, score)}%`;
  qualityBarFill.style.background = score >= 75 ? "linear-gradient(90deg, var(--accent), var(--sky))" : score >= 50 ? "linear-gradient(90deg, var(--gold), var(--accent))" : "linear-gradient(90deg, var(--danger), var(--accent-2))";
  qualityTips.innerHTML = tips.map((tip) => `<li>${tip}</li>`).join("");
}

function renderTab(stone) {
  const renderCards = (items) => `<div class="insight-grid">${items.map((item) => `
    <div class="insight-card"><p>${item}</p></div>
  `).join("")}</div>`;

  if (activeTab === "about") {
    tabPanel.innerHTML = `
      <div class="insight-grid">
        <div class="insight-card"><h3>Recognition Note</h3><p>${stone.fact}</p></div>
        <div class="insight-card"><h3>Did You Mean?</h3><p>${didYouMeanText(stone)}</p></div>
        <div class="insight-card"><h3>Key Property</h3><p>${stone.hardness} hardness with ${stone.texture.toLowerCase()}.</p></div>
        <div class="insight-card"><h3>Typical Origin</h3><p>${stone.found}.</p></div>
      </div>`;
  }

  if (activeTab === "ecology") {
    const ecoColor = stone.eco > 60 ? "var(--danger)" : stone.eco > 40 ? "var(--warning)" : "var(--accent)";
    tabPanel.innerHTML = `
      <div class="eco-score insight-card">
        <h3>Eco Score: ${stone.ecoLabel}</h3>
        <div class="score-bar" style="--eco-width:${stone.eco}%; --eco-color:${ecoColor}"><span></span></div>
        <p>Higher scores mean greater environmental concern when the material is extracted carelessly.</p>
      </div>
      ${renderCards(stone.ecology)}`;
  }

  if (activeTab === "art") {
    tabPanel.innerHTML = renderCards(stone.art);
  }

  if (activeTab === "life") {
    tabPanel.innerHTML = `
      <div class="timeline">
        ${stone.life.map(([title, text]) => `
          <div class="timeline-step"><strong>${title}</strong><p>${text}</p></div>
        `).join("")}
      </div>`;
  }

  if (activeTab === "compare") {
    if (stone.isUncertain) {
      tabPanel.innerHTML = `
        <div class="insight-card">
          <h3>Comparison Unavailable</h3>
          <p>Scan a clearer stone image first. The current upload is below the reliable identification threshold.</p>
        </div>`;
      return;
    }
    const other = nextStone(stone);
    tabPanel.innerHTML = `
      <div class="compare-toolbar">
        <select class="compare-select" id="compareSelect" aria-label="Choose comparison stone">
          ${stones.filter((item) => item.id !== stone.id).map((item) => `
            <option value="${item.id}" ${item.id === other.id ? "selected" : ""}>${item.name}</option>
          `).join("")}
        </select>
      </div>
      <div id="comparisonMount"></div>`;
    renderComparison(stone, other);
    document.querySelector("#compareSelect").addEventListener("change", (event) => {
      renderComparison(stone, stones.find((item) => item.id === event.target.value));
    });
  }
}

function renderComparison(base, other) {
  document.querySelector("#comparisonMount").innerHTML = `
    <div class="comparison-grid">
      ${comparisonCard(base)}
      ${comparisonCard(other)}
    </div>`;
}

function comparisonCard(stone) {
  return `
    <div class="comparison-card">
      <span>${stone.category}</span>
      <h3>${stone.name}</h3>
      <p><strong>Hardness:</strong> ${stone.hardness}</p>
      <p><strong>Texture:</strong> ${stone.texture}</p>
      <p><strong>Eco:</strong> ${stone.ecoLabel}</p>
      <p><strong>Art use:</strong> ${stone.art[0]}</p>
    </div>`;
}

function didYouMeanText(stone) {
  if (stone.isUncertain) {
    return `Maybe ${stone.closestStone.name}, but confidence is only ${stone.confidence}%. The scanner needs a clearer, closer photo of the stone before it can identify it.`;
  }
  return `This result is most similar to ${stone.name}. The next closest profile is ${(stone.secondChoice || nextStone(stone)).name}, based on surface tone, contrast, warmth, and texture density.`;
}

function nextStone(stone) {
  const index = stones.findIndex((item) => item.id === stone.id);
  return stones[(index + 1) % stones.length];
}

sampleGrid.addEventListener("click", (event) => {
  const card = event.target.closest(".sample-card");
  if (card) selectStone(card.dataset.id);
});

fileInput.addEventListener("change", (event) => chooseUpload(event.target.files[0]));
scanButton.addEventListener("click", scanStone);
resetButton.addEventListener("click", () => {
  selectedImage = "";
  activeTab = "about";
  previewImage.removeAttribute("src");
  previewImage.style.display = "none";
  emptyState.style.display = "grid";
  resultEmpty.classList.remove("hidden");
  resultCard.classList.add("hidden");
  scanStatus.textContent = "Standby";
  updateSignalGrid();
  renderQualityPanel();
  [...analysisStrip.children].forEach((step) => step.classList.remove("active"));
  showPage("scanPage");
});

navButtons.forEach((button) => {
  button.addEventListener("click", () => showPage(button.dataset.page));
});

dropZone.addEventListener("dragover", (event) => {
  event.preventDefault();
  scanFrame.classList.add("is-scanning");
  scanStatus.textContent = "Drop to load";
});

dropZone.addEventListener("dragleave", () => {
  scanFrame.classList.remove("is-scanning");
  scanStatus.textContent = selectedImage ? "Image loaded" : "Standby";
});
dropZone.addEventListener("drop", (event) => {
  event.preventDefault();
  scanFrame.classList.remove("is-scanning");
  chooseUpload(event.dataTransfer.files[0]);
});

document.querySelectorAll(".tab").forEach((button) => {
  button.addEventListener("click", () => {
    activeTab = button.dataset.tab;
    renderResult(selectedStone);
  });
});

renderSamples();
updateSignalGrid();
renderQualityPanel();
