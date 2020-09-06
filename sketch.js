var wall,thickness;
var bullet,speed,weight;




function setup() {
  createCanvas(1600,400);

  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);

  bullet=createSprite(50,200,50,15);
  bullet.shapeColor="white";
  bullet.velocityX=speed;


  wall=createSprite(900,100,20,400);
wall.shapeColor="blue";
}

function draw() {
  background("black"); 
  
  

if(hasCollided(bullet,wall))
{
  bullet.velocityX=0;
  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

  if(damage>10){
    wall.shapeColor="green";
  }

  if(damage<10){
    wall.shapeColor="red";
  }
}
drawSprites();
}


function hasCollided(bullet,wall){
bulletRightEdge=bullet.x +bullet.width;
wallLeftEdge=wall.x;
if (bulletRightEdge>=wallLeftEdge)
{
  return true;
}
  return false;
}