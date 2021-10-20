var zombie, zombie_img
var player, player_img
var varFlag = 0
var zombieGroup
var score=0;

function preload(){
  zombie_img = loadImage("images/zombie.png");
  player_img = loadImage("images/player.png")
}

function setup() {
  createCanvas(600,600);
  player = createSprite(550,550, 200, 200);
  player.addImage("player",player_img)
  player.scale = 0.2
  zombieGroup = createGroup()
}

function draw() {
  background(160,100,0);  
  drawSprites();

  text("Score: "+ score, 500,10);
  score = score + Math.round(getFrameRate()/60);
  
  
if(zombieGroup.isTouching(player)){
  zombieGroup.destroyEach()
  score = 0
  
  
}

  


  

spawnZombies();
}


function spawnZombies(){

  if(frameCount %60 === 0){
    if(varFlag == 0){
      xPosition = -5
      yPosition = Math.round(random(0,150))
      varFlag = 1

    }
    else{
      yPosition = -5
      xPosition = Math.round(random(0,150))
      varFlag = 0
    }


    zombie = createSprite(xPosition,yPosition,50,50)
    zombie.addImage("zombie",zombie_img)
    zombie.scale = 0.1
    zombie.velocityX = 3
    zombie.velocityY = 3
    
    zombie.lifetime = 300
    zombieGroup.add(zombie)
  }



}

