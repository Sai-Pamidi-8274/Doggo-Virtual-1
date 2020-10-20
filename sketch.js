var dog, happyDog;
var database;
var foodS, foodStock;
var load, load1;

function preload() {
  load = loadImage("images/dogImg.png");
  load1 = loadImage("images/dogImg1.png");

}

function setup() {
  createCanvas(500, 500);
  dog = createSprite(250, 250);
  dog.scale = 0.1;
  database = firebase.database();
  foodStock = database.ref('Food');
  foodStock.on("value", readStock);
  dog.addImage(load);
}


function draw() {
  background(46, 139, 87);
  if (keyWentDown(UP_ARROW)) {
    writeStock(foodS);
    dog.addImage(load1);

  }

  fill("white");
  drawSprites();
  textSize(20);
  text("Press the Up_Arrow to feed ollie", 100, 130);

  text("Food Remaining : " + foodS, 140, 400);


}

function readStock(data) {

  foodS = data.val();






}

function writeStock(x) {
  if (x <= 0) {
    x = 0;

  } else {
    x = x - 1;

  }
  database.ref("/").update({

    Food: x

  });
}