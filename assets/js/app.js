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
    svg: "granite",
    accentColor: "#a8b0b4",
    softColor: "rgba(168, 176, 180, 0.14)",
    glowColor: "rgba(176, 186, 190, 0.12)",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Granite_cliff_with_feldspar_crystals_in_Loddebo_2.jpg/500px-Granite_cliff_with_feldspar_crystals_in_Loddebo_2.jpg",
    imageSourceUrl: "https://commons.wikimedia.org/wiki/File:Granite_cliff_with_feldspar_crystals_in_Loddebo_2.jpg",
    imageCaption: "Granite cliff with feldspar crystals, Wikimedia Commons."
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
    svg: "basalt",
    accentColor: "#7a838d",
    softColor: "rgba(122, 131, 141, 0.16)",
    glowColor: "rgba(128, 138, 148, 0.12)",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Basalt_Rock_Formation_-_geograph.org.uk_-_180882.jpg/500px-Basalt_Rock_Formation_-_geograph.org.uk_-_180882.jpg",
    imageSourceUrl: "https://commons.wikimedia.org/wiki/File:Basalt_Rock_Formation_-_geograph.org.uk_-_180882.jpg",
    imageCaption: "Basalt rock formation, Wikimedia Commons."
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
    svg: "marble",
    accentColor: "#d8dbd9",
    softColor: "rgba(216, 219, 217, 0.14)",
    glowColor: "rgba(232, 234, 233, 0.14)",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Statuarietto_White_Marble_%28Apuan_Marble_Formation%2C_Tertiary_metamorphism_of_Jurassic_limestones%3B_Carrara_region%2C_Italy%29_6_%2840899027645%29.jpg/500px-Statuarietto_White_Marble_%28Apuan_Marble_Formation%2C_Tertiary_metamorphism_of_Jurassic_limestones%3B_Carrara_region%2C_Italy%29_6_%2840899027645%29.jpg",
    imageSourceUrl: "https://commons.wikimedia.org/wiki/File:Statuarietto_White_Marble_(Apuan_Marble_Formation,_Tertiary_metamorphism_of_Jurassic_limestones;_Carrara_region,_Italy)_6_(40899027645).jpg",
    imageCaption: "White marble formation, Wikimedia Commons."
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
    svg: "sandstone",
    accentColor: "#ad8f7d",
    softColor: "rgba(173, 143, 125, 0.14)",
    glowColor: "rgba(200, 173, 148, 0.12)",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Aztec_Sandstone_-_Red_Rock_Canyon.jpg/500px-Aztec_Sandstone_-_Red_Rock_Canyon.jpg",
    imageSourceUrl: "https://commons.wikimedia.org/wiki/File:Aztec_Sandstone_-_Red_Rock_Canyon.jpg",
    imageCaption: "Aztec Sandstone, Wikimedia Commons."
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
    svg: "limestone",
    accentColor: "#c3beb3",
    softColor: "rgba(195, 190, 179, 0.14)",
    glowColor: "rgba(220, 216, 206, 0.12)",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Rock-cut_basin_forms.JPG/500px-Rock-cut_basin_forms.JPG",
    imageSourceUrl: "https://commons.wikimedia.org/wiki/File:Rock-cut_basin_forms.JPG",
    imageCaption: "Limestone rock basin, Wikimedia Commons."
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
    svg: "slate",
    accentColor: "#7f8790",
    softColor: "rgba(127, 135, 144, 0.14)",
    glowColor: "rgba(151, 159, 169, 0.12)",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/af/SlateUSGOV.jpg",
    imageSourceUrl: "https://commons.wikimedia.org/wiki/File:SlateUSGOV.jpg",
    imageCaption: "Slate rock, Wikimedia Commons."
  }
];

const MIN_RELIABLE_CONFIDENCE = 58;
const MODEL_CACHE_VERSION = "tfjs-label-order-20260705";
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

function getQualityModifier(quality = null) {
  if (!quality) return 1;
  const score = quality.score ?? 0;
  if (score >= 80) return 1;
  if (score >= 60) return 0.96;
  if (score >= 45) return 0.9;
  if (score >= 30) return 0.8;
  return 0.72;
}

let mobileNetModel = null;
let stoneClassifierModel = null;
let stoneClassifierLabels = [];
let activeClassifierName = "heuristic";

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

