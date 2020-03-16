class Auxiliary {
    constructor() {
        this.num = 4;
        this.step = TWO_PI / this.num;
        this.a1 = 0;
        this.a2 = 0;
        this.radius = 360;
    }

    run() {
        noFill();
        stroke(0, 20);

        push();
        translate(width / 2, height / 2);
        for (let i = 0; i < this.num; i++) {
            let x = cos(i * this.step) * this.radius;
            let y = sin(i * this.step) * this.radius;

            line(x, y, 0, 0);
        }
        ellipse(0, 0, this.radius * 1.8);
        pop();
    }

}