const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles = [];
var plinkos = [];
var divisions = [];

var ground;
var divisionHeight = 300;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  createSprite(400, 200, 50, 50);

  ground = new Ground(240, 795, 480, 10);
}

function draw() {
  background(0);  

  if(frameCount % 60 === 0) {
  particles.push(new Particle(random(width/2 - 10, width/2 + 10), 10, 10));  
}

for(var i = 0; i <= width; i = i+ 80) {
  divisions.push(new Division(i, height - divisionHeight/2, 10, divisionHeight));
}

for(var p = 40; j <= width; j = j + 50) {

plinkos.push(new  Plinko(j, 75));
}

for(var j = 15; j <= width - 10; j = j + 50) {

plinkos.push(new Plinko(j, 175));
}

for(var k = 40; k <= width; k = k + 50) {

plinkos.push(new Plinko(k, 275));
}

for(var a = 15; a <= width - 10; a = a + 50) {

plinkos.push(new Plinko(a, 375));
}

ground.display();


  drawSprites();
}