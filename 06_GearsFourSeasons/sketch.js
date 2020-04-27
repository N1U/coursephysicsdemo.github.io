
let width = window.innerWidth;
let height = window.innerHeight;

let gDay;
let gMonth;
let gSolar;
let title;

let speed;
let inc;
let radius;

function update() {
    gDay = new Gear();
    gMonth = new Gear();
    gSolar = new Gear();
    title = new Title();

    inc = 12;
    radius = 200;
}

function setup() {
    createCanvas(width, height);
    colorMode(HSB, 360, 100, 100, 100);
    update();
}

function draw() {
    background(360);
    
    speed = map(mouseX, 0, width, 0, 0.2);

    push();
    translate(width / 2, height / 2 - 40);
    // 齿数 / 半径 / x / y / 速度
    gDay.run(30, radius, 0, -180, speed, 0, 120);
    gMonth.run(12, radius * 1.3, -200, 140, speed / inc, 120, 240);
    gSolar.run(24, radius * 1.3, 200, 140, speed / inc, 240, 360);
    title.run();
    pop();

    fill(60);
    textSize(15);
    text("鼠标左右移动，控制速度", width/2, height-40);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