function resolveAppAssetUrl(relativePath) {
  const baseCandidates = [document.baseURI, window.location.href, document.currentScript?.src, `${window.location.origin}/`].filter(Boolean);

  for (const base of baseCandidates) {
    try {
      const url = new URL(relativePath, base);
      return url.href;
    } catch (error) {
      continue;
    }
  }

  return relativePath;
}

async function loadStoneClassifierModel() {
  if (typeof tf === "undefined") return;
  try {
    const modelUrl = new URL(resolveAppAssetUrl("./model/rock_classifier/tfjs/model.json"));
    const labelsUrl = new URL(resolveAppAssetUrl("./model/rock_classifier/tfjs/class_names.txt"));
    modelUrl.searchParams.set("v", MODEL_CACHE_VERSION);
    labelsUrl.searchParams.set("v", MODEL_CACHE_VERSION);
    const modelResponse = await fetch(modelUrl.href);
    if (!modelResponse.ok) {
      throw new Error(`Model metadata not found: ${modelResponse.status}`);
    }
    stoneClassifierModel = await tf.loadGraphModel(modelUrl.href);
    const response = await fetch(labelsUrl.href);
    const labelText = await response.text();
    stoneClassifierLabels = labelText.split(/\r?\n/).map((label) => label.trim()).filter(Boolean);
    activeClassifierName = stoneClassifierLabels.length ? "custom" : "heuristic";
    if (systemPill) systemPill.textContent = "Visual model active";
    console.log("Loaded stronger stone classifier", stoneClassifierLabels);
  } catch (error) {
    console.warn("No stronger local stone classifier found, using fallback", error);
    stoneClassifierModel = null;
    stoneClassifierLabels = [];
    activeClassifierName = "fallback";
    if (systemPill) systemPill.textContent = "Fallback visual scan";
  }
}

async function initializeModelStack() {
  loadMobileNetModel();
  await loadStoneClassifierModel();
}

initializeModelStack();

const sampleGrid = document.querySelector("#sampleGrid");
const previewImage = document.querySelector("#previewImage");
const emptyState = document.querySelector("#emptyState");
const fileInput = document.querySelector("#fileInput");
const pasteButton = document.querySelector("#pasteButton");
const urlInput = document.querySelector("#urlInput");
const urlButton = document.querySelector("#urlButton");
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
const confidenceBadge = document.querySelector("#confidenceBadge");
const confidenceStatus = document.querySelector("#confidenceStatus");
const confidenceExplanation = document.querySelector("#confidenceExplanation");
const topCandidatesList = document.querySelector("#topCandidatesList");
const resultStoneArt = document.querySelector("#resultStoneArt");
const systemPill = document.querySelector(".system-pill");
const navButtons = document.querySelectorAll(".nav-button");
const appPages = document.querySelectorAll(".app-page");

let selectedStone = stones[0];
let selectedImage = "";
let activeTab = "about";
let activePage = "scanPage";

