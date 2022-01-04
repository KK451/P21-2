
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world; 

var groundObj
var leftSide

var ball;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;


	var ball_options={
		isStatic:false,
		restitution:0.3,
		frictio:0,
		density:1.2
	}


	//Create the Bodies Here.

	groundObj = new Ground(width/2, 670,width, 200)
	leftSide = new Ground(600, 510, width/30, 120)
	rightSide = new Ground(700, 510, width/30, 120)
	ball = Bodies.circle(200,200, 20, ball_options)
	World.add(world,ball);

	rectMode(CENTER);
	ellipseMode(RADIUS);






  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ellipse(ball.position.x,ball.position.y,20);
  
  drawSprites();


  groundObj.display()
  leftSide.display()
  rightSide.display()

  Engine.update(engine);

  if(keyDown(UP_ARROW))
  {
	applyForce()
  }

 
}
function applyForce(){
	Matter.Body.applyForce(ball, {x:0,y:0},{x:3,y:-3})
}




