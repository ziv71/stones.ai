const canvas = document.querySelector("#crystalCanvas");
const particleCountLabel = document.querySelector("#particleCount");
const growthStatus = document.querySelector("#growthStatus");
const seedInput = document.querySelector("#seedInput");

const controls = {
  temperature: document.querySelector("#temperature"),
  pressure: document.querySelector("#pressure"),
  concentration: document.querySelector("#concentration"),
  diffusion: document.querySelector("#diffusion"),
  randomness: document.querySelector("#randomness"),
  symmetry: document.querySelector("#symmetry"),
  gravity: document.querySelector("#gravity"),
  mineralType: document.querySelector("#mineralType")
};

const outputs = {
  temperature: document.querySelector("#temperatureValue"),
  pressure: document.querySelector("#pressureValue"),
  concentration: document.querySelector("#concentrationValue"),
  diffusion: document.querySelector("#diffusionValue"),
  randomness: document.querySelector("#randomnessValue"),
  symmetry: document.querySelector("#symmetryValue"),
  gravity: document.querySelector("#gravityValue")
};

const buttons = {
  pause: document.querySelector("#startPauseButton"),
  reset: document.querySelector("#resetButton"),
  timelapse: document.querySelector("#timelapseButton"),
  snapshot: document.querySelector("#snapshotButton"),
  exportObj: document.querySelector("#exportObjButton"),
  exportJson: document.querySelector("#exportJsonButton"),
  seed: document.querySelector("#applySeedButton"),
  experiment: document.querySelector("#experimentButton"),
  darkLab: document.querySelector("#darkLabButton")
};

const matchEls = {
  name: document.querySelector("#matchName"),
  description: document.querySelector("#matchDescription"),
  score: document.querySelector("#matchScore"),
  traits: document.querySelector("#matchTraits")
};

const mineralPalettes = {
  quartz: {
    geometry: "octa",
    colors: [0xf7efe4, 0xbad7ff, 0xffffff],
    emissive: 0x6ddcff,
    roughness: 0.18,
    metalness: 0.08
  },
  amethyst: {
    geometry: "octa",
    colors: [0x8c55ff, 0xd68cff, 0x381757],
    emissive: 0x8b38ff,
    roughness: 0.2,
    metalness: 0.1
  },
  salt: {
    geometry: "cube",
    colors: [0xffffff, 0xffe7f5, 0xbffcff],
    emissive: 0xffffff,
    roughness: 0.28,
    metalness: 0.02
  },
  ice: {
    geometry: "needle",
    colors: [0xdafcff, 0x7bdfff, 0xffffff],
    emissive: 0x7bdfff,
    roughness: 0.08,
    metalness: 0.04
  },
  lava: {
    geometry: "rock",
    colors: [0x1a1110, 0xff5a1f, 0xffcc5c],
    emissive: 0xff4a16,
    roughness: 0.48,
    metalness: 0.12
  }
};

