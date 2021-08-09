var bg;
var basket, basketI;
var edges;
var fruitG, fruit;
var bombG, bomb;
var obstacle1, obstacle2, obstacle3, obstacle4, obstacle5;
var score = 0;
var lives = 3;
function preload() {

    bg = loadImage("images/amin.jpg");
    basketI = loadImage("images/basket2.png");

    obstacle1 = loadImage("images/apple.png");
    obstacle2 = loadImage("images/grape.png");
    obstacle3 = loadImage("images/guava.png");
    obstacle4 = loadImage("images/lemon.png");
    obstacle5 = loadImage("images/stBerry.png");
}



function setup() {
    createCanvas(500, 725);

    basket = createSprite(250, 675, 20, 15);
    basket.addImage(basketI);
    fruitG = new Group;
}




function draw() {
    background(bg);

    edges = createEdgeSprites();

    if (keyIsDown(LEFT_ARROW)) {

        basket.x = basket.x - 10

    }

    if (keyIsDown(RIGHT_ARROW)) {

        basket.x = basket.x + 10

    }


    for (var i = 0; i < fruitG.length; i++) {

        if (fruitG.get(i).isTouching(basket)) {

            score +=1;
            fruitG.get(i).destroy();

        }
        if (fruitG.get(i).y > 726) {

            lives -=1;
            fruitG.get(i).destroy();

        }

    }

    basket.setCollider("rectangle", 0, 15, 150, 60)

    basket.collide(edges[1]);
    basket.collide(edges[0]);

    

    createFruits();
    drawSprites();
    stroke("black");
    fill("white");
    textSize(20);
    text("Score: "+score,20,20);
    text("Lives: "+lives,400,20);
}




function createFruits() {

    if (frameCount % 70 === 0) {
        var fruit = createSprite(Math.round(random(50, 450)), -10, 8, 8)
        fruit.velocityY = 5;

        fruit.scale = 0.1;

        var rand = Math.round(random(1, 5));
        switch (rand) {
            case 1: fruit.addImage(obstacle1);
                break;
            case 2: fruit.addImage(obstacle2);
                break;
            case 3: fruit.addImage(obstacle3);
                break;
            case 4: fruit.addImage(obstacle4);
                break;
            case 5: fruit.addImage(obstacle5);
                break;


        }

        fruitG.add(fruit);
        fruit.lifetime = 150;

    }
}