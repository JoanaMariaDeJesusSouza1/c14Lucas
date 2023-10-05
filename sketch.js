var trex, trexRunning;
var edges;
var ground, groundImg;
var InvisibleGround;
var clouds, imageClouds;
var cactos, imageCacto1,imageCacto2,imageCacto3,imageCacto4,imageCacto5,imageCacto6, cactosGp;
var score=0;
var records =0;

//preload carrega as midías
function preload(){
 //animação do Trex
  trexRunning = loadAnimation("trex1.png","trex3.png","trex4.png");
  //imagem do ground
  groundImg = loadImage("ground2.png");
  // imagem nuvens
  imageClouds = loadImage("cloud.png");
  imageClouds = loadImage("cloud.png");
  imageCacto1 = loadImage("obstacle1.png");
  imageCacto2 = loadImage("obstacle2.png");
  imageCacto3 = loadImage("obstacle3.png");
  imageCacto4 = loadImage("obstacle4.png");
  imageCacto5 = loadImage("obstacle5.png");
  imageCacto6 = loadImage("obstacle6.png");
  imageGameOver = loadImage("gameOver.png");
  imageRestart = loadImage("restart.png");

}
//setup faz aconfiguração
function setup(){
  createCanvas(600,200)
  // criando as bordas
  edges = createEdgeSprites();
  //crie um sprite de trex
  trex = createSprite(50,160,20,50);
  // adicione dimensão e posição ao trex
  trex.addAnimation("running", trexRunning);
  trex.scale=0.5;
  //sprite do ground
  ground =createSprite(300,170,600,2);
  ground.addImage("ground", groundImg);

  InvisibleGround = createSprite(300,190,600,2);
  InvisibleGround.visible = false;
}
//draw faz o movimento, a ação do jogo
function draw(){
  background("#f0f9f7");

  // dando velocidade ao ground
  ground.velocityX =-10;
  // fazero trex pular
    if(keyDown("space")&& trex.y>164) {
       trex.velocityY = -10;
 }
 
 //conferindo a rolagem do ground
      if( ground.x<0){
        ground.x=ground.width/2;
    }
//texto para vida
  
 // chamando a  função de gravidade
 trex.velocityY+=0.5;
  //colisão do trex com as bordas
    trex.collide(InvisibleGround);
   
  createClouds();
   //coordenadas do mouse na tela
  text("X: "+mouseX+"/ Y: "+mouseY,mouseX,mouseY);
  text("Score "+score, 450,20 );
  text("Record "+records, 450,40 );
  drawSprites();

}


function createClouds(){
if(frameCount%60==0){
  clouds = createSprite(600,random(14,100),40,10);
  clouds.velocityX = -3;
  clouds.addImage(imageClouds);
  clouds.scale=random(0.3,1.4);
  clouds.depth =trex.depth -1;
  clouds.lifetime = 210;
}
}

 
function createCactos(){
  if(frameCount%100==0){
    cactos = createSprite(600,170,10,50);
    cactos.velocityX = -3;
    var sorteioCactos = Math.round(random(1,6)); 
        switch(sorteioCactos) {
          case 1: cactos.addImage(imageCacto1);     
          break;
          case 2: cactos.addImage(imageCacto2);
          break;
          case 3: cactos.addImage(imageCacto3);
          break;
          case 4: cactos.addImage(imageCacto4);
          break;
          case 5: cactos.addImage(imageCacto5);
          break;
          case 6: cactos.addImage(imageCacto6);
              break;
    }
    cactos.scale= 0.5;
    cactos.lifetime=210;
    cactos.depth =trex.depth;
  }
  }  