const stoneProfiles = [
  {
    id: "quartz",
    name: "Quartz-like Stone",
    mineral: "quartz",
    target: { temperature: 0.48, pressure: 0.42, concentration: 0.68, diffusion: 0.62, randomness: 0.34, symmetry: 0.55, gravity: 0.5 },
    color: 0xe9dfd0,
    emissive: 0x89dfff,
    traits: "transparent · branching · balanced",
    description: "Clear mineral growth with pale veins and a faceted stone body."
  },
  {
    id: "amethyst",
    name: "Amethyst Cluster Stone",
    mineral: "amethyst",
    target: { temperature: 0.38, pressure: 0.55, concentration: 0.78, diffusion: 0.5, randomness: 0.45, symmetry: 0.65, gravity: 0.48 },
    color: 0x6a35a8,
    emissive: 0xb57aff,
    traits: "violet · radial · luminous",
    description: "Purple mineral mass with glowing veins and clustered crystal edges."
  },
  {
    id: "basalt",
    name: "Basaltic Cooling Stone",
    mineral: "lava",
    target: { temperature: 0.86, pressure: 0.72, concentration: 0.42, diffusion: 0.35, randomness: 0.62, symmetry: 0.16, gravity: 0.62 },
    color: 0x181716,
    emissive: 0xff5a1f,
    traits: "dark · dense · volcanic",
    description: "Dense black stone with hot internal fractures, like cooled lava."
  },
  {
    id: "salt",
    name: "Halite Salt Stone",
    mineral: "salt",
    target: { temperature: 0.24, pressure: 0.26, concentration: 0.9, diffusion: 0.44, randomness: 0.18, symmetry: 0.92, gravity: 0.5 },
    color: 0xf8f2e8,
    emissive: 0xffffff,
    traits: "cubic · pale · geometric",
    description: "Bright blocky mineral with cubic order and clean crystalline planes."
  },
  {
    id: "ice",
    name: "Frozen Crystal Stone",
    mineral: "ice",
    target: { temperature: 0.08, pressure: 0.34, concentration: 0.52, diffusion: 0.82, randomness: 0.28, symmetry: 0.74, gravity: 0.42 },
    color: 0xcff9ff,
    emissive: 0x7bdfff,
    traits: "icy · needle-like · transparent",
    description: "Cold translucent growth with sharp frozen veins and fine branches."
  },
  {
    id: "granite",
    name: "Granite Aggregate Stone",
    mineral: "quartz",
    target: { temperature: 0.62, pressure: 0.7, concentration: 0.56, diffusion: 0.38, randomness: 0.58, symmetry: 0.32, gravity: 0.5 },
    color: 0x8a8175,
    emissive: 0xefc984,
    traits: "speckled · coarse · strong",
    description: "Coarse aggregate body with mixed grains and warm mineral flecks."
  },
  {
    id: "marble",
    name: "Marble Vein Stone",
    mineral: "quartz",
    target: { temperature: 0.46, pressure: 0.86, concentration: 0.48, diffusion: 0.46, randomness: 0.32, symmetry: 0.4, gravity: 0.5 },
    color: 0xd9cec0,
    emissive: 0xd76f9f,
    traits: "veined · smooth · metamorphic",
    description: "Smooth stone body with long flowing veins and polished mineral light."
  }
];

let activeStoneProfile = stoneProfiles[0];

let renderer;
let scene;
let camera;
let group;
let instanced;
let stoneBody;
let veinGroup;
let walkers = [];
let crystal = [];
let seedRng = mulberry32(hashSeed(seedInput.value));
let running = true;
let timelapse = false;
let experimental = false;
let cameraState = { radius: 32, theta: 0.7, phi: 1.12 };
let pointerState = { down: false, x: 0, y: 0 };
let maxParticles = 900;
const dummy = new THREE.Object3D();
const color = new THREE.Color();

init();
resetSimulation();
animate();

function init() {
  renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: true,
    preserveDrawingBuffer: true
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x030405, 0.018);

  camera = new THREE.PerspectiveCamera(48, 1, 0.1, 1000);
  updateCamera();

  const hemi = new THREE.HemisphereLight(0xfff1d8, 0x120b0b, 1.25);
  scene.add(hemi);

  const key = new THREE.PointLight(0xffe2b6, 95, 95);
  key.position.set(18, 26, 18);
  scene.add(key);

  const rose = new THREE.PointLight(0xd76f9f, 28, 80);
  rose.position.set(-24, 12, -18);
  scene.add(rose);

  group = new THREE.Group();
  group.position.y = 2.4;
  scene.add(group);

  const floor = new THREE.Mesh(
    new THREE.CircleGeometry(28, 96),
    new THREE.MeshStandardMaterial({
      color: 0x080909,
      roughness: 0.7,
      metalness: 0.15,
      transparent: true,
      opacity: 0.46
    })
  );
  floor.rotation.x = -Math.PI / 2;
  floor.position.y = -12;
  scene.add(floor);

  bindEvents();
  resize();
}

