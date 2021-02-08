var block1, block2, block3, block4;
var ball;
var canvas;
var music;
var edges;
function preload(){
    music = loadSound("music.mp3");
    

}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    
    
    block1= createSprite(730, 600, 180, 30);
    block1.shapeColor = "green";
    block1.debug = true;

    block2= createSprite(530, 600, 180, 30);
    block2.shapeColor = "red";
    block2.debug = true;

    block3= createSprite(330, 600, 180, 30);
    block3.shapeColor = "orange";
    block3.debug = true;

    block4= createSprite(130, 600, 180, 30);
    block4.shapeColor = "blue";
    block4.debug = true;

    //create box sprite and give velocity
    ball = createSprite(random(20,750));
    ball.scale=0.5;
    ball.shapeColor = "white";
    ball.velocityX=5;
    ball.velocityY=5;
}

function draw() {
    background(rgb(169,169,169));
    drawSprites();
    //create edgeSprite
    edges = createEdgeSprites();
    ball.bounceOff(block1)
    ball.bounceOff(block2)
    ball.bounceOff(block3)
    ball.bounceOff(block4)
    ball.bounceOff(edges)


    //add condition to check if box touching surface and make it box
  if(ball.isTouching(block1) && ball.bounceOff(block1)){
      ball.changeShapeColor="green";
      
  }
  
  if(ball.isTouching(block2) && ball.bounceOff(block2)){
    ball.changeShapeColor="red";
   

if(ball.isTouching(block3) && ball.bounceOff(block3)){
    ball.changeShapeColor="orange";
    
}

if(ball.isTouching(block4) && ball.bounceOff(block4)){
    ball.changeShapeColor="blue";
    
}




}
}