//Create variables here
var dog, dogHappy, foodS, foodStock, database;
function preload()
{
  rdog= loadImage("dogg.png")
  doggo= loadImage("doggo.png")
  
	//load images here
}

function setup() {
	createCanvas(500, 500);
  dog= createSprite(250,380,20,20)
  dog.addImage(rdog)

  dog.scale=0.3
 database= firebase.database()
  foodStock=database.ref('Food')
  foodStock.on("value",readStock)
}


function draw() {  
background(46,139,87)
textSize(22)
fill("red")
text("Milk Bottles: "+ foodS, 250,40);
textSize(15)
fill("white")
text("Press the Up Arrow Key to Feed Your Dog",100,250)
  drawSprites();
  //add styles here
if (keyWentDown(UP_ARROW)){
writeStock(foodS);
dog.addImage(doggo)
}
else dog.addImage(rdog)
}

function readStock(data){
  foodS= data.val();
}

function writeStock(x){
  if (x<=0){
    x=0;
  }
  else{
    x=x-1
  }

  database.ref('/').update({
    Food:x
  })
}