function bindEvents() {
  window.addEventListener("resize", resize);

  Object.entries(controls).forEach(([key, input]) => {
    input.addEventListener("input", () => {
      syncOutputs();
      updateClosestStoneProfile();
      if (key === "mineralType") rebuildInstancedMesh();
    });
  });

  buttons.pause.addEventListener("click", () => {
    running = !running;
    buttons.pause.textContent = running ? "Pause" : "Resume";
  });

  buttons.reset.addEventListener("click", resetSimulation);
  buttons.seed.addEventListener("click", resetSimulation);

  buttons.timelapse.addEventListener("click", () => {
    timelapse = !timelapse;
    buttons.timelapse.classList.toggle("active", timelapse);
  });

  buttons.experiment.addEventListener("click", () => {
    experimental = !experimental;
    buttons.experiment.classList.toggle("active", experimental);
    growthStatus.textContent = experimental ? "Surreal crystallization" : "Nucleation active";
  });

  buttons.darkLab.addEventListener("click", () => {
    document.body.classList.toggle("light-lab");
    buttons.darkLab.textContent = document.body.classList.contains("light-lab") ? "Dark Lab" : "Light Lab";
  });

  buttons.snapshot.addEventListener("click", exportSnapshot);
  buttons.exportObj.addEventListener("click", exportObj);
  buttons.exportJson.addEventListener("click", exportData);

  canvas.addEventListener("pointerdown", (event) => {
    pointerState = { down: true, x: event.clientX, y: event.clientY };
    canvas.setPointerCapture(event.pointerId);
  });

  canvas.addEventListener("pointermove", (event) => {
    if (!pointerState.down) return;
    const dx = event.clientX - pointerState.x;
    const dy = event.clientY - pointerState.y;
    pointerState.x = event.clientX;
    pointerState.y = event.clientY;

    if (event.shiftKey) {
      controls.gravity.value = clamp(Number(controls.gravity.value) + dx * 0.45, -100, 100);
      syncOutputs();
    } else {
      cameraState.theta -= dx * 0.006;
      cameraState.phi = clamp(cameraState.phi + dy * 0.005, 0.25, Math.PI - 0.25);
      updateCamera();
    }
  });

  canvas.addEventListener("pointerup", () => {
    pointerState.down = false;
  });

  canvas.addEventListener("wheel", (event) => {
    event.preventDefault();
    cameraState.radius = clamp(cameraState.radius + event.deltaY * 0.025, 14, 90);
    updateCamera();
  }, { passive: false });
}

function syncOutputs() {
  Object.keys(outputs).forEach((key) => {
    outputs[key].textContent = controls[key].value;
  });
}

function resize() {
  const rect = canvas.parentElement.getBoundingClientRect();
  renderer.setSize(rect.width, rect.height, false);
  camera.aspect = rect.width / rect.height;
  camera.updateProjectionMatrix();
}

function updateCamera() {
  const r = cameraState.radius;
  camera.position.set(
    r * Math.sin(cameraState.phi) * Math.cos(cameraState.theta),
    r * Math.cos(cameraState.phi),
    r * Math.sin(cameraState.phi) * Math.sin(cameraState.theta)
  );
  camera.lookAt(0, 0, 0);
}

function resetSimulation() {
  seedRng = mulberry32(hashSeed(seedInput.value));
  walkers = [];
  crystal = [];
  group.rotation.set(0, 0, 0);
  updateClosestStoneProfile(true);
  rebuildInstancedMesh();
  rebuildStoneBody();
  addSeedCluster();
  for (let i = 0; i < 42; i += 1) walkers.push(createWalker());
  running = true;
  buttons.pause.textContent = "Pause";
  syncOutputs();
  updateMesh();
}

function rebuildInstancedMesh() {
  if (instanced) {
    group.remove(instanced);
    instanced.geometry.dispose();
    instanced.material.dispose();
  }

  const palette = mineralPalettes[controls.mineralType.value];
  const geometry = createGeometry(palette.geometry);
  const material = new THREE.MeshPhysicalMaterial({
    color: 0xffffff,
    emissive: palette.emissive,
    emissiveIntensity: 0.16,
    roughness: palette.roughness,
    metalness: palette.metalness,
    transparent: true,
    opacity: 0.86,
    transmission: controls.mineralType.value === "lava" ? 0 : 0.28,
    thickness: 0.9,
    clearcoat: 0.8,
    clearcoatRoughness: 0.18
  });
  instanced = new THREE.InstancedMesh(geometry, material, maxParticles);
  instanced.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  instanced.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(maxParticles * 3), 3);
  group.add(instanced);
}

function updateClosestStoneProfile(forceRebuild = false) {
  const current = getNormalizedControls();
  const ranked = stoneProfiles.map((profile) => {
    const mineralPenalty = controls.mineralType.value === profile.mineral ? 0 : 0.18;
    const distance = Object.keys(profile.target).reduce((sum, key) => {
      return sum + Math.abs(current[key] - profile.target[key]);
    }, mineralPenalty);
    return { profile, distance };
  }).sort((a, b) => a.distance - b.distance);

  const nextProfile = ranked[0].profile;
  const score = Math.round(clamp(1 - ranked[0].distance / 3.2, 0.42, 0.98) * 100);
  const changed = activeStoneProfile.id !== nextProfile.id;
  activeStoneProfile = nextProfile;

  matchEls.name.textContent = activeStoneProfile.name;
  matchEls.description.textContent = activeStoneProfile.description;
  matchEls.score.textContent = `${score}%`;
  matchEls.traits.textContent = activeStoneProfile.traits;

  if ((changed || forceRebuild) && scene) {
    rebuildStoneBody();
  }
}

