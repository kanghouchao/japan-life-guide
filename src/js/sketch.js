const CONFIG = {
  colors: {
    sky: {
      top: 'rgb(233, 241, 244)',
      middle: 'rgb(179, 216, 235)',
      bottom: 'rgb(109, 169, 196)'
    },
    sun: [238, 49, 51],
    mountain: [24, 97, 161],
    snow: [255, 255, 255],
    water: [96, 152, 205],
    branch: [150, 75, 0],
    flower: {
      pink: [247, 161, 192],
      white: [255, 219, 232],
      dark: [235, 103, 151],
      center: [255, 255, 255]
    }
  },
  animation: {
    cloudSpeed: 0.3,
    maxFallingFlowers: 20
  },
  flower: {
    petalCount: 8,
    size: 15,
    centerSize: 5
  }
};

let cloudPosition = { x: 100, y: 100 };
let fallingFlowers = [];

/**
 * Initial setup function for p5.js canvas
 */
function setup() {
  const header = document.querySelector('header');
  const headerHeight = header ? header.offsetHeight : 80;

  const canvasHeight = windowHeight - headerHeight;
  const canvas = createCanvas(windowWidth, canvasHeight);
  canvas.parent('p5-canvas');

  fill(100, 150, 255);
  initializeFallingFlowers();
}

/**
 * Main drawing loop
 */
function draw() {
  drawSky();
  drawSun();
  drawMountainWithSnow();
  drawWater();
  drawClouds();
  drawCherryBlossomTree();

  updateFallingFlowers();
  drawFallingFlowers();
  drawWaterReflections();
}

/**
 * Draw gradient sky background
 */
function drawSky() {
  const gradient = drawingContext.createLinearGradient(
    width / 2,
    0,
    width / 2,
    height
  );
  gradient.addColorStop(0, CONFIG.colors.sky.top);
  gradient.addColorStop(0.5, CONFIG.colors.sky.middle);
  gradient.addColorStop(1, CONFIG.colors.sky.bottom);
  drawingContext.fillStyle = gradient;
  rect(0, 0, width, height - 200);
}

/**
 * Draw the sun
 */
function drawSun() {
  noStroke();
  fill(...CONFIG.colors.sun);
  ellipse(width * 0.75, height * 0.22, width * 0.083, width * 0.083);
}

/**
 * Draw mountain with snow cap
 */
function drawMountainWithSnow() {
  // Mountain base
  fill(...CONFIG.colors.mountain);
  beginShape();
  vertex(0, height / 2 + 150);
  vertex(width / 2 - 200, height / 2 - 100);
  vertex(width / 2 + 200, height / 2 - 100);
  vertex(width, height / 2 + 150);
  endShape(CLOSE);

  // Snow cap
  fill(...CONFIG.colors.snow);
  beginShape();
  vertex(width / 2 - 200, height / 2 - 100);
  vertex(width / 2 - 100, height / 2 - 150);
  vertex(width / 2 + 100, height / 2 - 150);
  vertex(width / 2 + 200, height / 2 - 100);
  endShape(CLOSE);
}

/**
 * Draw water area
 */
function drawWater() {
  fill(...CONFIG.colors.water);
  rect(0, height * 0.67, width, height * 0.33);
}

/**
 * Draw animated clouds
 */
function drawClouds() {
  makeCloud(cloudPosition.x, cloudPosition.y - 50);
  makeCloud(cloudPosition.x + 200, cloudPosition.y + 50);
  makeCloud(cloudPosition.x + 50, cloudPosition.y + 150);
  cloudPosition.x += CONFIG.animation.cloudSpeed;
}

/**
 * Draw cherry blossom tree structure and flowers
 */
function drawCherryBlossomTree() {
  // Tree branches
  strokeWeight(3);
  stroke(...CONFIG.colors.branch);
  line(width, height * 0.5, width * 0.875, height * 0.5);
  line(width * 0.875, height * 0.5, width * 0.75, height * 0.44);
  line(width, height * 0.39, width * 0.875, height * 0.44);
  line(width * 0.875, height * 0.44, width * 0.75, height * 0.33);
  line(width, height * 0.33, width * 0.94, height * 0.39);
  line(width * 0.94, height * 0.39, width * 0.81, height * 0.28);

  // Flower positions
  const darkFlowerPositions = [
    [width * 0.95, height * 0.24],
    [width * 0.95, height * 0.33],
    [width * 0.825, height * 0.31],
    [width * 0.775, height * 0.38],
    [width * 0.9, height * 0.36],
    [width * 0.925, height * 0.52],
    [width * 0.775, height * 0.48],
    [width * 0.7125, height * 0.46],
    [width * 0.9875, height * 0.46],
    [width * 0.9875, height * 0.29]
  ];

  const pinkFlowerPositions = [
    [width * 0.9375, height * 0.44],
    [width * 0.875, height * 0.42],
    [width * 0.75, height * 0.36],
    [width * 0.85, height * 0.38],
    [width * 0.875, height * 0.33],
    [width, height * 0.33],
    [width, height * 0.22],
    [width, height * 0.44],
    [width, height * 0.5],
    [width * 0.8125, height * 0.44],
    [width * 0.875, height * 0.5]
  ];

  const whiteFlowerPositions = [
    [width * 0.75, height * 0.44],
    [width * 0.75, height * 0.33],
    [width * 0.8125, height * 0.29],
    [width * 0.8125, height * 0.39],
    [width * 0.8125, height * 0.47],
    [width * 0.9375, height * 0.49],
    [width * 0.9375, height * 0.38],
    [width * 0.875, height * 0.38],
    [width * 0.875, height * 0.52],
    [width, height * 0.52],
    [width, height * 0.41],
    [width, height * 0.3],
    [width, height * 0.24]
  ];

  // Draw flowers
  darkFlowerPositions.forEach(pos => drawFlower(pos[0], pos[1], 'dark'));
  pinkFlowerPositions.forEach(pos => drawFlower(pos[0], pos[1], 'pink'));
  whiteFlowerPositions.forEach(pos => drawFlower(pos[0], pos[1], 'white'));
}

