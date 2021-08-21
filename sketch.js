const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var boxes
var hero,monster,rope,ground;

function preload() {
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  hero = new Hero(400,800,250);
  rope = new Rope(hero.body, { x: 500, y: 50 });
  monster = new Monster(1100,550,300);

  boxes = [
    new Box(900,100,70,70),
    new Box(900,100,70,70),
    new Box(900,100,70,70),
    new Box(900,100,70,70),
    new Box(900,100,70,70),
    new Box(900,100,70,70),
    new Box(800,100,70,70),
    new Box(800,100,70,70),
    new Box(800,100,70,70),
    new Box(800,100,70,70),
    new Box(800,100,70,70),
    new Box(800,100,70,70),
    new Box(700,100,70,70),
    new Box(700,100,70,70),
    new Box(700,100,70,70),
    new Box(700,100,70,70),
    new Box(700,100,70,70),
    new Box(700,100,70,70),
    new Box(700,100,70,70),
    new Box(700,100,70,70),
    new Box(600,100,70,70),
    new Box(600,100,70,70),
    new Box(600,100,70,70),
    new Box(600,100,70,70),
    new Box(600,100,70,70),
    new Box(600,100,70,70)
  ]
  // box1 = new Box(600, 100, 70, 70);
  // box2 = new Box(900, 100, 70, 70);
  // box3 = new Box(900, 100, 70, 70);
  // box4 = new Box(900, 100, 70, 70);

}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();

  for(var i = 0; i<boxes.length; i++){
    boxes[i].display();
  }
  hero.display();
  rope.display();
  monster.display();

}
function mouseDragged(){
  Matter.Body.setPosition(hero.body,{ x:mouseX, y:mouseY});
}