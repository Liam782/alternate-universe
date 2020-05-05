var sun,mercury,venus,earth,mars,jupiter,saturn,uranus,neptune;
var angle = 0;
var angleSpeed = 0.2;

function setup() {
  createCanvas(1200,800);

  sun = createSprite(0,0,10,10);
  sun.shapeColor = "yellow";
  sun.setCollider("circle",0,0,7);

  mercury = createSprite(50,50,10,10);
  mercury.shapeColor = "red";
  mercury.setCollider("circle",0,0,7);

  venus = createSprite(100,10,15,15);
  venus.shapeColor = "brown";
  venus.setCollider("circle",0,0,7);
 
  earth = createSprite(-150,50,20,20);
  earth.shapeColor = "blue";
  earth.setCollider("circle",0,0,7);

  mars = createSprite(-200,-30,20,20);
  mars.shapeColor = "red";
  mars.setCollider("circle",0,0,7);

  jupiter = createSprite(0,250,20,20);
  jupiter.shapeColor = "orange";
  jupiter.setCollider("circle",0,0,7);

  saturn = createSprite(50,-300,20,20);
  saturn.shapeColor = "brown";
  saturn.setCollider("circle",0,0,7);

  uranus = createSprite(-100,350,20,20);
  uranus.shapeColor = "blue";
  uranus.setCollider("circle",0,0,7);

  neptune = createSprite(200,-400,20,20);
  neptune.shapeColor = "blue";
  neptune.setCollider("circle",0,0,7);
}

function draw() {
  background(0); 

  angleMode(DEGREES);
  translate(width/2,height/2);
  rotate(angle);

  angle = angle + angleSpeed;

  if(sun.collide(mercury)){
    mercury.destroy();
  }

  if(sun.collide(venus)){
    venus.destroy();
  }

  if(sun.collide(earth)){
    earth.destroy();
  }

  if(sun.collide(mars)){
    mars.destroy();
  }

  if(sun.collide(jupiter)){
    jupiter.destroy();
  }

  if(sun.collide(saturn)){
    saturn.destroy();
  }

  if(sun.collide(uranus)){
    uranus.destroy();
  }

  if(sun.collide(neptune)){
    neptune.destroy();
  }


  if(frameCount % 1 === 0){
    sun.scale = sun.scale + 0.01;
  }

  drawSprites();
}