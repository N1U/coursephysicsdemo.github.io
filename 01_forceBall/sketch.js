let ball;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    background(255);
    // createCanvas(400, 400);
    
    ball = new Ball(7);
}

function draw() {
    // background(255);
    fill(255, 30);
    noStroke();
    rect(0, 0, width, height);
    ball.run();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
