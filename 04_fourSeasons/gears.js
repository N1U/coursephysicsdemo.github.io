class Gears {
    /**
     * 
     * @param {Array} temp_content -> 内容组
     * @param {element} temp_r  -> 半径尺寸
     * @param {*} temp_fs -> 字号
     */
    constructor(temp_content, temp_r, temp_fs) {
        this.content = temp_content;
        this.radius = temp_r;
        this.fontSize = temp_fs;

        this.num = this.content.length;
        this.step = TWO_PI / this.num;
        this.angle = 0;
        textAlign(CENTER);
    }

    run(angleAcc, color) {

        fill(color);
        stroke(color, 80);
        strokeWeight(1);

        push();
        translate(width / 2, height / 2);
        this.angle -= angleAcc;
        rotate(-this.angle);

        for (let i = 0; i < this.num; i++) {
            let x = cos(i * this.step) * this.radius;
            let y = sin(i * this.step) * this.radius;

            line(x * 0.86, y * 0.86, x * 0.92, y * 0.92);
            ellipse(x * 0.9, y * 0.9, 4, 4);

            push();
            translate(x, y);
            rotate(this.angle);
            textSize(this.fontSize);
            noStroke();
            text(this.content[i], 0, 0);
            pop();
        }
        pop();
    }
}