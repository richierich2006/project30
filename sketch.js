const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;
const Body= Matter.Body;
const Constraint=Matter.Constraint;


var engine,world;
var holder,ball,ground;
var stand1,stand2,slingShot;
var polImg;
var block1a,block2a,block3a,block4a;
var block5a,block6a,block7a,block8a;
var block9a,block10a,block11a,block12a;
var block13a,block14a,block15a,block16a;
var block1,block2,block3,block4,block5;
var block6,block7,block8,block9;

function preload(){
    polImg = loadImage("polygon.png");

}

function setup(){
    createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);

    ground = new Ground();
    stand1 = new Stand(390,300,250,10);
    stand2 = new Stand(700,200,200,10);
    //stand1
    //level 1
    block1a = new Block(300,275,30,40);
    block2a = new Block(330,275,30,40);
    block3a = new Block(360,275,30,40);
    block4a = new Block(390,275,30,40);
    block5a = new Block(420,275,30,40);
    block6a = new Block(450,275,30,40);
    block7a = new Block(480,275,30,40);
    //level2
    block8a = new Block(330,235,30,40);
    block9a = new Block(360,235,30,40);
    block10a = new Block(390,235,30,40);
    block11a = new Block(420,235,30,40);
    block12a = new Block(450,235,30,40);
    //level3
    block13a = new Block(360,195,30,40);
    block14a = new Block(390,195,30,40);
    block15a = new Block(420,195,30,40);
    //level4
    block16a = new Block(390,155,30,40);

    //stand2
    //level1
    block1 = new Block(640,175,30,40);
    block2 = new Block(670,175,30,40);
    block3 = new Block(700,175,30,40);
    block4 = new Block(730,175,30,40);
    block5 = new Block(760,175,30,40);
    //level2
    block6 = new Block(670,135,30,40);
    block7 = new Block(700,135,30,40);
    block8 = new Block(730,135,30,40);
    //level3
    block9 = new Block(700,95,30,40);

    ball = Bodies.circle(50,200,20);
    World.add(world,ball);

    slingShot = new Slingshot(this.ball,{x:100,y:200});
}

function draw(){
    background(56,44,44);
    //Engine.update(engine);

    textSize(20);
    fill ("lighyellow");
    text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",100,30);

    ground.display();
    stand1.display();
    stand2.display();

    strokeWeight(2);
    stroke(15);
    fill("skyblue");
    block1a.display();
    block2a.display();
    block3a.display();
    block4a.display();
    block5a.display();
    block6a.display();
    block7a.display();
    fill("pink");
    block8a.display();
    block9a.display();
    block10a.display();
    block11a.display();
    block12a.display();
    fill("turquoise");
    block13a.display();
    block14a.display();
    block15a.display();
    fill("grey");
    block16a.display();
    fill("skyblue");
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    fill("turquoise");
    block6.display();
    block7.display();
    block8.display();
    fill("pink")
    block9.display();
    fill("gold");
    imageMode(CENTER);
    image(polImg,ball.position.x,ball.position.y,40,40);

    slingShot.display();
}
function mouseDragged(){
    Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
  }
  function mouseReleased(){
    slingShot.fly();
  }
  function keyPressed(){
      if(keyCode===32){
          slingShot.attach(this.ball);
      }
  }