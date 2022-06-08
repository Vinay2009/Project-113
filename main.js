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
  image(video, 0, 0, 700, 500);
  tint(tint_color);
  circle(350, 50, 70);
  rectangle(450, 30, 55, 25);
  square(550, 10, 200, 200);
}

function take_snapshot(){
    save('subject.png');
}

function filter_tint()
{
    tint_color = document.getElementById("color_name").value;
}