function showPage(pageId, options = { scroll: true }) {
  activePage = pageId;
  appPages.forEach((page) => page.classList.toggle("active", page.id === pageId));
  navButtons.forEach((button) => button.classList.toggle("active", button.dataset.page === pageId));
  if (options.scroll) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

function stoneSvg(type) {
  const stoneData = {
    granite: {
      base: "#8f8f8b",
      mid: "#4f4d4a",
      shadow: "#2f2f2d",
      highlight: "#d7d7d5",
      accent: "#c5c3bf",
      specks: [
        [52, 82, 7, "#1f1f1d", 0.86],
        [132, 56, 6, "#c9c7c2", 0.72],
        [204, 94, 5, "#7d7c79", 0.6],
        [174, 60, 8, "#aeada9", 0.42]
      ]
    },
    basalt: {
      base: "#17191f",
      mid: "#3d4148",
      shadow: "#0b0d11",
      highlight: "#8a8f98",
      accent: "#5c6067",
      specks: [
        [76, 86, 5, "#8c9199", 0.32],
        [108, 96, 6, "#5b5f66", 0.45],
        [176, 116, 4, "#a1a5ae", 0.18]
      ]
    },
    marble: {
      base: "#eff0ee",
      mid: "#c4c6c4",
      shadow: "#9ea0a0",
      highlight: "#fbfbfb",
      accent: "#8d8f8d",
      veining: "#7b7d7b",
      specks: [
        [92, 92, 4, "#f9f9f8", 0.75],
        [152, 82, 5, "#bdbfbf", 0.4]
      ]
    },
    sandstone: {
      base: "#c9b8ad",
      mid: "#9e9086",
      shadow: "#6c5f58",
      highlight: "#e9ddd7",
      accent: "#b7a79f",
      specks: [
        [78, 86, 5, "#d3c7c0", 0.42],
        [142, 76, 4, "#8c7f77", 0.34],
        [188, 100, 5, "#f2e8df", 0.22]
      ]
    },
    limestone: {
      base: "#dcd8d1",
      mid: "#b2afa7",
      shadow: "#7f7c76",
      highlight: "#f8f6f1",
      accent: "#c1bdb7",
      specks: [
        [86, 94, 6, "#f5f2ee", 0.5],
        [134, 82, 4, "#b8b4ad", 0.35],
        [180, 102, 5, "#9f9b94", 0.28]
      ]
    },
    slate: {
      base: "#2b3038",
      mid: "#525b67",
      shadow: "#12161b",
      highlight: "#9ba5ae",
      accent: "#737d88",
      specks: [
        [94, 86, 4, "#4b535c", 0.48],
        [150, 72, 5, "#6f7884", 0.38],
        [202, 100, 3, "#a4acb5", 0.24]
      ]
    }
  }[type] || stoneData.granite;

  const detailShapes = stoneData.specks.map(([cx, cy, r, fill, o]) => `
      <ellipse cx="${cx}" cy="${cy}" rx="${r}" ry="${Math.max(3, r - 2)}" fill="${fill}" fill-opacity="${o}" />
    `).join("");

  const pattern = {
    granite: `<path d="M36 72q42-52 104-42t84 54q18 26 10 60t-82 40q-68 20-114-18t-2-94Z" fill="${stoneData.base}"/>
      <path d="M60 88c18-16 76-38 112-16" stroke="${stoneData.mid}" stroke-width="14" stroke-linecap="round" opacity="0.35"/>
      <path d="M110 54c16 14 48 18 76 6" stroke="${stoneData.shadow}" stroke-width="10" stroke-linecap="round" opacity="0.28"/>`,
    basalt: `<path d="M30 62q18-46 88-46t102 36q26 38 18 70t-84 40q-64 12-128-28t0-72Z" fill="${stoneData.base}"/>
      <path d="M60 98c14-14 74-32 116-10" stroke="${stoneData.highlight}" stroke-width="12" stroke-linecap="round" opacity="0.22"/>
      <path d="M88 58c18 20 54 24 82 12" stroke="${stoneData.accent}" stroke-width="6" stroke-linecap="round" opacity="0.24"/>`,
    marble: `<path d="M34 66q40-50 96-38t90 50q16 30 4 58t-82 34q-68 16-108-14t0-90Z" fill="${stoneData.base}"/>
      <path d="M56 82c28-20 62-22 94-2s30 54 8 70" stroke="${stoneData.veining}" stroke-width="10" stroke-linecap="round" opacity="0.42"/>
      <path d="M48 100c30-12 70-20 104 6" stroke="${stoneData.mid}" stroke-width="8" stroke-linecap="round" opacity="0.3"/>`,
    sandstone: `<path d="M24 70q28-28 90-34t100 32q24 36 16 64t-80 36q-66 18-126-16t0-62Z" fill="${stoneData.base}"/>
      <path d="M34 82h226" stroke="${stoneData.mid}" stroke-width="16" opacity="0.24"/>
      <path d="M38 104h216" stroke="${stoneData.highlight}" stroke-width="10" opacity="0.18"/>`,
    limestone: `<path d="M28 74q34-32 92-34t98 36q20 30 10 62t-80 32q-66 18-120-12t0-84Z" fill="${stoneData.base}"/>
      <path d="M50 98c16-16 62-24 100-8" stroke="${stoneData.mid}" stroke-width="10" stroke-linecap="round" opacity="0.28"/>
      <path d="M72 76c22-12 52-14 78 0" stroke="${stoneData.shadow}" stroke-width="6" stroke-linecap="round" opacity="0.2"/>`,
    slate: `<path d="M30 68q18-38 96-38t106 38q28 34 16 70t-80 34q-66 12-122-22t-16-82Z" fill="${stoneData.base}"/>
      <path d="M42 96h216" stroke="${stoneData.mid}" stroke-width="14" opacity="0.32"/>
      <path d="M40 116h216" stroke="${stoneData.highlight}" stroke-width="8" opacity="0.18"/>`
  }[type];

  return `
    <svg viewBox="0 0 300 150" role="img" aria-label="${type} stone illustration" xmlns="http://www.w3.org/2000/svg">
      <rect width="300" height="150" fill="#121419" rx="18"/>
      <defs>
        <radialGradient id="stoneGlow" cx="35%" cy="30%" r="85%">
          <stop offset="0%" stop-color="${stoneData.highlight}" stop-opacity="0.5" />
          <stop offset="55%" stop-color="${stoneData.base}" stop-opacity="0.95" />
          <stop offset="100%" stop-color="${stoneData.shadow}" stop-opacity="1" />
        </radialGradient>
        <linearGradient id="shineEdge" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="rgba(255,255,255,0.22)" />
          <stop offset="100%" stop-color="rgba(255,255,255,0)" />
        </linearGradient>
      </defs>
      ${pattern}
      ${detailShapes}
      <path d="M40 70q42-52 108-44t86 54q14 28 6 62t-72 40q-68 18-114-16t-14-96Z" fill="url(#stoneGlow)" opacity="0.24"/>
      <path d="M44 70c18-38 70-48 118-26s50 62 24 80c-28 20-86 18-128-16-12-12-18-24-14-38Z" fill="url(#shineEdge)" opacity="0.32"/>
      <path d="M52 108c28-22 90-34 126-8" stroke="${stoneData.accent}" stroke-width="4" stroke-linecap="round" opacity="0.2"/>
    </svg>`;
}

function svgDataUrl(type) {
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(stoneSvg(type))}`;
}

function renderSamples() {
  sampleGrid.innerHTML = stones.map((stone) => `
    <button class="sample-card ${stone.id === selectedStone.id ? "selected" : ""}" type="button" data-id="${stone.id}"
      style="--card-border-color:${stone.accentColor}; --card-soft-color:${stone.softColor}; --card-glow-color:${stone.glowColor};">
      <div class="stone-art">
        ${stone.imageUrl ? `<img src="${stone.imageUrl}" alt="Photo of ${stone.name}" loading="lazy" />` : stoneSvg(stone.svg)}
      </div>
      <strong>${stone.name}</strong>
      <p>${stone.category} - ${stone.texture}</p>
    </button>
  `).join("");
}

function selectStone(id) {
  selectedStone = { ...(stones.find((stone) => stone.id === id) || stones[0]), isUncertain: false };
  selectedImage = selectedStone.imageUrl || svgDataUrl(selectedStone.svg);
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
  reader.onload = () => loadScannedImage(reader.result);
  reader.readAsDataURL(file);
}

function loadScannedImage(src) {
  if (!src) return;
  selectedImage = src;
  previewImage.src = selectedImage;
  previewImage.style.display = "block";
  emptyState.style.display = "none";
  analyzeImageSignature(selectedImage).then(({ signature, quality, mlLabels }) => {
    const match = matchStone(signature, mlLabels, quality);
    const adjustedConfidence = Math.max(24, Math.min(95, match.confidence));
    const fallbackStone = stones.find((stone) => stone.id === match.topCandidates?.[0]?.id) || match.secondChoice || stones[0];
    const shouldShowPrediction = Boolean(match.topCandidates?.length);
    selectedStone = shouldShowPrediction
      ? {
          ...(match.stone || fallbackStone),
          confidence: adjustedConfidence,
          matchedSignature: signature,
          secondChoice: match.secondChoice,
          mlLabels,
          quality,
          topCandidates: match.topCandidates,
          explanation: match.explanation,
          isUncertain: !match.isReliable || quality.score < 35,
          isUnknown: false
        }
      : createUncertainResult(match, signature, quality, mlLabels);
    updateSignalGrid(signature);
    renderQualityPanel(quality);
    scanStatus.textContent = quality.label;
    renderSamples();
  });
}

function loadImageUrl(url) {
  const value = String(url || "").trim();
  if (!value) {
    scanStatus.textContent = "Enter a valid image URL or paste a stone photo.";
    return;
  }
  let source = value;
  if (!/^https?:\/\//i.test(source)) {
    source = `https://${source}`;
  }
  scanStatus.textContent = "Loading image from URL...";
  urlInput.value = "";
  loadScannedImage(source);
}

