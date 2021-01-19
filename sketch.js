const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var log1,log2,log3;
var ball;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);

    log1 = new Log(900,300,150,30);
    log2 = new Log(700,300,150,30); 
    log3 = new Log(800,370,30,220);
    
    ball = new Paper(200,200,30);
}

function draw(){
    rectMode(CENTER);
    background(230);
    Engine.update(engine);

	ground.display();
	
    log1.display();
    log2.display();
    log3.display();
    ball.display();

    keyPressed();
}

function keyPressed(){
    if(keyCode === UP_ARROW){
        Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-20})
    }
}


