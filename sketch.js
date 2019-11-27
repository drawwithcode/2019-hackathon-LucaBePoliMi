
var bumperAudio;
var resizer;

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
var switchSpento;
var switchAcceso;
var opacity = 255;

var imgOpacity = 255;

function draw() {


  volume = resizer.getLevel();
  volume = map(volume, 0, 1, 0, (width*height) / 1000) // To make measures responsive

background(0, 0, 0);

if(bumperAudio.isPlaying() == true) {

opacity = 0;
background(23, 23, 23);

imgOpacity = 0;

}

else if (bumperAudio.isPlaying() == false) {
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


for(e = 0; e < 7; e += 0.17) {
push();
stroke(255);
noFill();
    ellipse(width/2, height/2, e*  volume,e* volume/2);
pop();
}

push();
imageMode(CENTER);
var logo = image(tg1Img, width/2, height/2, tg1Img.width/50*(width*height) / 100000, tg1Img.height/50*(width*height) / 100000);
pop();

fill(0, 0, 0, opacity);
rect(0, 0, width, height);

sx = 9/10 * width
sy = 9/10 * height

switchAcceso = image(switchAccesoImg, sx, sy, switchAccesoImg.width/1000000*(width*height), switchAccesoImg.height/1000000*(width*height));
push();
tint(255, imgOpacity);
switchSpento = image(switchSpentoImg, sx, sy, switchSpentoImg.width/1000000*(width*height), switchSpentoImg.height/1000000*(width*height));
pop();
  }

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