function handleClipboardPaste(event) {
  const items = event.clipboardData?.items;
  if (items) {
    for (const item of items) {
      if (item.type.startsWith("image/")) {
        const file = item.getAsFile();
        if (file) {
          chooseUpload(file);
          return;
        }
      }
    }
  }
  const text = event.clipboardData?.getData("text/plain")?.trim();
  if (text) {
    if (/^https?:\/\//i.test(text) || /\.(png|jpe?g|webp|gif|bmp)(\?|$)/i.test(text)) {
      loadImageUrl(text);
      return;
    }
  }
  scanStatus.textContent = "Clipboard did not contain a valid stone image.";
}

function requestPasteImage() {
  if (navigator.clipboard && navigator.clipboard.read) {
    navigator.clipboard.read().then((items) => {
      for (const item of items) {
        for (const type of item.types) {
          if (type.startsWith("image/")) {
            return item.getType(type).then((blob) => {
              chooseUpload(new File([blob], "clipboard-image", { type: blob.type }));
            });
          }
        }
      }
      return navigator.clipboard.readText();
    }).then((text) => {
      if (typeof text === "string" && text.trim()) {
        loadImageUrl(text.trim());
      }
    }).catch(() => {
      scanStatus.textContent = "Clipboard access blocked. Try Ctrl+V or paste a URL instead.";
    });
  } else {
    scanStatus.textContent = "Press Ctrl+V with an image or paste a URL to load a stone.";
  }
}

