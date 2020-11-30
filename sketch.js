
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;

var ground1,  ground2 ,  ground3; 
var stone;
var slingshot;
var block1,block2,block3,block4,block5,block6,block7,block8,block9;
var block10,block11,block12,block13,block14,block15,block16;
var gameState = "onSling";
var backgroundColor = 200;

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;


  ground1 = new Ground(600,600,1200,10); 
  ground2 = new Ground(450,500,200,10); 
  ground3 = new Ground(700,300,200,10);
  
  stone = new Stone(100,370);

  slingshot = new Slingshot(stone.body,{x:100,y:370});
   
   block1 = new Block(450,475);
   block2 = new Block(475,475);
   block3 = new Block(500,475);
   block4 = new Block(425,475);
   block5 = new Block(375,475);
   block6 = new Block(475,300);
   block7 = new Block(500,400);
   block8 = new Block(475,400);
   block9 = new Block(425,400);
   block10 = new Block(700,250);
   block11 = new Block(715,250);
   block12 = new Block(725,250);
   block13 = new Block(715,200);
   block14 = new Block(725,200);
 



	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1200,
		  height: 700,
		  wireframes: false
		}
	}
	);

	Engine.run(engine);
  
}


function draw() {
    

  background(backgroundColor);


text("Pull the box and destory the blocks",15,230);
text("Press space for second chance",20,250);


ground1.display();
ground2.display();
ground3.display();

stone.display();

slingshot.display();

block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();
block13.display();
block14.display();


  }


function mouseDragged(){
  if(gameState != "launch"){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
  }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launch" ;
}

function keyPressed(){
    if(keyCode == 32){
      gameState = "onSling"
        slingshot.attach(stone.body);
    }
}


async function getBackground(){
  var response = await fetch("http://worldclockapi.com/api/json/est/now");
  var responseJSON = await response.json();
  

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13)


  if(hour >= 0600 && hour <= 1800){
     backgroundColor = 200;
      }
  else {
    backgroundColor = 0;    

  }
}