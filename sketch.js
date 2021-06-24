const PLAY = 1;
const END= 0;
var gameState = PLAY;


var bgImage;
var plane, planeImage;
var enemyPlane,enemyPlaneGroup, enemyplaneImage;
var score=0;
var gameover, restart;
var restartImage; gameoverImage;




function preload(){
bgImage = loadImage("bg.jpg");
planeImage = loadImage("plane.png");
enemyplaneImage = loadImage("enemyplane.png");
restart = loadImage("restartImage.png");
gameover = loadImage("gameover.png");
}


function setup(){
  
createCanvas(windowWidth, windowHeight);

plane = createSprite(50,180,20,20);
plane.addImage(planeImage);
plane.scale = 0.8;

enemyPlaneGroup = new Group;

gameover = createSprite(windowWidth/2, windowHeight/2);
gameover = visiblility (false);
}

function draw(){
background(bgImage);

stroke("blue");
fill("white");
textSize(50);
text("Score: "+ score,30,50);


if (gameState===PLAY){
    score = score + Math.round(getFrameRate()/60);
    plane.velocityX = -(6 + 3*score/100);

    plane.y = mouseY;
    plane.x = mouseX;

    spawnEnemyPlanes();

if (enemyPlaneGroup.isTouching(plane)){
   gameState = 0;

}
}

else {
plane.velocityX = 0;
enemyPlaneGroup.setVelocityXEach(0);
enemyPlaneGroup.DestroyEach();
gameover.visible = true;

}


drawSprites();


}
function spawnEnemyPlanes(){

if(frameCount%100 == 0){

enemyPlane = createSprite(400,300,20,20);
enemyPlane.addImage(enemyplaneImage);
enemyPlane.velocityX = -2;
enemyPlane.scale = 0.2;
enemyPlane.setLifetime = 100;


enemyPlane.x = random(850,850);
enemyPlane.y = random(20,400);

enemyPlaneGroup.add(enemyPlane);
}
}