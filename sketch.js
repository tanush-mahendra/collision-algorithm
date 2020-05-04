var fixedrectangle,movingrectangle;

function setup() {
  createCanvas(1200,800);
 fixedrectangle= createSprite(400, 200, 80, 50);
 fixedrectangle.shapeColor="red";

 movingrectangle=createSprite(200,200,50,50);
 movingrectangle.shapeColor="red";
 
}

function draw() {
  background(0,0,0);
  
  movingrectangle.x=World.mouseX;
  movingrectangle.y=World.mouseY;
//console.log(movingrectangle.x-fixedrectangle.x);

if(movingrectangle.x-fixedrectangle.x<movingrectangle.width/2+fixedrectangle.width/2&& 
  fixedrectangle.x-movingrectangle.x<movingrectangle.width/2+fixedrectangle.width/2&&
  movingrectangle.y-fixedrectangle.y<movingrectangle.height/2+fixedrectangle.height/2&&
  fixedrectangle.y-movingrectangle.y<movingrectangle.height/2+fixedrectangle.height/2){
  movingrectangle.shapeColor="green";
fixedrectangle.shapeColor="green";

}
else{
  movingrectangle.shapeColor="red";
  movingrectangle.shapeColor="red";
}
  drawSprites();
}