var form,player,game;
var database
var gameState=0
var playerCount=0;
var allPlayers;
var car1,car2,car3,car4,cars=[]
var finishPlayers=0;
var flag=false

function preload(){
    car1_image=loadImage("car1.png");
    car2_image=loadImage("car2.png")
    car3_image=loadImage("car3.png");
    car4_image=loadImage("car5.png")
    track_image=loadImage("track.jpg");
    ground_image=loadImage("Ground.png")
}

function setup(){
    createCanvas(displayWidth,displayHeight);
    database=firebase.database();
    game=new Game();
    game.getState()
    game.start();
}
function draw() {
    background(ground_image);
    if (playerCount===4  && finishPlayers===0){
        game.update(1);
    
    }
    if(gameState===1){
        clear()
        game.play();
    }
    if (finishPlayers===4){
        game.update(2);
    }
    
    if (gameState===2 && finishPlayers===4){
        game.end()
    }
    
}