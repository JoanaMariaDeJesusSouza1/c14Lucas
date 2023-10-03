var trex, trexRunning;
var edges;
var ground, groundImg;
var InvisibleGround;
var clouds, imageClouds;


//preload carrega as midías
function preload(){
 //animação do Trex
  trexRunning = loadAnimation("trex1.png","trex3.png","trex4.png");
  //imagem do ground
  groundImg = loadImage("ground2.png");
  // imagem nuvens
  imageClouds = loadImage("cloud.png");
  
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
  drawSprites();

}


function createClouds(){
if(frameCount%60==0){
  clouds = createSprite(600,random(14,100),40,10);
  clouds.velocityX = -3;
  clouds.addImage(imageClouds);
  clouds.scale=random(0.3,1.4);
  clouds.depth =trex.depth -1;

}
}

 


