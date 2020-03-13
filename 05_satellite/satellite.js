class Satellite {
    /**
     * @param {element} r // radius 
     * @param {element} as // anglespeed
     * @param {element} s // size
     * @param {color} c // color
     */
    constructor(r, as, s, c) {
        this.radius = r;
        this.angleSpeed = as;
        this.size = s;
        this.color = c;

        this.angle = 0;
        this.num = 1;
        this.step = TWO_PI / this.num;
    }

    run() {
        push();
        translate(width / 2, height / 2);
        this.auxiliary();
        // this.angle += this.angleSpeed;
        this.angle += map(mouseX*this.angleSpeed, 0, width, 0.01, 0.6);
        rotate(this.angle);
        for (let i = 0; i < this.num; i += this.step) {
            let x = sin(i * this.step) * this.radius;
            let y = cos(i * this.step) * this.radius;

            this.drawSatellite(x, y);
        }
        pop();
    }

    auxiliary() {
        noFill();
        stroke(255, 20);
        strokeWeight(1);
        ellipse(0, 0, this.radius * 2, this.radius * 2);
    }

    drawSatellite(sx, sy) {
        fill(this.color);
        stroke(255, 100);
        rectMode(CENTER);

        // head
        line(sx, sy - this.size, sx, sy - this.size * 1.4);
        arc(sx, sy - this.size * 0.65, this.size * 0.65, this.size * 0.65, TWO_PI / 2, TWO_PI, CHORD);
        rect(sx, sy, this.size * 0.65, this.size);

        rect(sx - this.size, sy, this.size, this.size / 2);
        rect(sx + this.size, sy, this.size, this.size / 2);

        beginShape();
        vertex(sx - this.size * 0.2, sy + this.size * 0.65);
        vertex(sx + this.size * 0.2, sy + this.size * 0.65);
        vertex(sx + this.size * 0.35, sy + this.size);
        vertex(sx - this.size * 0.35, sy + this.size);
        endShape(CLOSE);

    }


}