function createUncertainResult(match, signature, quality, mlLabels = []) {
  const closestStone = match.stone || stones[0];
  const topWarning = quality.warnings.length ? quality.warnings[0] : `The closest stone-like profile was ${closestStone.name}, but the match is still being treated as a tentative ranking.`;
  const title = "Closest Matches";
  return {
    id: "uncertain",
    name: title,
    category: "Tentative ranking",
    colors: "Mixed image signals",
    texture: "Stone texture not clear",
    formation: topWarning,
    found: "Unknown",
    hardness: "Unknown",
    eco: 0,
    ecoLabel: "Not enough data",
    confidence: Math.max(match.confidence, 35),
    signature,
    secondChoice: match.secondChoice,
    closestStone,
    mlLabels,
    quality,
    topCandidates: match.topCandidates,
    explanation: match.explanation || topWarning,
    isUncertain: true,
    isUnknown: false,
    fact: match.explanation || topWarning,
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
      ["Closest hint", `${closestStone.name} was the nearest profile, but confidence stayed below the reliable threshold.`],
      ["Improve image", "Crop closer to the object and keep the stone centered in strong light."],
      ["Scan again", "Run the scan again with a clearer stone photo or choose a sample."]
    ],
    svg: closestStone.svg
  };
}

function getLuma(r, g, b) {
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function getPixelLuma(pixels, index) {
  return getLuma(pixels[index] / 255, pixels[index + 1] / 255, pixels[index + 2] / 255);
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
      let borderR = 0;
      let borderG = 0;
      let borderB = 0;
      let borderLight = 0;
      let borderCount = 0;

      for (let y = 0; y < size; y += 1) {
        for (let x = 0; x < size; x += 1) {
          const isBorder = x < 10 || x >= size - 10 || y < 10 || y >= size - 10;
          if (!isBorder) continue;
          const index = (y * size + x) * 4;
          const r = pixels[index] / 255;
          const g = pixels[index + 1] / 255;
          const b = pixels[index + 2] / 255;
          borderR += r;
          borderG += g;
          borderB += b;
          borderLight += getLuma(r, g, b);
          borderCount += 1;
        }
      }

      const background = {
        r: borderCount ? borderR / borderCount : 1,
        g: borderCount ? borderG / borderCount : 1,
        b: borderCount ? borderB / borderCount : 1,
        light: borderCount ? borderLight / borderCount : 1
      };

      for (let y = 0; y < size; y += 1) {
        for (let x = 0; x < size; x += 1) {
          const index = (y * size + x) * 4;
          const r = pixels[index] / 255;
          const g = pixels[index + 1] / 255;
          const b = pixels[index + 2] / 255;
          const max = Math.max(r, g, b);
          const min = Math.min(r, g, b);
          const light = getLuma(r, g, b);
          const sat = max === 0 ? 0 : (max - min) / max;
          const warm = clamp((r + 0.35 * g - b + 0.35) / 1.7);
          const isScanRegion = x > size * 0.06 && x < size * 0.94 && y > size * 0.06 && y < size * 0.94;
          const nextIndex = (y * size + x + 1) * 4;
          const rightLuma = x < size - 1 ? getPixelLuma(pixels, nextIndex) : light;
          const downIndex = ((y + 1) * size + x) * 4;
          const below = y < size - 1 ? getPixelLuma(pixels, downIndex) : light;
          const localContrast = Math.max(Math.abs(light - rightLuma), Math.abs(light - below));
          const backgroundDelta = Math.abs(light - background.light);
          const colorDelta = Math.abs(r - background.r) + Math.abs(g - background.g) + Math.abs(b - background.b);
          const isForeground = isScanRegion
            && light > 0.035
            && light < 0.98
            && (
              backgroundDelta > 0.08
              || colorDelta > 0.18
              || sat > 0.08
              || localContrast > 0.1
            );

          if (isForeground) {
            foregroundCount += 1;
            brightness += light;
            saturation += sat;
            warmth += warm;
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

function buildPredictionExplanation(stone, signature, quality, topCandidates = []) {
  const reasons = [];
  if (signature.contrast > 0.4) reasons.push("strong surface contrast");
  if (signature.edge > 0.35) reasons.push("clear texture detail");
  if (signature.brightness > 0.25 && signature.brightness < 0.8) reasons.push("balanced lighting");
  if (quality?.sharpness > 60) reasons.push("sharp image detail");
  if (topCandidates.length > 1) reasons.push(`clear separation from ${topCandidates[1].name}`);
  if (!reasons.length) reasons.push("visible stone-like texture cues");
  return `Likely ${stone.name} because the scan showed ${reasons.join(", ")}.`;
}

function matchStone(signature, mlLabels = [], quality = null) {
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
  const topCandidates = ranked.slice(0, 3).map(({ stone, distance }) => ({
    id: stone.id,
    name: stone.name,
    probability: Math.round(clamp(1 - distance / 1.85, 0.1, 0.96) * 100)
  }));

  const isCustomClassifier = activeClassifierName === "custom";
  const mlTrustThreshold = isCustomClassifier ? 0.2 : 0.45;
  if (mlMatch && mlMatch.probability > mlTrustThreshold) {
    const mlStoneId = mlMatch.stone.id;
    const mlCandidateIndex = topCandidates.findIndex((candidate) => candidate.id === mlStoneId);
    const mlProbability = Math.round(clamp(mlMatch.probability, 0, 1) * 100);
    const currentProbability = mlCandidateIndex >= 0 ? topCandidates[mlCandidateIndex].probability : 0;
    const agreementBonus = isCustomClassifier ? Math.round(mlMatch.probability * 14) : 0;
    const mlConfidence = Math.round(clamp(isCustomClassifier
      ? Math.max(mlProbability, currentProbability + agreementBonus)
      : mlProbability, 0, 96));
    if (mlCandidateIndex >= 0) {
      topCandidates[mlCandidateIndex].probability = Math.max(topCandidates[mlCandidateIndex].probability, mlConfidence);
    } else {
      topCandidates.push({ id: mlStoneId, name: mlMatch.stone.name, probability: mlConfidence });
    }
    topCandidates.sort((a, b) => b.probability - a.probability);
  }

  const topCandidate = topCandidates[0];
  const secondCandidate = topCandidates[1];
  const top1Probability = topCandidate ? topCandidate.probability / 100 : 0;
  const top2Probability = secondCandidate ? secondCandidate.probability / 100 : 0;
  const margin = top1Probability - top2Probability;
  const isUnknown = top1Probability < 0.14 && margin < 0.01;
  const confidence = Math.max(baselineConfidence, Math.round(top1Probability * 100));
  const stone = stones.find((entry) => entry.id === topCandidate.id) || ranked[0].stone;
  const explanation = buildPredictionExplanation(stone, signature, quality, topCandidates);
  const qualityModifier = getQualityModifier(quality);
  const adjustedConfidence = Math.max(24, Math.round(confidence * qualityModifier));

  return {
    stone,
    secondChoice: secondCandidate ? stones.find((entry) => entry.id === secondCandidate.id) || ranked[1].stone : ranked[1].stone,
    confidence: adjustedConfidence,
    topCandidates,
    explanation,
    isReliable: adjustedConfidence >= MIN_RELIABLE_CONFIDENCE || top1Probability >= 0.3,
    isUnknown
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

async function predictWithStoneModel(image, limit = 5) {
  if (!stoneClassifierModel) return [];

  const tensor = tf.tidy(() => {
    return tf.browser.fromPixels(image, 3)
      .resizeNearestNeighbor([224, 224])
      .toFloat()
      .expandDims(0);
  });

  const prediction = stoneClassifierModel.predict(tensor);
  const output = Array.isArray(prediction) ? prediction[0] : prediction;
  const probabilities = await output.data();
  const ranked = Array.from(probabilities).map((probability, index) => ({
    className: stoneClassifierLabels[index] || `class_${index}`,
    probability
  })).sort((a, b) => b.probability - a.probability).slice(0, limit);

  tensor.dispose();
  if (Array.isArray(prediction)) {
    prediction.forEach((item) => item.dispose());
  } else {
    prediction.dispose();
  }

  return ranked;
}

function predictImageLabels(image) {
  if (stoneClassifierModel && stoneClassifierLabels.length) {
    return predictWithStoneModel(image, 5).catch(() => []);
  }
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
      const luma = getLuma(r, g, b);
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
        const rightLuma = getPixelLuma(pixels, right);
        sharpness += Math.abs(luma - rightLuma);
      }
      if (y < size - 1) {
        const down = ((y + 1) * size + x) * 4;
        const downLuma = getPixelLuma(pixels, down);
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
  const blurScore = clamp((sharpnessScore + 0.4) / 1.4);
  const stoneCoverage = clamp(foregroundRatio * 1.1);
  const backgroundComplexity = clamp(1 - foregroundRatio + 0.15);
  const overall = clamp((sharpnessScore * 0.24) + (focusScore * 0.24) + (sizeScore * 0.16) + (contrastScore * 0.13) + (brightnessScore * 0.1) + (blurScore * 0.13));

  const normalizedLabels = mlLabels.flatMap((entry) => entry.className.toLowerCase().split(/[,&]/g).map((part) => part.trim().replace(/[^a-z0-9 ]/g, "")));
  const detectedBackground = normalizedLabels.find((label) => ML_BACKGROUND_LABELS.has(label));

  const warnings = [];
  if (detectedBackground) warnings.push(`Background contains ${detectedBackground}. Crop closer to the stone and avoid sky, trees, buildings or water.`);
  if (foregroundRatio < 0.24) warnings.push("The stone is too small in the frame. Crop closer to the object.");
  if (sharpnessScore < 0.25) warnings.push("The image looks soft or blurred. Use a sharper focus.");
  if (focusScore < 0.36) warnings.push("The frame is dominated by background. Center the stone and reduce surrounding clutter.");
  if (foregroundRatio < 0.22 && borderDifference < 0.04) warnings.push("Most of the image looks like background. Use a cleaner backdrop or place the stone on a neutral surface.");
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
    contrast: Math.round(contrastScore * 100),
    blur: Math.round(blurScore * 100),
    stoneCoverage: Math.round(stoneCoverage * 100),
    backgroundComplexity: Math.round(backgroundComplexity * 100)
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
    showPage("scanPage", { scroll: false });
    document.querySelector(".results-panel").scrollIntoView({ behavior: "smooth", block: "start" });
  }, 1850);
}

function renderResult(stone) {
  resultEmpty.classList.add("hidden");
  resultCard.classList.remove("hidden");
  document.querySelector("#confidenceLabel").textContent = stone.isUncertain
    ? "Closest Match"
    : stone.confidence < 90 ? "Closest Match" : "Identification";
  document.querySelector("#stoneName").textContent = stone.name;
  document.querySelector("#stoneCategory").textContent = stone.category;
  document.querySelector("#confidenceValue").textContent = `${stone.confidence}%`;
  const meterEl = document.querySelector(".confidence-meter");
  if (meterEl) {
    meterEl.style.setProperty("--score", `${stone.confidence}%`);
    meterEl.setAttribute("aria-valuenow", String(Math.round(stone.confidence)));
  }
  if (confidenceBadge) {
    confidenceBadge.textContent = stone.isUnknown ? "Needs more evidence" : stone.isUncertain ? "Uncertain" : stone.confidence >= 85 ? "Confident" : "Reasonable";
  }
  if (confidenceStatus) {
    confidenceStatus.textContent = stone.isUnknown ? "No reliable match yet" : stone.isUncertain ? "Top candidates are close" : "Likely match";
  }
  if (confidenceExplanation) {
    confidenceExplanation.textContent = stone.explanation || stone.fact || "The scanner used texture, color, and quality cues to form this recommendation.";
  }
  if (topCandidatesList) {
    const candidates = (stone.topCandidates || []).slice(0, 3);
    topCandidatesList.innerHTML = candidates.length
      ? candidates.map(({ name, probability }) => `<li><span>${name}</span><strong>${probability}%</strong></li>`).join("")
      : `<li><span>${stone.name}</span><strong>${stone.confidence}%</strong></li>`;
  }
  if (qualityNotice) {
    const qualityText = stone.quality?.label || "Image readiness is still being evaluated.";
    qualityNotice.textContent = stone.isUncertain ? `Quality check: ${qualityText}` : `Quality check: ${qualityText}`;
  }
  resultStoneArt.innerHTML = selectedImage
    ? `<img src="${selectedImage}" alt="Photo of ${stone.name}" />`
    : stone.imageUrl
      ? `<img src="${stone.imageUrl}" alt="Photo of ${stone.name}" />`
      : stoneSvg((stone.isUncertain ? stone.closestStone : stone)?.svg || stones[0].svg);
  const topCandidatesMarkup = (stone.topCandidates || []).slice(0, 3).map(({ name, probability }) => `
    <div class="fact"><span>${name}</span><strong>${probability}%</strong></div>
  `).join("");
  document.querySelector("#quickFacts").innerHTML = `
    <div class="fact"><span>Top predictions</span><strong>${(stone.topCandidates || []).slice(0, 3).map(({ name, probability }) => `${name} ${probability}%`).join(" · ")}</strong></div>
    ${topCandidatesMarkup}
    <div class="fact"><span>Texture</span><strong>${stone.texture}</strong></div>
    <div class="fact"><span>Colors</span><strong>${stone.colors}</strong></div>
    <div class="fact"><span>Found In</span><strong>${stone.found}</strong></div>
    <div class="fact"><span>Formation</span><strong>${stone.formation}</strong></div>
  `;

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
  const detailText = quality ? `${score}/100 · blur ${quality.blur ?? 0}% · coverage ${quality.stoneCoverage ?? 0}%` : "Waiting for scan";
  const tips = quality?.warnings?.length ? quality.warnings : ["The image looks suitable for a first pass. Keep the stone centered for better results."];

  qualitySummary.textContent = `${summary} · ${detailText}`;
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
        <div class="insight-card"><h3>Recognition Note</h3><p>${stone.explanation || stone.fact}</p></div>
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
    const artwork = stone.artwork || null;
    const artworkHtml = artwork ? `
      <div class="artwork-card">
        <div class="artwork-media">${artwork.imageUrl ? `<img src="${artwork.imageUrl}" alt="${artwork.title}">` : stoneSvg(stone.svg)}</div>
        <div class="artwork-meta">
          <h3>${artwork.title}</h3>
          <p><em>${artwork.artist}</em> ${artwork.year ? `(${artwork.year})` : ""}</p>
          <p>${artwork.caption}</p>
          <p><a href="${artwork.sourceUrl}" target="_blank" rel="noreferrer">Source on Wikimedia Commons</a></p>
        </div>
      </div>
    ` : "";

    tabPanel.innerHTML = `${artworkHtml}${renderCards(stone.art)}`;
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
pasteButton.addEventListener("click", requestPasteImage);
urlButton.addEventListener("click", () => loadImageUrl(urlInput.value));
window.addEventListener("paste", handleClipboardPaste);
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

function revealProjectCards() {
  const cards = document.querySelectorAll("#projectPage .project-card, #projectPage .project-hero");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.25 }
  );

  cards.forEach((card) => observer.observe(card));
}

revealProjectCards();
renderSamples();
updateSignalGrid();
renderQualityPanel();
