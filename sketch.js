
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render=Matter.Render;

function preload()
{
	
}
function setup() {
	createCanvas(1600, 700);
	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper=new Paper(100,637,15,15);
	ground=new Ground(500,650,1500,15);
	dustbin1=createSprite(550,610,15,85);
	dustbin1.shapeColor="skyblue";
	dustbin2=createSprite(637,635,190,15);
	dustbin2.shapeColor="yellow";
	dustbin3=createSprite(726,615,15,85);
	dustbin3.shapeColor="skyblue";
    var render = Render.create({ 
		element: document.body, 
		engine: engine,
		 options: {
		 width: 1200,
		  height: 700,
		  wireframes: false 
} });
	Engine.run(engine);
  
}
function draw() {
  rectMode(CENTER);
  background(0);
  drawSprites();
   paper.display();
  ground.display();
  
  stroke ("yellow");
  strokeWeight(3);
  fill ("skyblue");
  textSize(40);
  text("Trash should always go inside bins:)",70,100); 
  
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:3,y:-5});
}
}