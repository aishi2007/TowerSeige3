const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4;
var box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16;
var box17,box18,box19,box20;
var rope,ground;
var backgroundImg;
var score=0;
var bg="bg.png"
function preload() {

  getBackgroundImg();
}

function setup() {
  createCanvas(1000, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);
  base= new Ground(700,580,550,20)
  poly = new Poly(400,800,250);
  rope = new Sling(poly.body, { x: 500, y: 50 });

  box1 = new Box(600, 100, 70, 70);
  box2 = new Box(900, 100, 70, 70);
  box3 = new Box(900, 100, 70, 70);
  box4 = new Box(900, 100, 70, 70);
  box5 = new Box(600, 100, 70, 70);
  box6 = new Box(600, 100, 70, 70);
  box7 = new Box(700, 100, 70, 70);
  box8 = new Box(700, 100, 70, 70);
  box9 = new Box(600, 100, 70, 70);
  box10 = new Box(900, 100, 70, 70);
  box11 = new Box(900, 100, 70, 70);
  box12 = new Box(900, 100, 70, 70);
  box13= new Box(600, 100, 70, 70);
  box14= new Box(600, 100, 70, 70);
  box15= new Box(700, 100, 70, 70);
  box16= new Box(700, 100, 70, 70);
  box17 = new Box(800, 100, 70, 70);
  box18= new Box(800, 100, 70, 70);
  box19= new Box(800, 100, 70, 70);
  box20= new Box(800, 100, 70, 70);
}

function draw() {
  if(backgroundImg)
  background(backgroundImg)
  noStroke();
  textSize(20)
  fill("white")
  text("Score: "+score,750,40)

  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display()
  box17.display();
  box18.display();
  box19.display();
  box20.display();

  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();
  box13.score();
  box14.score();
  box15.score();
  box16.score()
  box17.score();
  box18.score();
  box19.score();
  box20.score();

  poly.display();
  rope.display();
  base.display();

  // getTime();
 textSize(20)
 fill("red")
 text("TOWER SIEGE 1", 500,50)
}

function mouseDragged(){
  Matter.Body.setPosition(poly.body,{x:mouseX,y:mouseY})
}
// async function getTime(){
//   var response= await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
//   var responseJSON= await response.json();
//   console.log(responseJSON)
// }

async function getBackgroundImg(){

  var response= await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON= await response.json()

  var dataTime= responseJSON.datetime;
  var hour=dataTime.slice(11,13);
  console.log(responseJSON)
  if(hour>=06 && hour<=19){
bg="bg.png"
}else{
  bg="night_bg.png"
}

backgroundImg=loadImage(bg);
console.log(backgroundImg);
}