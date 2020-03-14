let balls = [];
let num = 3;

let pos_y = [0.3, 0.5, 0.7];
let acc_x = [-0.05, -0.03, -0.02];
let colors = ['#1482ff', '#ffd014', '#24ed92'];
let textList = ["毛巾表面", "纸张表面", "木板表面"];

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    background(255);

    for (let i = 0; i < num; i++) {
        balls[i] = new Ball(pos_y[i] * height, acc_x[i], colors[i], textList[i]);
    }
}

function draw() {
    // background(255);

    fill(255, 40);
    noStroke();
    rect(0, 0, width, height);

    for (let i = 0; i < num; i++) {
        balls[i].run();
    }

    fill(0);
    textSize(14);
    textAlign(CENTER);
    text('点击鼠标左键，或键盘 \' r \' 键，重置画面', width / 2, height - 40);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function mousePressed() {
    setup();
}

function keyPressed() {
    if (keyCode === 82)
        setup();
}