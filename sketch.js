
var bumperAudio;
// Variable to be used to measure volume
var resizer;

// Variables for switch x and y
var sx;
var sy;


function preload() {
  bumperAudio = loadSound("./assets/TG1_bumper.mp3");
  switchSpentoImg = loadImage("./assets/Switch_spento.png");
  switchAccesoImg = loadImage("./assets/Switch_acceso.png");
  tg1Img = loadImage("./assets/TG1_grigio.png")

}

function setup() {
  createCanvas(windowWidth, windowHeight);


  resizer = new p5.Amplitude();
  resizer.setInput(bumperAudio);

}

var volume = 0;

// Variables for switches images
var switchSpento;
var switchAcceso;

// Variable for opacity, it allows the logo not be shown at the beginning
var opacity = 255;

// Variable for toggling the switches
var imgOpacity = 255;

function draw() {

// Measuring the volume
  volume = resizer.getLevel();
  // Mapping it
  // To make measures responsive width*height will be used
  volume = map(volume, 0, 1, 0, (width*height) / 1000)


background(0, 0, 0);

// When the audio plays

if(bumperAudio.isPlaying() == true) {

//The logo is shown
opacity = 0;
// the background is grey
background(23, 23, 23);
// The switch toggles
imgOpacity = 0;

}

else if (bumperAudio.isPlaying() == false) {
  // The switch is on "off"
  imgOpacity = 255;
}




// Static noise
for(a = 0; a < volume*3; a++) {
push();
noStroke();
fill(volume*2);
circle(random() * width, random() * height, 2);
pop();


}

for(b = 0; b < volume*3; b++) {
push();
noStroke();
fill(volume);
circle(random() * width, random() * height, 2);
pop();

}

// Background for the logo
for(e = 0; e < 7; e += 0.17) {
push();
stroke(255);
noFill();
    ellipse(width/2, height/2, e*  volume,e* volume/2);
pop();
}

// Logo image
push();
imageMode(CENTER);
var logo = image(tg1Img, width/2, height/2, tg1Img.width/50*(width*height) / 100000, tg1Img.height/50*(width*height) / 100000);
pop();

// Rectangle to cover the logo at the beginning
fill(0, 0, 0, opacity);
rect(0, 0, width, height);

// Defining switches' x and y
sx = 9/10 * width
sy = 9/10 * height

// Creating the switches' images
switchAcceso = image(switchAccesoImg, sx, sy, switchAccesoImg.width/1000000*(width*height), switchAccesoImg.height/1000000*(width*height));
push();
tint(255, imgOpacity);
switchSpento = image(switchSpentoImg, sx, sy, switchSpentoImg.width/1000000*(width*height), switchSpentoImg.height/1000000*(width*height));
pop();
  }

// The audio plays and the switch toggles just when click is on switch
  function mouseClicked() {
if (bumperAudio.isPlaying() == false) {
  if (mouseX > sx && mouseX < sx + switchSpentoImg.width/1000000*(width*height)
    && mouseY > sy && mouseY < sy + switchSpentoImg.height/1000000*(width*height))
    {

    bumperAudio.play();



}
}

  }

// To make the canvas responsive
  function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
