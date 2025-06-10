let r, g, b;
let lineWidth;

let cloudx = 100;
let cloudy = 100;
let flowerx=0;
let flowery=0;

let fallingFlowers = [];
let maxFlowers = 20;

function setup() {
  let header = document.querySelector('header');
  let headerHeight = header ? header.offsetHeight : 80;
  
  let canvasHeight = windowHeight - headerHeight;
  let canvas = createCanvas(windowWidth, canvasHeight);
  canvas.parent('p5-canvas');
  
  fill(100, 150, 255);
  
  initializeFallingFlowers();
}

function draw() {
  let g = drawingContext.createLinearGradient(width / 2, 0, width / 2, height);
  g.addColorStop(0, "rgb(233, 241, 244)");
  g.addColorStop(0.5, "rgb(179, 216, 235)");
  g.addColorStop(1, "rgb(109, 169, 196)");
  drawingContext.fillStyle = g;
  rect(0, 0, width, height-200);

  noStroke();
  fill(238, 49, 51);
  ellipse(width * 0.75, height * 0.22, width * 0.083, width * 0.083);

  fill(24, 97, 161);
  beginShape();
  
  vertex(0, height / 2 + 150);
  vertex(width / 2 - 200, height / 2 - 100);
  vertex(width / 2 + 200, height / 2 - 100);
  vertex(width, height / 2 + 150);
  
  endShape(CLOSE);

  fill(255);
  beginShape();
  
  vertex(width / 2 - 200, height / 2 - 100);
  vertex(width / 2 - 100, height / 2 - 150);
  vertex(width / 2 + 100, height / 2 - 150);
  vertex(width / 2 + 200, height / 2 - 100);
  
  endShape(CLOSE);

  fill(96, 152, 205);
  rect(0, height * 0.67, width, height * 0.33);
  
  makeCloud(cloudx, cloudy-50);
  makeCloud(cloudx + 200, cloudy + 50)
  makeCloud(cloudx + 50, cloudy+150);
  cloudx+=0.3;

  strokeWeight(3);
  stroke(150, 75, 0);
  line (width, height * 0.5, width * 0.875, height * 0.5);
  line (width * 0.875, height * 0.5, width * 0.75, height * 0.44);
  line (width, height * 0.39, width * 0.875, height * 0.44);
  line (width * 0.875, height * 0.44, width * 0.75, height * 0.33);
  line (width, height * 0.33, width * 0.94, height * 0.39);
  line (width * 0.94, height * 0.39, width * 0.81, height * 0.28);
   
  flowerdark(width * 0.95, height * 0.24);
  flowerdark(width * 0.95, height * 0.33);
  flowerdark(width * 0.825, height * 0.31);
  flowerdark(width * 0.775, height * 0.38);
  flowerdark(width * 0.9, height * 0.36);
  flowerdark(width * 0.925, height * 0.52);
  flowerdark(width * 0.775, height * 0.48);
  flowerdark(width * 0.7125, height * 0.46);
  flowerdark(width * 0.9875, height * 0.46);
  flowerdark(width * 0.9875, height * 0.29);
  
    
  flowerpink(width * 0.9375, height * 0.44);
  flowerpink(width * 0.875, height * 0.42);
  flowerpink(width * 0.75, height * 0.36);
  flowerpink(width * 0.85, height * 0.38);
  flowerpink(width * 0.875, height * 0.33);
  flowerpink(width, height * 0.33);
  flowerpink(width, height * 0.22);
  flowerpink(width, height * 0.44);
  flowerpink(width, height * 0.5);
  flowerpink(width * 0.8125, height * 0.44);
  flowerpink(width * 0.875, height * 0.5);
  
  flowerwhite(width * 0.75, height * 0.44);
  flowerwhite(width * 0.75, height * 0.33);
  flowerwhite(width * 0.8125, height * 0.29);
  flowerwhite(width * 0.8125, height * 0.39);
  flowerwhite(width * 0.8125, height * 0.47);
  flowerwhite(width * 0.9375, height * 0.49);
  flowerwhite(width * 0.9375, height * 0.38);
  flowerwhite(width * 0.875, height * 0.38);
  flowerwhite(width * 0.875, height * 0.52);
  flowerwhite(width, height * 0.52);
  flowerwhite(width, height * 0.41);
  flowerwhite(width, height * 0.3);
  flowerwhite(width, height * 0.24);
  
  updateFallingFlowers();
  drawFallingFlowers();
  
  water();
}