function getNormalizedControls() {
  return {
    temperature: Number(controls.temperature.value) / 100,
    pressure: Number(controls.pressure.value) / 100,
    concentration: Number(controls.concentration.value) / 100,
    diffusion: Number(controls.diffusion.value) / 100,
    randomness: Number(controls.randomness.value) / 100,
    symmetry: Number(controls.symmetry.value) / 12,
    gravity: (Number(controls.gravity.value) + 100) / 200
  };
}

function rebuildStoneBody() {
  if (stoneBody) {
    group.remove(stoneBody);
    stoneBody.geometry.dispose();
    stoneBody.material.dispose();
  }
  if (veinGroup) {
    group.remove(veinGroup);
    veinGroup.traverse((child) => {
      if (child.geometry) child.geometry.dispose();
      if (child.material) child.material.dispose();
    });
  }

  const geometry = createStoneBodyGeometry();
  const textureSet = createStoneTexture(activeStoneProfile);
  const material = new THREE.MeshPhysicalMaterial({
    color: 0xffffff,
    map: textureSet.map,
    bumpMap: textureSet.bump,
    bumpScale: controls.mineralType.value === "ice" ? 0.18 : 0.42,
    emissive: activeStoneProfile.emissive,
    emissiveIntensity: controls.mineralType.value === "lava" ? 0.12 : 0.012,
    roughness: controls.mineralType.value === "ice" ? 0.24 : 0.72,
    metalness: 0.03,
    transparent: false,
    opacity: 1,
    transmission: 0,
    thickness: 1.2,
    clearcoat: controls.mineralType.value === "ice" ? 0.55 : 0.22,
    clearcoatRoughness: 0.5,
    depthWrite: true
  });
  stoneBody = new THREE.Mesh(geometry, material);
  group.add(stoneBody);

  veinGroup = createVeins();
  group.add(veinGroup);
}

function createStoneBodyGeometry() {
  const geometry = new THREE.IcosahedronGeometry(8.6, 4);
  const position = geometry.attributes.position;
  const profileSeed = hashSeed(`${seedInput.value}-${activeStoneProfile.id}`);
  for (let i = 0; i < position.count; i += 1) {
    const vertex = new THREE.Vector3().fromBufferAttribute(position, i);
    const normal = vertex.clone().normalize();
    const n = layeredNoise(normal.x, normal.y, normal.z, profileSeed);
    const stretch = new THREE.Vector3(1.12, 0.82 + Number(controls.pressure.value) / 260, 0.96);
    vertex.multiplyScalar(0.78 + n * 0.28).multiply(stretch);
    position.setXYZ(i, vertex.x, vertex.y, vertex.z);
  }
  geometry.computeVertexNormals();
  return geometry;
}

