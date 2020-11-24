function setup() {
  createCanvas(windowWidth, windowHeight);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}


function draw() {
  background(220);
  push();
  noStroke();
  fill(255,255,0);
  star(mouseX,mouseY,10);
  pop();
}

let xPoint;
let yPoint;
let count;
let cycle;

function setup() {
  xPoint = windowWidth-100;
  yPoint = windowHeight/2;
  count = 0;
  cycle = 200;
}

function draw(){
  background(25);
  count = (count + 1) % cycle;
  if(count<24 || count>174){
    fill(0,255,255);
   xPoint = xPoint - 2;
    yPoint = yPoint - 4
    ellipse(xPoint,yPoint,50);
  }
  else if(count<49|| count>149){
    xPoint = xPoint + 2;
    yPoint = yPoint -4;
    ellipse(xPoint,yPoint,50);
  }
  else if(count<74|| count>124){
    xPoint =xPoint +2;
    yPoint =yPoint +3.9;
    ellipse(xPoint,yPoint,50);
    }
  else{
    xPoint = xPoint - 2.;
    yPoint = yPoint + 3.9
    ellipse(xPoint,yPoint,50);
  }
  push();
  noStroke();
  fill(255,255,0);
  star(mouseX,mouseY,10);
  pop();
}

function star(cx, cy, r){
  beginShape();
  for(let i = 0; i < 5; i++){
    const theta = TWO_PI * i * 2 / 5 - HALF_PI;
    const x = cx + cos(theta) * r;
    const y = cy + sin(theta) * r;
    vertex(x, y);
  }
  endShape(CLOSE);
}
