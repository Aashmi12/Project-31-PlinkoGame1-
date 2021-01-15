const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ground;
var division1, division2, division3, division4, division5, division6, division7;
var particle = [];
var plinko = [];
var backgroundImage;



function preload(){
backgroundImage = loadImage("Wood.jpg");
}



function setup() {
  createCanvas(520,785);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(0, 780, 1200, 10);

  division1 = new Division(0, 680, 5, 200);
  division2 = new Division(80, 680, 5, 200);
  division3 = new Division(170, 680, 5, 200);
  division4 = new Division(250, 680, 5, 200);
  division5 = new Division(330, 680, 5, 200);
  division6 = new Division(410, 680, 5, 200);
  division7 = new Division(475, 680, 5, 200);

  
  for (var a = 75; a <= width; a = a + 50) 
  {
   plinko.push(new Plinko(a, 75, 10));
  }


  for (var a = 50; a <= width - 10; a = a + 50) 
  {
   plinko.push(new Plinko(a, 175, 10));
  }


   for (var a = 75; a <= width; a = a + 50) 
  {
   plinko.push(new Plinko(a,275,10));
  }


   for (var a = 50; a <= width - 10; a = a + 50) 
  {
   plinko.push(new Plinko(a,375,10));
  }

}



function draw() {

  background(backgroundImage);  
  Engine.update(engine);

  ground.display();
  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
  division7.display();


  for (var a = 0; a < plinko.length; a++) 
   {
    plinko[a].display();
   }
 
   if(frameCount % 60 === 0)
   {
    particle.push(new Particle(random(width/2-30, width/2+30), 10,10));
   }

   for (var i = 0; i < particle.length; i++)
   {
    particle[i].display();
   }

  

}

