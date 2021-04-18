var treeIMG, ground, boyIMG;
var tree, boySprite, stoneObj;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8;
var Elastic;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload() {
}

function setup() {
    createCanvas(1435, 700);

    engine = Engine.create();
    world = engine.world;

    ground = new Ground(width / 2, height - 5, width, 10)

    Engine.run(engine);
    tree = new Tree(1150, 440, 450, 540)
    boySprite = new Boy(320, 620, 200, 290)

    stoneObj = new Stone(155, 550, 50)

    mango1 = new Mango(1150, 200, 40)
    mango2 = new Mango(1200, 300, 45)
    mango3 = new Mango(1250, 250, 50)
    mango4 = new Mango(1300, 350, 55)
    mango5 = new Mango(1000, 350, 40)
    mango6 = new Mango(1200, 380, 45)
    mango7 = new Mango(1100, 400, 50)
    mango8 = new Mango(1090, 240, 55)

    Elastic = new Throw(stoneObj.body, { x: 255, y: 550 })

}

function draw() {
    rectMode(CENTER);
    background("lightblue");
    ground.display();

    tree.display();
    boySprite.display();

    Elastic.display();
    stoneObj.display();


    mango1.display();
    mango2.display();
    mango3.display();
    mango4.display();
    mango5.display();
    mango6.display();
    mango7.display();
    mango8.display();

    detectcollision(stoneObj,mango1);
    detectcollision(stoneObj,mango2);
    detectcollision(stoneObj,mango3);
    detectcollision(stoneObj,mango4);
    detectcollision(stoneObj,mango5);
    detectcollision(stoneObj,mango6);
    detectcollision(stoneObj,mango7);
    detectcollision(stoneObj,mango8);

}

function mouseDragged() {
    Matter.Body.setPosition(stoneObj.body, { x: mouseX, y: mouseY })
}

function mouseReleased() {
    Elastic.fly()
}

function keyPressed() {
    if (keyCode === 32) {
        Matter.Body.setPosition(stoneObj.body, { x: 225, y: 550 })
    }
}

function detectcollision(lstone, lmango) {
    
    mangoBodyPosition = lmango.body.position
    stoneBodyPosition = lstone.body.position
 
    var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
    
    if (distance <= lmango.radius + lstone.radius) {
       
        Matter.Body.setStatic(lmango.body, false);
       
    }
}