function createStoneTexture(profile) {
  const size = 512;
  const canvas = document.createElement("canvas");
  const bumpCanvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  bumpCanvas.width = size;
  bumpCanvas.height = size;
  const ctx = canvas.getContext("2d");
  const bump = bumpCanvas.getContext("2d");
  const base = new THREE.Color(profile.color);
  const vein = new THREE.Color(profile.emissive);
  const dark = base.clone().multiplyScalar(0.48);
  const light = base.clone().lerp(new THREE.Color(0xffffff), 0.34);
  const seed = hashSeed(`${seedInput.value}-${profile.id}-texture`);

  const image = ctx.createImageData(size, size);
  const bumpImage = bump.createImageData(size, size);
  for (let y = 0; y < size; y += 1) {
    for (let x = 0; x < size; x += 1) {
      const nx = x / size;
      const ny = y / size;
      const grain = textureNoise(nx * 7.5, ny * 7.5, seed) * 0.55 + textureNoise(nx * 22, ny * 22, seed + 17) * 0.25;
      const veinMask = Math.abs(Math.sin(nx * 10.5 + ny * 15.7 + textureNoise(nx * 4, ny * 4, seed + 31) * 5.5));
      const veinAmount = smoothstep(0.88, 1, veinMask) * (0.32 + textureNoise(nx * 30, ny * 30, seed + 51) * 0.68);
      const speckle = textureNoise(nx * 80, ny * 80, seed + 81) > 0.78 ? 0.24 : 0;
      const tone = clamp(0.42 + grain + speckle, 0, 1);
      const c = dark.clone().lerp(light, tone).lerp(vein, veinAmount);
      const idx = (y * size + x) * 4;
      image.data[idx] = Math.round(c.r * 255);
      image.data[idx + 1] = Math.round(c.g * 255);
      image.data[idx + 2] = Math.round(c.b * 255);
      image.data[idx + 3] = 255;
      const height = Math.round(clamp((grain + veinAmount * 0.7 + speckle) * 255, 0, 255));
      bumpImage.data[idx] = height;
      bumpImage.data[idx + 1] = height;
      bumpImage.data[idx + 2] = height;
      bumpImage.data[idx + 3] = 255;
    }
  }
  ctx.putImageData(image, 0, 0);
  bump.putImageData(bumpImage, 0, 0);

  const map = new THREE.CanvasTexture(canvas);
  const bumpMap = new THREE.CanvasTexture(bumpCanvas);
  map.colorSpace = THREE.SRGBColorSpace;
  map.wrapS = map.wrapT = THREE.RepeatWrapping;
  bumpMap.wrapS = bumpMap.wrapT = THREE.RepeatWrapping;
  map.repeat.set(1.7, 1.25);
  bumpMap.repeat.set(1.7, 1.25);
  return { map, bump: bumpMap };
}

function createVeins() {
  return new THREE.Group();
}

function textureNoise(x, y, seed) {
  const value = Math.sin(x * 12.9898 + y * 78.233 + seed * 0.00013) * 43758.5453;
  return value - Math.floor(value);
}

function smoothstep(edge0, edge1, x) {
  const t = clamp((x - edge0) / (edge1 - edge0), 0, 1);
  return t * t * (3 - 2 * t);
}

function layeredNoise(x, y, z, seed) {
  return (
    Math.sin(x * 3.1 + seed * 0.00011) * 0.35 +
    Math.sin(y * 5.3 + z * 2.2 + seed * 0.00017) * 0.28 +
    Math.cos(z * 4.7 + x * 1.7 + seed * 0.00007) * 0.22 +
    deterministicProfileNoise(seed, Math.floor((x + y + z) * 1000)) * 0.15
  );
}

function deterministicProfileNoise(seed, index) {
  const value = Math.sin(index * 12.9898 + seed * 0.0001) * 43758.5453;
  return value - Math.floor(value);
}

function createGeometry(type) {
  if (type === "cube") return new THREE.BoxGeometry(0.2, 0.2, 0.2);
  if (type === "needle") return new THREE.ConeGeometry(0.08, 0.42, 6);
  return new THREE.DodecahedronGeometry(type === "rock" ? 0.22 : 0.16, 0);
}

function addSeedCluster() {
  const symmetry = Number(controls.symmetry.value);
  const seedRadius = 8.1;
  for (let i = 0; i < symmetry; i += 1) {
    const angle = (Math.PI * 2 * i) / symmetry;
    const point = new THREE.Vector3(
      Math.cos(angle) * seedRadius,
      Math.sin(angle * 2) * 1.6,
      Math.sin(angle) * seedRadius
    );
    crystal.push(makeCrystalPoint(point, 1));
  }
  crystal.push(makeCrystalPoint(new THREE.Vector3(0, seedRadius * 0.84, 0), 1));
  crystal.push(makeCrystalPoint(new THREE.Vector3(0, -seedRadius * 0.72, 0), 1));
}

function createWalker() {
  const radius = 18 + seedRng() * 14;
  const theta = seedRng() * Math.PI * 2;
  const phi = Math.acos(seedRng() * 2 - 1);
  return new THREE.Vector3(
    radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  );
}

function stepSimulation() {
  const steps = timelapse ? 10 : 2;
  for (let s = 0; s < steps; s += 1) {
    const targetWalkers = Math.round(18 + Number(controls.concentration.value) * 0.55);
    while (walkers.length < targetWalkers) walkers.push(createWalker());
    updateWalkers();
  }
  updateMesh();
}

