
var trex ,trex_running;
var edges;
var ground;
var groundImage;
function preload(){
 trex_running=loadAnimation("trex1.png","trex3.png","trex4.png");
groundImage=loadImage("ground2.png")

}

function setup(){
  createCanvas(600,200)



  //create a trex sprite
 trex=createSprite(50,160,50,60);
trex.addAnimation("running",trex_running);
trex.scale=0.5;
edges= createEdgeSprites();

ground=createSprite(200,180,400,20);
ground.addImage("ground",groundImage);



}

function draw(){
  background("white");
  if(keyDown("space")){
   trex.velocityY=-10
  }

trex.velocityY=trex.velocityY+0.5;
trex.collide(ground);

ground.velocityX=-2;
if(ground.x<0){
  ground.x=ground.width/2;
}

  drawSprites();

}
