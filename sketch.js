var paperObject,ground,dustbin1,dustbin2,dustbin3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);




	engine = Engine.create();
	world = engine.world;

	 ground = new Ground(400,680,800,20);

	 dustbin2 = new Dustbin(570,670,150,10);
	 dustbin1 = new Dustbin(500,620,10,90);
	 dustbin3 = new Dustbin(640,620,10,90);
	 

	 paperObject = new Paper(85,600,25);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  ground.display();
  dustbin2.display();
  dustbin1.display();
  dustbin3.display();
  paperObject.display();
  
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	   Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});

	   
	 }
   }


