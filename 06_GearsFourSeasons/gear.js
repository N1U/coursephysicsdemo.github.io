class Gear {
    constructor() {
        this.angle = 0;
        textAlign(CENTER, CENTER);
    }

    run(temp_tooth, temp_radius, temp_x, temp_y, temp_speed, hMin, hMax) {
        this.tooth = temp_tooth;
        this.radius = temp_radius;
        this.x = temp_x;
        this.y = temp_y;
        this.speed = temp_speed;
        this.step = TWO_PI / this.tooth;
        this.hMin = hMin;
        this.hMax = hMax;

        push();
        translate(this.x, this.y);
        rotate(-PI / 2);
        this.main();
        this.drawGrid();
        this.drawArc(this.hMin, this.hMax);
        this.setNumber();
        this.setTitle();
        pop();
    }

    setTitle() {
        fill(0);
        textSize(20);
        rotate(PI / 2);
        if (this.tooth == 30)
            text(title.daysItem, 0, 0);
        if (this.tooth == 12)
            text(title.monthItem, 0, 0);
        if (this.tooth == 24)
            text(title.solarItem, 0, 0);
    }

    setNumber() {
        fill(60);
        textSize(14);
        for (let i = 0; i < this.tooth; i++) {
            let r = this.radius / 1.8 * 1.1;
            // console.log(map(mouseX, 0, width, 1, 2));
            let x = cos(i * TWO_PI / this.tooth) * r;
            let y = sin(i * TWO_PI / this.tooth) * r;
            push();
            translate(x, y);
            rotate(PI / 2);
            text(i + 1, 0, 0)
            pop();
        }
    }

    main() {
        noStroke();
        fill(90, 80);
        circle(0, 0, this.radius);
    }

    drawGrid() {
        stroke(80);
        for (let i = 0; i < this.tooth; i++) {
            let r = this.radius / 1.8;
            let x = sin(i * TWO_PI / this.tooth) * r;
            let y = cos(i * TWO_PI / this.tooth) * r;
            let inc = 0.7;
            line(x * inc, y * inc, x, y);
        }
    }

    drawArc(min, max) {
        noStroke();
        this.angle += this.speed;
        if (this.angle > TWO_PI)
            this.angle = 0;

        let num = this.radius * 1.5;
        for (let i = 0; i < num; i++) {
            let r = this.radius / 2;
            let x = cos(i * this.angle / num) * r;
            let y = sin(i * this.angle / num) * r;

            let h = map(i, 0, num, min, max);
            let alph = map(i, 0, num, 0, 100);
            let s = map(i, 0, num, 0, 8);
            fill(h, 90, 100, alph);
            circle(x, y, s);
        }
    }
}