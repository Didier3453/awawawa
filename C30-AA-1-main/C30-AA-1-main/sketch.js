const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var fruit,rope;
var fruit_con;

var bg_img;
var food;
var rabbit;
var bunny;
var button;

function preload()
{
  bg_img = loadImage('background.png');
  food = loadImage('gato.jpeg');
  rabbit = loadImage('caja.jpg');
}

function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,680,600,20);
  
  bunny = createSprite(250,650,20,20);
  bunny.addImage(rabbit);
  bunny.scale = 0.5;
  
  button = createImg('gatoBoton.png');
  button.position(225,30);
  button.size(50,50);
  button.mouseClicked(drop);
  

  rope = new Rope(7,{x:245,y:30});
  fruit = Bodies.circle(300,300,20);
  Matter.Composite.add(rope.body,fruit);
  
  fruit_con = new Link(rope,fruit);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  imageMode(CENTER);
  
}

function draw() 
{
  background(51);

  image(bg_img,width/2,height/2,490,690);

  image(food,fruit.position.x,fruit.position.y,70,70);
  rope.miau();
  Engine.update(engine);
  ground.show();

  drawSprites();
   
}



function drop()
{
  rope.romper();
  fruit_con.detach();
  fruit_con = null 
}