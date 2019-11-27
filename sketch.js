
var bumperAudio;
var resizer;


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
var switchSpento;
var switchAcceso;
var opacity = 255;

function draw() {
imageMode(CENTER);

  volume = resizer.getLevel();
  volume = map(volume, 0, 1, 0, (width*height) / 1000) // To make measures responsive

background(0, 0, 0);

if(bumperAudio.isPlaying() == true) {

opacity = 0;
background(23, 23, 23);

}

switchAcceso = image(switchAccesoImg, 9/10 * width, 9/10 * height, switchAccesoImg.width, switchAccesoImg.height);
switchSpento = image(switchSpentoImg, 9/10 * width, 9/10 * height, switchSpentoImg.width, switchSpentoImg.height);
// Static noise
for(a = 0; a < volume; a++) {
push();
noStroke();
fill(volume*2);
circle(random() * width, random() * height, 2);
pop();


}

for(b = 0; b < volume; b++) {
push();
noStroke();
fill(volume);
circle(random() * width, random() * height, 2);
pop();

}



push();
noStroke();
fill(255)
    ellipse(width/2, height/2, volume*4, volume*2);
pop();

var logo = image(tg1Img, width/2, height/2, tg1Img.width/(width*height)*100000, tg1Img.height/(width*height) * 100000);

fill(0, 0, 0, opacity);
rect(0, 0, width, height);

switchAcceso = image(switchAccesoImg, 9/10 * width, 9/10 * height, switchAccesoImg.width, switchAccesoImg.height);
switchSpento = image(switchSpentoImg, 9/10 * width, 9/10 * height, switchSpentoImg.width, switchSpentoImg.height);
  }

  function mouseClicked() {
if (bumperAudio.isPlaying() == false) {

    bumperAudio.play();
}
  }

// To make the canvas responsive
  function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
