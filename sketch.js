/*
Name : Junsu Jang
Assignment Name : Move an Object
Course Number : CS099
Term & Year : Spring/2020
*/
var X;
var Y;
function setup() {
  createCanvas(400, 400);
  X = 0;
  Y = 0;
}

function draw() {
  background(220);
  circle(X,Y,100);
  X = (X+random(1,5)) % width;
  Y = (Y+random(0.5,3)) % height;
}