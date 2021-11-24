var gameState;
var player;
var miniBlock1, miniBlock2;
var normal;
var atlantis;
var infernus;
var bg;
var enemy1;


function setup() {
  createCanvas(1000,1000);

  miniBlock1 = new MiniBlock(500,500, 1);
  miniBlock2 = new MiniBlock(100,90, 2);
  
}

function draw() {
  background(220);
  miniBlock1.display();
  miniBlock2.display();
      // if(gameState ===normal){
      //   bg = loadImage("")
      //   enemy1= new Enemy()
        
      // }

}