/**
 * Create a cloud at specified position
 */
function makeCloud(cloudx, cloudy) {
  fill(250);
  noStroke();
  const cloudSize = width * 0.09;
  ellipse(cloudx, cloudy, cloudSize, cloudSize * 0.7);
  ellipse(
    cloudx + cloudSize * 0.14,
    cloudy + cloudSize * 0.14,
    cloudSize,
    cloudSize * 0.7
  );
  ellipse(
    cloudx - cloudSize * 0.29,
    cloudy + cloudSize * 0.14,
    cloudSize,
    cloudSize * 0.7
  );
  ellipse(
    cloudx - cloudSize * 0.57,
    cloudy + cloudSize * 0.14,
    cloudSize * 1.3,
    cloudSize * 0.43
  );
  ellipse(
    cloudx - cloudSize * 0.71,
    cloudy + cloudSize * 0.14,
    cloudSize * 1.3,
    cloudSize * 0.43
  );
  ellipse(
    cloudx + cloudSize * 0.57,
    cloudy + cloudSize * 0.14,
    cloudSize * 1.14,
    cloudSize * 0.57
  );
}

/**
 * Draw a cherry blossom flower with specified color
 * @param {number} x - X position
 * @param {number} y - Y position
 * @param {string} colorType - Color type: 'pink', 'white', or 'dark'
 */
function drawFlower(x, y, colorType) {
  push();
  fill(...CONFIG.colors.flower[colorType]);
  translate(x, y);
  noStroke();

  for (let i = 0; i < CONFIG.flower.petalCount; i++) {
    ellipse(0, 5, CONFIG.flower.size, CONFIG.flower.size * 2);
    rotate(PI / 4);
  }
  pop();

  fill(...CONFIG.colors.flower.center);
  noStroke();
  ellipse(x, y, CONFIG.flower.centerSize, CONFIG.flower.centerSize);
}

/**
 * Draw water surface reflections
 */
function drawWaterReflections() {
  for (let i = 0; i < 30; i++) {
    fill(255);
    ellipse(random(width), random(height * 0.67, height), 9, 1);
  }
}

/**
 * Handle window resize events
 */
function windowResized() {
  const header = document.querySelector('header');
  const headerHeight = header ? header.offsetHeight : 80;
  const canvasHeight = windowHeight - headerHeight;
  resizeCanvas(windowWidth, canvasHeight);
  initializeFallingFlowers();
}

/**
 * Initialize falling flowers array
 */
function initializeFallingFlowers() {
  fallingFlowers = [];
  for (let i = 0; i < CONFIG.animation.maxFallingFlowers; i++) {
    fallingFlowers.push(createFallingFlower());
  }
}

/**
 * Create a single falling flower with random properties
 * @returns {Object} Flower object with position, animation properties
 */
function createFallingFlower() {
  const branchPositions = [
    { x: width * 0.75, y: height * 0.33 },
    { x: width * 0.875, y: height * 0.44 },
    { x: width * 0.875, y: height * 0.5 },
    { x: width * 0.94, y: height * 0.39 },
    { x: width, y: height * 0.33 },
    { x: width, y: height * 0.39 },
    { x: width, y: height * 0.5 }
  ];

  const startBranch = random(branchPositions);

  return {
    x: startBranch.x + random(-30, 30),
    y: startBranch.y + random(-15, 10),
    size: random(12, 18),
    speed: random(0.8, 2.5),
    swaySpeed: random(0.008, 0.03),
    swayAmount: random(25, 60),
    rotation: random(TWO_PI),
    rotationSpeed: random(-0.03, 0.03),
    color: random(['pink', 'white', 'dark']),
    opacity: random(150, 220),
    delay: random(0, 60),
    driftDirection: random(-0.5, 0.2)
  };
}

/**
 * Update falling flowers animation
 */
function updateFallingFlowers() {
  for (let i = fallingFlowers.length - 1; i >= 0; i--) {
    const flower = fallingFlowers[i];

    if (flower.delay > 0) {
      flower.delay--;
      continue;
    }

    flower.y += flower.speed;
    flower.x += sin(flower.y * flower.swaySpeed) * flower.swayAmount * 0.1;
    flower.x += flower.driftDirection;
    flower.rotation += flower.rotationSpeed;

    if (flower.y > height + 20) {
      fallingFlowers[i] = createFallingFlower();
    }

    if (flower.x < width * 0.3 || flower.x > width + 30) {
      fallingFlowers[i] = createFallingFlower();
    }
  }
}

/**
 * Draw all falling flowers
 */
function drawFallingFlowers() {
  for (const flower of fallingFlowers) {
    if (flower.delay > 0) continue;

    push();
    translate(flower.x, flower.y);
    rotate(flower.rotation);

    if (flower.color === 'pink') {
      fill(247, 161, 192, flower.opacity);
    } else if (flower.color === 'white') {
      fill(255, 219, 232, flower.opacity);
    } else {
      fill(235, 103, 151, flower.opacity);
    }

    noStroke();

    for (let i = 0; i < 8; i++) {
      ellipse(0, flower.size * 0.4, flower.size * 0.8, flower.size * 1.5);
      rotate(TWO_PI / 8);
    }

    fill(255, flower.opacity);
    ellipse(0, 0, flower.size * 0.3, flower.size * 0.3);

    pop();
  }
}