function makeCloud(cloudx, cloudy) {
  fill(250)
  noStroke();
  let cloudSize = width * 0.09;
  ellipse(cloudx, cloudy, cloudSize, cloudSize * 0.7);
  ellipse(cloudx + cloudSize * 0.14, cloudy + cloudSize * 0.14, cloudSize, cloudSize * 0.7);
  ellipse(cloudx - cloudSize * 0.29, cloudy + cloudSize * 0.14, cloudSize, cloudSize * 0.7);
  ellipse(cloudx - cloudSize * 0.57, cloudy + cloudSize * 0.14, cloudSize * 1.3, cloudSize * 0.43);
  ellipse(cloudx - cloudSize * 0.71, cloudy + cloudSize * 0.14, cloudSize * 1.3, cloudSize * 0.43);
  ellipse(cloudx + cloudSize * 0.57, cloudy + cloudSize * 0.14, cloudSize * 1.14, cloudSize * 0.57);
}

function flowerpink( flowerx,  flowery)
{
  push();
  fill(247, 161, 192);
  translate(flowerx, flowery);
  noStroke();
  for (var r1 = 0; r1 < 8; r1++) {
      ellipse(0, 5, 15, 30);
    rotate(PI / 4);
  }
  pop();
  
  fill(255);
  noStroke();
  ellipse(flowerx, flowery, 5, 5);  
}

function flowerwhite( flowerx,  flowery)
{
  push();
  fill(255, 219, 232);
  translate(flowerx, flowery);
  noStroke();
  for (var r1 = 0; r1 < 8; r1++) 
  {
    ellipse(0, 5, 15, 30);
    rotate(PI / 4);
  }
  pop();
  fill(255);
  noStroke();
  ellipse(flowerx, flowery, 5, 5);  
}

function flowerdark( flowerx,  flowery)
{
  push();
  fill(235, 103, 151);
  translate(flowerx, flowery);
  noStroke();
  for (var r1 = 0; r1 < 8; r1++) 
  {
    ellipse(0, 5, 15, 30);
    rotate(PI / 4);
  }
  pop();
  fill(255);
  noStroke();
  ellipse(flowerx, flowery, 5, 5);  
}

function water()
{
  for (var i=0; i<30; i++)
    {
      fill(255);
      ellipse (random(width), random(height * 0.67, height), 9, 1);
    }
}

function windowResized() {
  let header = document.querySelector('header');
  let headerHeight = header ? header.offsetHeight : 80;
  let canvasHeight = windowHeight - headerHeight;
  resizeCanvas(windowWidth, canvasHeight);
  initializeFallingFlowers();
}

function initializeFallingFlowers() {
  fallingFlowers = [];
  for (let i = 0; i < maxFlowers; i++) {
    fallingFlowers.push(createFallingFlower());
  }
}

function createFallingFlower() {
  let branchPositions = [
    { x: width * 0.75, y: height * 0.33 },
    { x: width * 0.875, y: height * 0.44 },
    { x: width * 0.875, y: height * 0.5 },
    { x: width * 0.94, y: height * 0.39 },
    { x: width, y: height * 0.33 },
    { x: width, y: height * 0.39 },
    { x: width, y: height * 0.5 }
  ];
  
  let startBranch = random(branchPositions);
  
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

function updateFallingFlowers() {
  for (let i = fallingFlowers.length - 1; i >= 0; i--) {
    let flower = fallingFlowers[i];
    
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

function drawFallingFlowers() {
  for (let flower of fallingFlowers) {
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