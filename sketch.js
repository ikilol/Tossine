var t;
var p;

function setup() {
  background(255);
  createCanvas(windowWidth, windowHeight);
  t = 0;
  p = 0;
}

function draw() {

  var r = 200 * noise(p+5);
  var g = 255 * noise(p+0);
  var b = 250 * noise(p+5);

  stroke(r, g, b);
  noFill();

  translate(width/2, height/2);
  beginShape();
  for (var i = 0; i < 200; i++) {
    var ang = map(i, 0, 200, 0, TWO_PI);
    var rad = 350 * noise(i * 0.1, t * 0.02);
    var x = rad * cos(ang);
    var y = rad * sin(ang);
    curveVertex(x, y);
  }
  endShape(CLOSE);

  t += 1;
  p = p + 0.01;



}
