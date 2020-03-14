class Ball {
    /**
     * @param {position_y} py 
     * @param {acceleration_x} acc 
     * @param {color} c 
     * @param {text} t
     */
    constructor(py, acc, c, t) {
        this.position = createVector(0, py);
        this.velocity = createVector(5, 0);
        this.acceleration = createVector(acc, 0);
        this.color = c;
        this.textContent = t;
        this.radius = 40;
    }

    run() {
        this.update();
        this.display();
        this.checkStop();
        this.showText();
        this.drawLine();
    }

    drawLine() {
        stroke(0, 10);
        line(this.radius, this.position.y + this.radius / 2, width-this.radius, this.position.y + this.radius / 2);
    }

    showText() {
        fill(10);
        textSize(20);
        textAlign(LEFT);
        text(this.textContent, this.radius, this.position.y - 100);
    }

    update() {
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
    }

    display() {
        fill(this.color);
        noStroke();
        ellipse(this.position.x + this.radius / 2, this.position.y, this.radius);
    }

    checkStop() {
        if (this.velocity.x < 0) {
            this.acceleration.x = 0;
            this.velocity.x = 0;
        }
    }
}