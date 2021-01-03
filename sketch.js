var canvas;
var music;

function preload() {
    music = loadSound("music.mp3");
}

function setup() {
    canvas = createCanvas(800, 600);

    //create 4 different surfaces
    pinkSurface = createSprite(90, 570, 150, 15);
    pinkSurface.shapeColor = "rgb(255,105,180)";
    pinkSurface.debug = false;

    purpleSurface = createSprite(290, 570, 150, 15);
    purpleSurface.shapeColor = "purple";
    purpleSurface.debug = false;

    redSurface = createSprite(490, 570, 150, 15);
    redSurface.shapeColor = "red";
    redSurface.debug = false;

    blueSurface = createSprite(690, 570, 150, 15);
    blueSurface.shapeColor = "blue";
    blueSurface.debug = false;

    box = createSprite((random(20,750)), 120, 20, 20);
    box.shapeColor = "white";
    box.velocityX = -3;
    box.velocityY = 3;
    box.debug = false;
}

function draw() {
    background(rgb(169, 169, 169));

    //create edgeSprite
   edges=createEdgeSprites();
   box.bounceOff(edges[0]); 
   box.bounceOff(edges[1]);
   box.bounceOff(edges[2]);
   box.bounceOff(edges[3]);

    //add condition to check if box touching surface and make it box
   if (pinkSurface.isTouching(box) && box.bounceOff(pinkSurface)) {
       box.shapeColor = "rgb(255,105,180)";
   }

   if (purpleSurface.isTouching(box) && box.bounceOff(purpleSurface)) {
    box.shapeColor = "purple";
    music.play();
   }

   if (redSurface.isTouching(box) && box.bounceOff(redSurface)) {
    box.shapeColor = "red";
    box.velocityX = 0;
    box.velocityY = 0;
    music.stop();
   }

   if (blueSurface.isTouching(box) && box.bounceOff(blueSurface)) {
    box.shapeColor = "blue";
   }


    drawSprites();
}