function updateWalkers() {
  const params = getParams();
  for (let i = walkers.length - 1; i >= 0; i -= 1) {
    const walker = walkers[i];
    const nearest = findNearest(walker);
    const toCrystal = nearest.position.clone().sub(walker).normalize();
    const noise = randomVector().multiplyScalar(params.diffusion);
    const attraction = toCrystal.multiplyScalar(params.attraction);
    const gravity = new THREE.Vector3(params.gravity, -0.18 * params.pressure, 0).multiplyScalar(0.04);
    const symmetryPull = getSymmetryPull(walker, params.symmetry).multiplyScalar(params.symmetryForce);
    walker.add(noise).add(attraction).add(gravity).add(symmetryPull);

    if (experimental) {
      walker.x += Math.sin(walker.y * 0.5 + crystal.length * 0.01) * 0.08;
      walker.z += Math.cos(walker.x * 0.45) * 0.08;
    }

    if (walker.length() > 38) {
      walkers[i] = createWalker();
      continue;
    }

    const stickDistance = params.stickDistance + nearest.scale * 0.2;
    if (nearest.distance < stickDistance && crystal.length < maxParticles) {
      const branch = nearest.position.clone().sub(walker).normalize().multiplyScalar(-params.branchLength);
      const newPoint = projectToStoneSurface(walker.clone().add(branch), nearest.generation + 1);
      crystal.push(makeCrystalPoint(newPoint, nearest.generation + 1));
      walkers[i] = createWalker();
    }
  }
}

function getParams() {
  const temperature = Number(controls.temperature.value) / 100;
  const pressure = Number(controls.pressure.value) / 100;
  const concentration = Number(controls.concentration.value) / 100;
  const diffusion = Number(controls.diffusion.value) / 100;
  const randomness = Number(controls.randomness.value) / 100;
  const symmetry = Number(controls.symmetry.value);
  const gravity = Number(controls.gravity.value) / 100;
  const mineral = controls.mineralType.value;

  const mineralBias = {
    quartz: { branch: 0.72, stick: 0.86, sym: 0.12 },
    amethyst: { branch: 0.68, stick: 0.82, sym: 0.18 },
    salt: { branch: 0.48, stick: 0.76, sym: 0.42 },
    ice: { branch: 0.95, stick: 0.7, sym: 0.24 },
    lava: { branch: 0.55, stick: 1.08, sym: 0.04 }
  }[mineral];

  return {
    temperature,
    pressure,
    concentration,
    diffusion: 0.08 + diffusion * (0.72 + temperature) + randomness * 0.38,
    attraction: 0.08 + concentration * 0.32 - temperature * 0.04,
    stickDistance: mineralBias.stick + concentration * 0.45 - temperature * 0.18,
    branchLength: mineralBias.branch + randomness * 0.45 + pressure * 0.28,
    symmetry,
    gravity,
    symmetryForce: mineralBias.sym + symmetry * 0.008,
    randomness
  };
}

function findNearest(point) {
  let best = crystal[0];
  let bestDistance = Infinity;
  const stride = crystal.length > 900 ? 2 : 1;
  for (let i = 0; i < crystal.length; i += stride) {
    const distance = point.distanceTo(crystal[i].position);
    if (distance < bestDistance) {
      bestDistance = distance;
      best = crystal[i];
    }
  }
  return { ...best, distance: bestDistance };
}

function getSymmetryPull(point, symmetry) {
  if (symmetry <= 1) return new THREE.Vector3();
  const angle = Math.atan2(point.z, point.x);
  const sector = (Math.PI * 2) / symmetry;
  const targetAngle = Math.round(angle / sector) * sector;
  const radial = Math.sqrt(point.x * point.x + point.z * point.z);
  return new THREE.Vector3(
    Math.cos(targetAngle) * radial - point.x,
    0,
    Math.sin(targetAngle) * radial - point.z
  ).normalize();
}

function makeCrystalPoint(position, generation) {
  const scale = clamp(0.28 - generation * 0.0012 + seedRng() * 0.12, 0.06, 0.34);
  return {
    position,
    generation,
    scale,
    spin: new THREE.Euler(seedRng() * Math.PI, seedRng() * Math.PI, seedRng() * Math.PI)
  };
}

