var Ball
var Player1, Player2
var player1 = 0
var player2 = 0

var ballImg
var Player1Img, Player2Img
var BackgroundImg
var pingpongsound
var gamestate = "serve"

function preload(){
  ballImg = loadImage("ball.png")
  Player1Img = loadImage("player1.png")
  Player2Img = loadImage("player2.png")
  BackgroundImg = loadImage("background.jpeg")
  pingpongsound = loadSound("Ping Pong Sound.wav")
}

function setup(){
createCanvas(800,800)

 Ball = createSprite(400,400,50,50)
 Ball.addImage(ballImg)
 Ball.scale = 0.2
 Player1 = createSprite(50,400,40,100)
 Player1.addImage(Player1Img)
 Player1.scale = 0.5
 Player2 = createSprite(750,400,40,100)
 Player2.addImage(Player2Img)
 Player2.scale = 0.5
 Ball.debug = true
 Player1.debug = true
 Player2.debug = true
 
 }

function draw(){
 background(BackgroundImg) 
 drawSprites()
 
 var edges = createEdgeSprites() 
 if (keyDown(UP_ARROW)) {
   Player2.velocityY = -5
 }

 if (keyDown(DOWN_ARROW)) {
  Player2.velocityY = +5
 }
 Player2.bounceOff(edges[2])
 Player2.bounceOff(edges[3])   

 if(keyDown("W")) {
  Player1.velocityY = -5
 }

 if(keyDown("S")){
  Player1.velocityY = +5
 }
 Player1.bounceOff(edges[2])
 Player1.bounceOff(edges[3])   

 textSize(30)
 fill ("white")
 text ("Player 1: "+player1, 50, 100 )

 text ("Player 2: "+player2, 600, 100 )
 textSize(50)
 fill("white")

 if(gamestate === "serve"){
  text ("Click to Start", 300, 300)
  
 }
}

function mousePressed(){
  if(gamestate === "serve"){
    Ball.velocityX = 5
    Ball.velocityY = 5
    gamestate = "play"
  }
}