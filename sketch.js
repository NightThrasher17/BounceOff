var mr,fr;



function setup() {
  createCanvas(800,800);

  fr = createSprite(400, 100, 50, 80);
  fr.shapeColor = "yellow"
  fr.velocityY = 5;
  

  mr = createSprite(400,400,80,50);
  mr.shapeColor = "cyan"
  mr.velocityY = -5;
















}

function draw() {
  background("black");  
  
  bounceoff(fr,mr);
  
  
  
  
  
  
  
  
  drawSprites();
}

