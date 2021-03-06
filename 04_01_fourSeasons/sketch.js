let days = ["初一", "初二", "初三", "初四", "初五", "初六", "初七",
    "初八", "初九", "初十", "十一", "十二", "十三", "十四", "十五", "十六",
    "十七", "十八", "十九", "二十", "二十一", "二十二", "二十三", "二十四",
    "二十五", "二十六", "二十七", "二十八", "二十九", "三十"];

let month = ["正月", "二月", "三月", "四月", "五月", "六月",
    "七月", "八月", "九月", "十月", "十一月", "十二月"];

let solar = ["小寒", "大寒",
    "立春", "雨水", "惊蛰", "春分", "清明", "谷雨",
    "立夏", "小满", "芒种", "夏至", "小暑", "大暑",
    "立秋", "处暑", "白露", "秋分", "寒露", "霜降",
    "立冬", "小雪", "大雪", "冬至",];

let gDay, gMonth, gSolar; // 日， 月， 节气
let angleDay, angleMonth, angleSolar; // 不同转速

let auxiliary;

let control = true;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    // createCanvas(400, 400);
    update();
    auxiliary = new Auxiliary();
}

function update() {
    // // 固定角速度
    angleDay = -0.01;
    angleMonth = angleDay / 12;
    angleSolar = angleDay / 12;

    let radius = 170;

    gDay = new Gears(days, radius, 11);
    gSolar = new Gears(solar, radius * 1.3, 20);
    gMonth = new Gears(month, radius * 1.7, 30);
}

function draw() {
    background(255);
    auxiliary.run();
    main();
    promptText();
    if (!control) {
        fill(0, 10);
        noStroke();
        rect(width / 2, height / 2, -height / 2, -height / 2);
    }
}

function promptText() {
    fill(0, 100);
    noStroke();
    textSize(14);
    textAlign(CENTER);
    text('鼠标左键控制「暂停/启动」', width / 2, height - 40);
}

function main() {
    // 启动
    gDay.run(angleDay, color(15, 82, 255, 200));
    gSolar.run(angleSolar, color(15, 82, 255, 255));
    gMonth.run(angleMonth, color(15, 82, 255, 180));
}

/**
 * 控制速度
 */
function mouseClicked() {
    let speed = 0;
    control = !control;

    if (!control) {
        angleDay = speed;
        angleMonth = speed;
        angleSolar = speed;
    } else {
        angleDay = -0.01;
        angleMonth = angleDay / 12;
        angleSolar = angleDay / 12;
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}