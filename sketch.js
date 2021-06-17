const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var backgroundImg;

function preload(){
  polyImg=loadImage("hexa.png");
  getBgImg();
}

function setup() {
  createCanvas(1600,800);
  rectMode(CENTER);
  engine=Engine.create();
  world=engine.world;
  
  polygon=Bodies.circle(200,500,20);
World.add(world,polygon)

  ground1=new Ground(600,650,350,20);
  ground2=new Ground(1200,350,270,20);
  ground3=new Ground(800,800,1600,30);

  // polygon


  // rope to throw that polygon

 
  
 // blocks for ground 1

 box1=new Box(460,620,40,40);
 box2=new BoxA(500,620,40,40);
 box3=new Box(540,620,40,40);
 box4=new BoxA(580,620,40,40);
 box5=new Box(620,620,40,40);
 box6=new BoxA(660,620,40,40);
 box7=new Box(700,620,40,40);
 box8=new BoxA(740,620,40,40);
 box9=new Box(500,580,40,40);
 box10=new BoxA(540,580,40,40);
 box11=new Box(580,580,40,40);
 box12=new BoxA(620,580,40,40);
 box13=new Box(660,580,40,40);
 box14=new BoxA(700,580,40,40);
 box15=new Box(540,540,40,40);
 box16=new BoxA(580,540,40,40);
 box17=new Box(620,540,40,40);
 box18=new BoxA(660,540,40,40);
 box19=new Box(580,500,40,40);
 box20=new BoxA(620,500,40,40);
 box21=new BoxB(600,460,40,40);
 
 // blocks for ground 2

 box22=new Box(1100,320,40,40);
 box23=new BoxA(1140,320,40,40);
 box24=new Box(1180,320,40,40);
 box25=new BoxA(1220,320,40,40);
 box26=new Box(1260,320,40,40);
 box27=new BoxA(1300,320,40,40);
 box28=new Box(1140,280,40,40);
 box29=new BoxA(1180,280,40,40);
 box30=new Box(1220,280,40,40);
 box31=new BoxA(1260,280,40,40);
 box32=new Box(1180,240,40,40);
 box33=new BoxA(1220,240,40,40);
 box34=new BoxB(1200,200,40,40);

 sling=new Launcher(this.polygon,{x:200,y:400});
}

function draw() {
  if(backgroundImg)
  background(backgroundImg);
  rectMode(CENTER);
  Engine.update(engine);


  ground1.display();
  ground2.display();
  ground3.display();
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
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  box27.display();
  box28.display();
  box29.display();
  box30.display();
  box31.display();
  box32.display();
  box33.display();
  box34.display();
  sling.display();

  imageMode(CENTER);
  ellipse(polygon.position.x,polygon.position.y,40);
  image(polyImg,polygon.position.x,polygon.position.y,60,50);
  
 

}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY})
}

function mouseReleased(){
  sling.fly();

}

function keyPressed(){
  if (keyCode===32){
  sling.attach(this.polygon);  
  }
}

  async function getBgImg(){
 var response=await fetch("http://worldtimeapi.org/api/timezone/asia/kolkata");
 var responseJSON=await response.json();
 console.log();
 console.log(responseJSON.datetime)
 var datetime=responseJSON.datetime;
 var hour=datetime.slice(11,13);

 if(hour>=06 && hour<=18){
   bg="day background.jpg";
 }else {
   bg="night background.jpg"
 }
 backgroundImg=loadImage(bg);
}