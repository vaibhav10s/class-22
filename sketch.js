//Namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

function setup() {
  createCanvas(400, 400);

  engine = Engine.create();
  world1 = engine.world;

  //JSON Object
  ground_options = {
    isStatic: true
  }

  ground = Bodies.rectangle(200, 400, 400, 50, ground_options);
  World.add(world1, ground);
ball_options = {
  restitution: 1
}

  ball =  Bodies.circle(200,200,25,ball_options)
  World.add(world1,ball)

  console.log(ground)
}

function draw() {
  background(0, 0, 0);

  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 400, 50);

  ellipseMode(RADIUS)
  ellipse(ball.position.x, ball.position.y,25,25)
}

