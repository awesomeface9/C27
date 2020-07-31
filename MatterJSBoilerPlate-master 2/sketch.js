
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var roof1;
var rope1,rope2,rope3,rope4,rope5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1=Bodies.circle(50,700,70);
	bobObject2=Bodies.circle(250,700,70);
	bobObject3=Bodies.circle(450,700,70);
	bobObject4=Bodies.circle(650,700,70);
	bobObject5=Bodies.circle(850,700,70);
	roof1=Bodies.rectangle(400,200,700,100,{isStatic:true});
	roof1= new roof(450,100,600,75);
	rope1= new Rope(bobObject1.body,roof1.body, this.radius*4,0);
	rope2=new Rope(bobObject2.body,roof1.body, this.radius*4,0);
	rope3= new Rope(bobObject3.body,roof1.body,this.radius*4,0)
	rope4= new Rope(bobObject4.body,roof1.body,this.radius*4,0);
	rope5=new Rope(bobObject5.body,roof1.body,this.radius*4,0);
	bobObject1=new bob(50,700,70);
	bobObject2=new bob(250,700,70);
	bobObject3=new bob(450,700,70);
	bobObject4=new bob(650,700,70);
	bobObject5=new bob(850,700,70);
	rope1.velocityX=0;
	if(keyDown===UP)
	{
		rope1.body.position.x=300;
		rope1.velocityX=rope1.velocityX+0.8;
	}
	Engine.run(engine)
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  roof1.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  drawSprites();
 
}



