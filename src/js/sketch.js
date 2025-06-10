let r, g, b;
let lineWidth;

let cloudx = 100;
let cloudy = 100;
let flowerx=0;
let flowery=0;
//let blue = 189;

// 飘落花朵数组
let fallingFlowers = [];
let maxFlowers = 20; // 最大花朵数量 - 从树枝上看起来更自然

function setup() {
  // 获取header高度
  let header = document.querySelector('header');
  let headerHeight = header ? header.offsetHeight : 80;
  
  // 创建画布，高度为窗口高度减去header高度
  let canvasHeight = windowHeight - headerHeight;
  let canvas = createCanvas(windowWidth, canvasHeight);
  canvas.parent('p5-canvas'); // 将画布添加到指定元素
  
  fill(100, 150, 255);
  
  // 初始化飘落花朵
  initializeFallingFlowers();
}

function draw() {
  // background(155, 186, mouseY);
 // background(150, 242, 250);

  
  //gradient sky
   
  let g = drawingContext.createLinearGradient(width / 2, 0, width / 2, height);
  g.addColorStop(0, "rgb(233, 241, 244)");
  g.addColorStop(0.5, "rgb(179, 216, 235)");
  g.addColorStop(1, "rgb(109, 169, 196)");
  drawingContext.fillStyle = g;
  rect(0, 0, width, height-200);


  // sun
  noStroke();
  fill(238, 49, 51);
  ellipse(width * 0.75, height * 0.22, width * 0.083, width * 0.083);

  //mountain shape - シンプルな台形の山
  fill(24, 97, 161);
  beginShape();
  
  // 台形の山を描画
  vertex(0, height / 2 + 150);
  vertex(width / 2 - 200, height / 2 - 100); // 左側の傾斜
  vertex(width / 2 + 200, height / 2 - 100); // 右側の傾斜（平らな頂上）
  vertex(width, height / 2 + 150);
  
  endShape(CLOSE);

  // 山頂の白雪 - 白い梯形（山頂の上に重ねる）
  fill(255);
  beginShape();
  
  // 山頂の上に白雪の梯形を描画
  vertex(width / 2 - 200, height / 2 - 100); // 左側の山頂（雪の底辺）
  vertex(width / 2 - 100, height / 2 - 150); // 左側の雪頂
  vertex(width / 2 + 100, height / 2 - 150); // 右側の雪頂
  vertex(width / 2 + 200, height / 2 - 100); // 右側の山頂（雪の底辺）
  
  endShape(CLOSE);

  fill(96, 152, 205);
  //line(0, 400, 800, 400);

  rect(0, height * 0.67, width, height * 0.33);
  
  // cloud
  makeCloud(cloudx, cloudy-50);
  makeCloud(cloudx + 200, cloudy + 50)
  makeCloud(cloudx + 50, cloudy+150);
  cloudx+=0.3;
 // blue--;

  //-----------flowers start
  
 
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
  
  //______________flowers end
  
  // 更新和绘制飘落的花朵
  updateFallingFlowers();
  drawFallingFlowers();
  
  water();
 // noLoop();
}

