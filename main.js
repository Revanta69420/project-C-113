function preload() {

}

function setup() {
    canvas = createCanvas(800, 600);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
    tint_color = "";

}

function draw() {
    image(video, 240, 150, 300, 300);
    fill(255, 0, 0);
    stroke(255, 0, 0)
    circle(90, 90, 150);
    circle(700, 90, 150);
    circle(90, 500, 150);
    circle(700, 500, 150)
    fill(0, 255, 0);
    rect(166, 75, 460, 30);
    rect(166, 480, 460, 30);
    rect(80, 160, 30, 265);
    rect(690, 160, 30, 265);
}
function take_snapshot() { 
save('Revanta.png');
}