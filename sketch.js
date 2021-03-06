
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground, tree, treeImg
var boy, boyImg
var stone;
var mango1, mango2, mango3, mango4, mango5, mango7, mango8, mango9, mango10;

function preload(){
treeImg=loadImage("tree.png")
boyImg=loadImage("boy.png");

}
  
function setup() {
	createCanvas(1000, 650);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground();

	stone = new Stone(100,460,40);

	mango1 = new Mango(600,290,34)
	mango2 = new Mango(855,325,35)
	mango3 = new Mango(670,260,35)
	mango4 = new Mango(730,200,35)
	mango5 = new Mango(710,320,36)
	mango6 = new Mango(780,250,35)
	mango7 = new Mango(825,170,33)
	mango8 = new Mango(880,260,35)
	mango9 = new Mango(940,220,35)
	mango10 = new Mango(960,305,35)

	attach= new Launcher(stone.body,{x:100,y:465})

	tree=createSprite(755,368)
	tree.addImage(treeImg)
	tree.scale=0.42;

	boy=createSprite(160,550)
	boy.addImage(boyImg)
    boy.scale=0.125;

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  
  fill("black");
  textSize(18)
  

  detectCollision(stone,mango1)
  detectCollision(stone,mango2)
  detectCollision(stone,mango3)
  detectCollision(stone,mango4)
  detectCollision(stone,mango5)
  detectCollision(stone,mango6)
  detectCollision(stone,mango7)
  detectCollision(stone,mango8)
  detectCollision(stone,mango9)
  detectCollision(stone,mango10)

  drawSprites();

  stone.display();

  ground.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    attach.fly();
}

function detectCollision(lstone,lmango){
mangoBodyPosition=lmango.body.position
stoneBodyPosition=lstone.body.position

var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y,  mangoBodyPosition.x, mangoBodyPosition.y,)
if(distance<=lmango.diameter+lstone.diameter){
Matter.Body.setStatic(lmango.body,false)
}
}