function makeCloud(cloudx, cloudy) {
  fill(250)
  noStroke();
  let cloudSize = width * 0.09; // 基础云朵大小适配屏幕宽度
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
  //rotate(radians(frameCount / 2));
  for (var r1 = 0; r1 < 8; r1++) {
    //if (frameCount <= 20) {
    //  ellipse(0, 5 + frameCount / 2, 5 + frameCount / 4, 10 + frameCount / 2);
   // }
   // if (frameCount > 20) {
      ellipse(0, 5, 15, 30);
   // }
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

// 响应窗口大小变化
function windowResized() {
  // 获取header高度
  let header = document.querySelector('header');
  let headerHeight = header ? header.offsetHeight : 80;
  
  // 调整画布大小
  let canvasHeight = windowHeight - headerHeight;
  resizeCanvas(windowWidth, canvasHeight);
  
  // 重新初始化飘落花朵以适应新的屏幕尺寸
  initializeFallingFlowers();
}

// 初始化飘落花朵
function initializeFallingFlowers() {
  fallingFlowers = [];
  for (let i = 0; i < maxFlowers; i++) {
    fallingFlowers.push(createFallingFlower());
  }
}

// 创建单个飘落花朵
function createFallingFlower() {
  // 定义樱花树枝的位置范围（基于代码中绘制的树枝位置）
  let branchPositions = [
    { x: width * 0.75, y: height * 0.33 },  // 上方枝条
    { x: width * 0.875, y: height * 0.44 }, // 中间枝条
    { x: width * 0.875, y: height * 0.5 },  // 下方枝条
    { x: width * 0.94, y: height * 0.39 },  // 右侧枝条
    { x: width, y: height * 0.33 },         // 最右上枝条
    { x: width, y: height * 0.39 },         // 最右中枝条
    { x: width, y: height * 0.5 }           // 最右下枝条
  ];
  
  // 随机选择一个枝条位置作为起点
  let startBranch = random(branchPositions);
  
  return {
    x: startBranch.x + random(-30, 30), // 在枝条附近稍大范围随机
    y: startBranch.y + random(-15, 10), // 从枝条位置开始，稍微上方一点
    size: random(12, 18), // 增大花朵尺寸，与枝条上的花朵更匹配
    speed: random(0.8, 2.5), // 稍微慢一点的落下速度
    swaySpeed: random(0.008, 0.03), // 更柔和的摆动
    swayAmount: random(25, 60), // 增大摆动幅度，让花朵能飘向画面中间
    rotation: random(TWO_PI),
    rotationSpeed: random(-0.03, 0.03), // 更慢的旋转
    color: random(['pink', 'white', 'dark']),
    opacity: random(150, 220), // 稍微透明一些
    delay: random(0, 60), // 添加随机延迟，让花朵不同时开始落下
    driftDirection: random(-0.5, 0.2) // 添加向左飘移的趋势，让花朵向画面中间移动
  };
}

// 更新飘落花朵
function updateFallingFlowers() {
  for (let i = fallingFlowers.length - 1; i >= 0; i--) {
    let flower = fallingFlowers[i];
    
    // 如果有延迟，先减少延迟时间
    if (flower.delay > 0) {
      flower.delay--;
      continue; // 跳过这次更新，等待延迟结束
    }
    
    // 更新位置
    flower.y += flower.speed;
    flower.x += sin(flower.y * flower.swaySpeed) * flower.swayAmount * 0.1;
    flower.x += flower.driftDirection; // 添加持续的向左飘移
    flower.rotation += flower.rotationSpeed;
    
    // 如果花朵落到屏幕底部，重新从树枝创建
    if (flower.y > height + 20) {
      fallingFlowers[i] = createFallingFlower();
    }
    
    // 如果花朵飘出合理范围，重新从树枝创建
    // 允许花朵飘到画面中央，但不要完全消失在左侧
    if (flower.x < width * 0.3 || flower.x > width + 30) {
      fallingFlowers[i] = createFallingFlower();
    }
  }
}

// 绘制飘落花朵
function drawFallingFlowers() {
  for (let flower of fallingFlowers) {
    // 如果花朵还在延迟中，不绘制
    if (flower.delay > 0) continue;
    
    push();
    translate(flower.x, flower.y);
    rotate(flower.rotation);
    
    // 根据颜色类型设置颜色
    if (flower.color === 'pink') {
      fill(247, 161, 192, flower.opacity);
    } else if (flower.color === 'white') {
      fill(255, 219, 232, flower.opacity);
    } else {
      fill(235, 103, 151, flower.opacity);
    }
    
    noStroke();
    
    // 绘制花瓣 - 改为8瓣，与枝条上的花朵一致
    for (let i = 0; i < 8; i++) {
      ellipse(0, flower.size * 0.4, flower.size * 0.8, flower.size * 1.5);
      rotate(TWO_PI / 8);
    }
    
    // 绘制花心
    fill(255, flower.opacity);
    ellipse(0, 0, flower.size * 0.3, flower.size * 0.3);
    
    pop();
  }
}