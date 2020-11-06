var car, build;
var speed, weight;

function setup() {
  createCanvas(1600,400);

  speed = random(55,90);
  weight = random(400,1500);
  car = createSprite(50,200,50,50);
  build = createSprite(1500,200,100,400);
  car.velocityX = speed;

} 

function draw() {
  background("black");  

  if(build.x - car.x <= (build.width + car.width)/2){
    car.velocityX = 0;
    var deformation = 0.5*weight*speed*speed/22550;
    if(deformation < 100){
      car.shapeColor = "green"
    }
    else if(deformation > 100 && deformation < 180){
      car.shapeColor = "yellow";
    }
    else if(deformation > 180){
      car.shapeColor = "red";
    }
  }

  drawSprites();
}