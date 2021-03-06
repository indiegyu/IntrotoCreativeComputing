function setup() {
  createCanvas(600,600);
  background(255/2);
  windowss();
  fill(0,0,96);
  rect(100,100,400,400);
  moon();
}

function draw(){
  var x = random(100,500);
  var y = random(100,500);
  var too = random(15,50);
  var r = random(15,30);
  fill(255,255,255,too);
  ellipse(x,y,r,r);
  stroke(112,56,0);
  windowss();
  if(mouseIsPressed)
  {
    fill(0,0,96);
    rect(mouseX-20,mouseY-20,40,40);
    moon();
  }
  //windowss();
}

function windowss(){
  stroke(112,56,0);
  strokeWeight(30);
  line(100, 100, 100, 500);
  line(100, 100, 500, 100);
  line(500, 500, 100, 500);
  line(500, 500, 500, 100);
  strokeWeight(15);
  line(100, 300, 500, 300);
  line(300, 100, 300, 500);
  noStroke();
}

function moon(){
  fill(255,255,159);
  ellipse(200,200,50,50);
  fill(240,230,140);
  ellipse(210,213,5,5);
  fill(240,230,140);
  ellipse(200,217,5,5);
}
