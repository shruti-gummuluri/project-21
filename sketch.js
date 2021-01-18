var canvas;
var Block1,Block2,Block3,Block4;
var box
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    Block1=createSprite(0,580,360,30);
    Block1.shapeColor= "blue";
    
    Block2=createSprite(287,580,200,30);
    Block2.shapeColor= "orange";

    Block3=createSprite(495,580,200,30);
    Block3.shapeColor= "red";

    Block4=createSprite(700,580,200,30);
    Block4.shapeColor= "yellow";

    box=createSprite(random(20,750),100,40,40);
    box.shapeColor= "white";
    box.velocityX= 4;
    box.velocityY= 8;

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    box.bounceOff(edges);

    if(Block1.isTouching(box) && box.bounceOff(Block1)){
        box.shapeColor="blue";
        music.play();
    }


    if(Block2.isTouching(box)){
        box.velocityX= 0;
        box.velocityY= 0;
        music.stop();
    }

    if(Block3.isTouching(box) && box.bounceOff(Block3)){
        box.shapeColor="red";
    }

    if(Block4.isTouching(box) && box.bounceOff(Block4)){
        box.shapeColor="yellow";
    }



    drawSprites();
    //add condition to check if box touching surface and make it box
}
