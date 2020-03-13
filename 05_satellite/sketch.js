let s1, s2, s3;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    // createCanvas(400, 400);
    s1 = new Satellite(280, 0.08, 30, "#44e3ae");
    s2 = new Satellite(200, 0.05, 20, "#f7ac3b");
    s3 = new Satellite(140, 0.03, 16, "#f24141");
}

function draw() {
    background("#181c2b");
    drawBgNoise();
    s1.run();
    s2.run();
    s3.run();

    drawEarth();
    showText();
}

function showText() {
    fill(255);
    textSize(14);
    textAlign(CENTER);
    text("鼠标横向滑动，控制卫星速度", width / 2, height - 40);
}

function drawEarth() {
    noStroke();
    fill("#3b80f7");
    ellipse(width / 2, height / 2, 100, 100);
}

function drawBgNoise() {
    for (let i = 0; i < 100; i++) {
        let x = random(width);
        let y = random(height);

        noFill();
        stroke(255, random(255));
        strokeWeight(random(3));
        point(x, y);
    }
}

// function windowResized() {
//     resizeCanvas(windowWidth, windowHeight);
// }
