function preload() {
}

function setup() {
 canvas=createCanvas(640, 480);
 canvas.position(400, 250);
 video = createCapture(VIDEO);
 video.hide();

 tint_color = "";
}

function draw() {
  image(video, 0, 0, 640, 480);
  tint(tint_color);
  stroke(0, 100, 0);
  circle(350, 50, 70);
  rect(450, 30, 155, 100);
  square(50, 10, 200, 200);
}

function take_snapshot(){
    save('subject.png');
}

function filter_tint()
{
    tint_color = document.getElementById("color_name").value;
}