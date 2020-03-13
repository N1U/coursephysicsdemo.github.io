class Ball {
    constructor(temp_speed) {
        this.pos1 = createVector(-width / 2 + 50, 0);
        this.pos2 = createVector(width / 2 - 50, 0);

        this.speed = temp_speed;

        this.vel1 = createVector(this.speed, 0);
        this.vel2 = createVector(-this.speed, 0);

        this.deceleration = 0.02;
        this.acc1 = createVector(-this.deceleration, 0);
        this.acc2 = createVector(this.deceleration, 0);

        this.radius = 40;
    }

    run() {
        this.update();
        this.display();
    }

    update() {
        this.vel1.add(this.acc1);
        this.vel2.add(this.acc2);

        this.pos1.add(this.vel1);
        this.pos2.add(this.vel2);
    }

    display() {
        push();
        translate(width / 2, height / 2);
        this.setGraphic(this.pos1.x, this.pos1.y, this.radius, "#fcb023");
        this.setGraphic(this.pos2.x, this.pos2.y, this.radius, "#3ad67e");
        pop()

        // this.checkDist(this.pos1.x, this.pos1.y, this.pos2.x, this.pos2.y);
        this.checkDist(this.pos1, this.pos2);
    }

    setGraphic(x, y, r, c) {
        fill(c);
        noStroke();
        ellipse(x, y, r);
    }

    checkDist(p1, p2) {
        this.dis = p5.Vector.dist(p1, p2);
        // console.log(this.dis);
        // if (this.dis >= width) {
        //         this.vel1.x *= -1;
        //         this.vel2.x *= -1;
        // }
        if (this.dis <= this.radius || this.dis >= width - this.radius) {
            this.vel1.x *= -1;
            this.vel2.x *= -1;
        }
    }
}