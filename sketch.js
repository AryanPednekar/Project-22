var speed,weight,thickness;
var bullet,wall,damage;
function setup() {
  createCanvas(1600,400);
bullet=createSprite(50, 200, 50, 50);
 speed=random(223,321);
 weight=random(30,52);
 thickness=random(22,83)
 wall=createSprite(1500, 200,thickness,height/2);
 bullet.velocityX=speed;
 
wall.shapeColor=(80,80,80);

damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
}

function draw() {
  background(255,255,255);  
 
  if(hascollided(bullet,wall)){
    
    if (damage>10) {
      bullet.velocityX=0;
      wall.shapeColor=("red");
  
    
    }
    if (damage<10) {
      bullet.velocityX=0;
      wall.shapeColor=("green");
      
      }
      
       
  }

  
  
  drawSprites();
}
function hascollided(bullet,wall) {
  var bulletRightEdge=bullet.x +bullet.width;
  var wallLeftEdge=wall.x;
  if(bulletRightEdge>=wallLeftEdge){
    
    return true;

  }
  return false;
}