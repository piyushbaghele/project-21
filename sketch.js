
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground , up_wall , right_wall , leftSmall_wall , rightSmall_wall ;
var left_wall  ;

function setup() {
	createCanvas(800,800);

engine = Engine.create();
world = engine.world;

ground = new Ground(200,480,1300,10);
up_wall = new Ground(290,10,1000,10);
left_wall = new Ground(10,245,10,460)
right_wall = new Ground(790,230,10,490);
leftSmall_wall = new Ground(750,425,10,100);
rightSmall_wall = new Ground(600,425,10,100);



var ball_option ={
  
  restitution:0.95,
  density:1.2,
  friction:0
}

//Create the Bodies Here.
ball = Bodies.circle(200,100,15,ball_option)
World.add(world,ball)

rectMode(CENTER);
ellipseMode(RADIUS) ;


  
}


function draw() {
  
  background(51);
  
  Engine.update(engine)

 ground.display();
 up_wall.display();
 left_wall.display() ;
 right_wall.display();
 leftSmall_wall.display();
 rightSmall_wall.display();

  fill("yellow")
  ellipse(ball.position.x,ball.position.y,15)

  keypressed()
  keypressed_RIGHT()

  drawSprites();

}


function keypressed() {
  if(keyDown("UP_ARROW") ){
    Matter.Body.applyForce(ball,{x:0,y:0}  ,  {x:0,y:-0.9})
  }
}

function keypressed_RIGHT() {
  if(keyDown("RIGHT_ARROW") ){
    Matter.Body.applyForce(ball,{x:0,y:0}  ,  {x:0.9,y:0}); 
  }
  

}