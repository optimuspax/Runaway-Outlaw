//Sprite-Variables
var user,ground,enemy,obst1,obst2,obst3,obst4,obst5,obst6,x,onum;

//Sprites
var userImg,groundImg,enemyImg,obst1Img,obst2Img,obst3Img,obst4Img,obst5Img,obst6Img;

function preload(){

//obstacles
obstGrp = new Group();

//Ground    
groundImg = loadImage("Path.png");

//Cars
enemyImg = loadImage("PoliceCar.png");
userImg = loadImage("PlayerCar.png");
obst1Img = loadImage("obst1.png");
obst2Img = loadImage("obst2.png");
obst3Img = loadImage("obst3.png");
obst4Img = loadImage("obst4.png");
obst5Img = loadImage("obst5.png");
obst6Img = loadImage("obst6.png");

}
function setup() {

//Camvas
createCanvas(window,window);
createCanvas(windowWidth,windowHeight); 

ground = createSprite(windowWidth/2,windowHeight/2);
ground.addImage(groundImg);
ground.scale = 2;

user=createSprite(windowWidth/2,575);
user.addImage(userImg);
user.scale = 0.8;

enemy=createSprite(windowWidth/2,850);
enemy.addImage(enemyImg);
enemy.scale = 1;

}

function draw() {

if(ground.y > windowHeight ){
    ground.y = height/2;
}

PlayerControl();
function PlayerControl(){
    if(keyDown("W") || keyIsDown("UP_ARROW")){
        ground.velocityY+=1
    }
    if(keyDown("S") || keyIsDown("DOWN_ARROW")){
        ground.velocityY-=1
    }
    if(keyDown("A") || keyIsDown("LEFT_ARROW")){
        user.x-=25
    }
    if(keyDown("D") || keyIsDown("RIGHT_ARROW")){
        user.x+=25
    }
}

Start();

console.log(World.mouseX);

edges= createEdgeSprites();
createEdgeSprites();
drawSprites();
}

function Start(){
    if(keyDown("SPACE")){
        ground.velocityY = 16;
        Play();
    }
}

function Play(){
    
    Player();
    Enemy();
    Obstacles();
    
    function Player(){
        background("black");
        user.debug = true;
        user.setCollider("rectangle",0,0,100,180);
    }
    
    function Enemy(){
        background("black");
        enemy.debug = true;
        enemy.setCollider("rectangle",0,5,80,225);
    }
    
    function Obstacles(){
        if(frameCount % 60 === 0){
            x = Math.round(random(732,1180));
            onum = Math.round(random(0,7));
            switch(onum){
                case 1:
                    obst1=createSprite(x,75);
                    obst1.addImage(obst1Img);
                    obst1.scale = 1.4;
                    obst1.velocityY = ground.velocityY;
                    obstGrp.add(obst1);
                    obst1.visable = false;
                    break;
                case 2:
                    obst2=createSprite(x,75);
                    obst2.addImage(obst2Img);
                    obst2.scale = 1.4;
                    obst2.velocityY = ground.velocityY;
                    obstGrp.add(obst2);
                    obst2.visable = false;
                    break;
                case 3:
                    obst3=createSprite(x,75);
                    obst3.addImage(obst3Img);
                    obst3.scale = 1.4;
                    obst3.velocityY = ground.velocityY;
                    obstGrp.add(obst3);
                    obst3.visable = false;
                    break;
                case 4:
                    obst4=createSprite(x,75);
                    obst4.addImage(obst4Img);
                    obst4.scale = 1.4;
                    obst4.velocityY = ground.velocityY;
                    obstGrp.add(obst4);
                    obst4.visable = false;
                    break;
                case 5:
                    obst5=createSprite(x,75);
                    obst5.addImage(obst5Img);
                    obst5.scale = 1.4;
                    obst5.velocityY = ground.velocityY;
                    obstGrp.add(obst5);
                    obst5.visable = false;
                    break;
                case 6:
                    obst6=createSprite(x,75);
                    obst6.addImage(obst6Img);
                    obst6.scale = 1.4;
                    obst6.velocityY = ground.velocityY;
                    obstGrp.add(obst6);
                    obst6.visable = false;
                    break;    
                default:
                    console.log();
                    break;
            }
            user.isTouching(obstGrp);
            if(user.isTouching(obstGrp)){
                End();
            }
        }
    }
}

function End(){
        obstGrp.destroyEach;
        enemy.velocityY = -8;
        ground.velocityY = 0;
}