function projectToStoneSurface(point, generation) {
  const normal = point.clone().normalize();
  const profileSeed = hashSeed(`${seedInput.value}-${activeStoneProfile.id}-surface`);
  const surfaceNoise = layeredNoise(normal.x, normal.y, normal.z, profileSeed);
  const surfaceRadius = 8.72 + surfaceNoise * 1.05 + Math.min(generation, 80) * 0.004;
  return normal.multiplyScalar(surfaceRadius);
}

function updateMesh() {
  const palette = mineralPalettes[controls.mineralType.value];
  const colors = palette.colors;
  if (stoneBody) {
    const growth = clamp(0.72 + crystal.length / maxParticles * 0.38, 0.72, 1.1);
    stoneBody.scale.setScalar(growth);
  }
  if (veinGroup) {
    const growth = clamp(0.74 + crystal.length / maxParticles * 0.32, 0.74, 1.06);
    veinGroup.scale.setScalar(growth);
  }
  crystal.forEach((point, index) => {
    dummy.position.copy(point.position);
    dummy.rotation.copy(point.spin);
    const pulse = experimental ? 1 + Math.sin(Date.now() * 0.002 + index) * 0.18 : 1;
    dummy.scale.setScalar(point.scale * pulse);
    dummy.updateMatrix();
    instanced.setMatrixAt(index, dummy.matrix);

    const t = point.generation / Math.max(1, crystal.length);
    color.setHex(colors[Math.floor(t * colors.length) % colors.length]);
    color.lerp(new THREE.Color(colors[(index + 1) % colors.length]), deterministicNoise(index) * 0.28);
    instanced.setColorAt(index, color);
  });
  instanced.count = crystal.length;
  instanced.instanceMatrix.needsUpdate = true;
  if (instanced.instanceColor) instanced.instanceColor.needsUpdate = true;
  particleCountLabel.textContent = `${crystal.length} particles`;
}

function animate() {
  requestAnimationFrame(animate);
  if (running && crystal.length < maxParticles) stepSimulation();
  group.rotation.y += experimental ? 0.006 : 0.0018;
  group.rotation.x = Math.sin(Date.now() * 0.00035) * 0.06;
  renderer.render(scene, camera);
}

function exportSnapshot() {
  const link = document.createElement("a");
  link.download = `crystal-${seedInput.value}.png`;
  link.href = renderer.domElement.toDataURL("image/png");
  link.click();
}

function exportData() {
  const data = {
    seed: seedInput.value,
    mineral: controls.mineralType.value,
    parameters: Object.fromEntries(Object.entries(controls).map(([key, input]) => [key, input.value])),
    points: crystal.map((point) => ({
      x: Number(point.position.x.toFixed(4)),
      y: Number(point.position.y.toFixed(4)),
      z: Number(point.position.z.toFixed(4)),
      scale: Number(point.scale.toFixed(4)),
      generation: point.generation
    }))
  };
  downloadText(`crystal-${seedInput.value}.json`, JSON.stringify(data, null, 2));
}

function exportObj() {
  const lines = [`# Crystal Machine OBJ`, `# Seed ${seedInput.value}`];
  crystal.forEach((point) => {
    lines.push(`v ${point.position.x.toFixed(4)} ${point.position.y.toFixed(4)} ${point.position.z.toFixed(4)}`);
  });
  for (let i = 1; i < crystal.length; i += 1) {
    lines.push(`l ${i} ${i + 1}`);
  }
  downloadText(`crystal-${seedInput.value}.obj`, lines.join("\n"));
}

function downloadText(filename, text) {
  const blob = new Blob([text], { type: "text/plain" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  link.click();
  URL.revokeObjectURL(link.href);
}

function randomVector() {
  return new THREE.Vector3(seedRng() * 2 - 1, seedRng() * 2 - 1, seedRng() * 2 - 1).normalize();
}

function deterministicNoise(index) {
  const value = Math.sin(index * 12.9898 + hashSeed(seedInput.value) * 0.0001) * 43758.5453;
  return value - Math.floor(value);
}

function hashSeed(seed) {
  let hash = 1779033703 ^ seed.length;
  for (let i = 0; i < seed.length; i += 1) {
    hash = Math.imul(hash ^ seed.charCodeAt(i), 3432918353);
    hash = (hash << 13) | (hash >>> 19);
  }
  return hash >>> 0;
}

function mulberry32(seed) {
  return function next() {
    let t = seed += 0x6d2b79f5;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}
