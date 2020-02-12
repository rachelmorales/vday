//Controlling animations
//click, press and hold to see different behaviors
var heart,heart2,heart3, heart4;

function preload() {

  heart = loadAnimation('images/candy_heart_sweettalk001.png','images/candy_heart_sweettalk002.png','images/candy_heart_sweettalk002.png', 'images/candy_heart_sweettalk003.png','images/candy_heart_sweettalk004.png','images/candy_heart_sweettalk003.png', 'images/candy_heart_sweettalk002.png');
  heart2 = loadAnimation('images/candy_heart_bemine001.png','images/candy_heart_bemine002.png','images/candy_heart_bemine002.png', 'images/candy_heart_bemine003.png','images/candy_heart_bemine002.png','images/candy_heart_bemine001.png');
  heart3 = loadAnimation('images/candy_heart_cutie001.png','images/candy_heart_cutie002.png','images/candy_heart_cutie002.png', 'images/candy_heart_cutie003.png','images/candy_heart_cutie004.png','images/candy_heart_cutie003.png', 'images/candy_heart_cutie002.png', 'images/candy_heart_cutie001.png');
  heart4 = loadAnimation('images/candy_heart001.png','images/candy_heart002.png','images/candy_heart002.png','images/candy_heart003.png','images/candy_heart004.png','images/candy_heart004.png','images/candy_heart003.png','images/candy_heart002.png');
  //by default animations loop but it can be changed
}

function setup() {
createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255, 224, 235);

  text('Happy Valentines Day!');

  animation(heart, 300, 150);
  animation(heart2, 500, 150);
  animation(heart3, 700, 150);
  animation(heart4, 900, 150);

}

// function mousePressed() {
//   //rewind on mouse pressed - change frame to 0
//   explode.rewind();
//
//   //move ahead one frame
//   glitch.nextFrame();
//   //glitch.previousFrame();
// }
