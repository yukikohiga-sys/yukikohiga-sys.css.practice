let img;

function preload() {
  img = loadImage('score.img1.jpg');
}

function setup() {
 createCanvas(400, 400);
 background(0);
 
}
function draw() {
  image(img,0,0,400,400);
}