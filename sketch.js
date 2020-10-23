var fixedrect,movingrect

function setup() {

  createCanvas(800,400);
  fixedrect=createSprite(70, 200, 50, 50);
  movingrect=createSprite(700,200,50,50);
  movingrect.velocityX=-3
  fixedrect.velocityX=3
  fixedrect.shapeColor="lightgreen"
  movingrect.shapeColor='red'
}

function draw() {
  background(0);
 // movingrect.x=World.mouseX
 // movingrect.y=World.mouseY
 
  drawSprites();
}
