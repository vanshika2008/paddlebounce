var ball,ball_image;
var paddle,paddleImage; 
var edges;

function preload() {
  ball_image = loadImage("ball.png");
  paddleImage = loadImage("paddle.png");
}
function setup() {
  createCanvas(400, 400);
   ball = createSprite(200,200,10,10);
   ball.addImage("ball",ball_image);
   ball.velocityX = 9;
  
   paddle = createSprite(350,200,10,10);
   paddle.addImage("paddle",paddleImage);
}

function draw() {
  background(205,153,0);
  edges = createEdgeSprites();
  ball.bounceOff(edges[0]);
   ball.bounceOff(edges[2]);
   ball.bounceOff(edges[3]);
  ball.bounceOff(paddle,explosion);
  
  
  if(keyDown(UP_ARROW))
  {
    paddle.y = paddle.y-10;
  }
  
  if(keyDown(DOWN_ARROW))
  {
   paddle.y = paddle.y+10;
  }
 
  drawSprites();
 
}

function explosion()
{
  ball.velocityY=random(-7,8);
}