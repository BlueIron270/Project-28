const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var stone;
var tree;
var boyImage;
var slingshot;
var mango1;
var mango2;
var mango3;
var mango4;
var mango5;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 800);


	engine = Engine.create();
	world = engine.world;

	stone = new Stone(300, 400);
	ground = new Ground(800,height-20,1600,35);
	tree = new Tree(1200, 400);
	boyImage = loadImage("Plucking mangoes/boy.png");
	slingshot = new SlingShot(stone.body,{x:340, y:600});
	mango1 = new Mango(1200, 100);
	mango2 = new Mango(1000, 240);
	mango3 = new Mango(1500, 265);
	mango4 = new Mango(960, 400);
	mango5 = new Mango(1400, 250);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightGrey");

  stone.display();
  ground.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  imageMode(CENTER);
  image(boyImage, 400, 700, 212, 300);

  detectcollision(stone, mango1);
  detectcollision(stone, mango2);
  detectcollision(stone, mango3);
  detectcollision(stone, mango4);
  detectcollision(stone, mango5);


  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function detectcollision(lstone, lmango){
	mPos = lmango.body.position;
	sPos = lstone.body.position;

	var distance = dist(sPos.x, sPos.y, mPos.x, mPos.y);
	console.log(lstone.r);
	console.log(lmango.r);
	console.log(distance);
	if (distance <= lmango.r + lstone.r){
		Matter.Body.setStatic(lmango.body, false);
	}
}

function keyPressed(){
	if(keyCode === 32)	{
		Matter.Body.setPosition(stone.body, {x:300, y:400})
		slingshot.attach(stone.body);
	}
}