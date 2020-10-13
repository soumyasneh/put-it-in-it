
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var box,box2,box3;
var floor;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new paper(100,380,20);
	
	box = new bin(700,450,30,120);
	box2 = new bin(550,450,30,120);
	box3 = new bin(625,510,180,30);

	floor = new ground(400,540,800,30);

  Engine.run(engine);
  
  
}


function draw() {
  rectMode(CENTER);
  background(rgb(227,252,249));
  Engine.update(engine);

  ball.display();
  box.display();
  box2.display();
  box3.display();
  floor.display();
  
  drawSprites();

 // if(ball.x<=550){
//Text("yay!you did it",200,200);
 // }
 
}
function keyPressed() {
    if(keyCode === UP_ARROW){
      Matter.Body.applyForce(ball.body,ball.body.position,{x:80,y:-80});
    }
  }


