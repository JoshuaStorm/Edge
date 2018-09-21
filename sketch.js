class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

const TOP = 0;
const LEFT = 1;
const BOTTOM = 2;
const RIGHT = 3;

class Square {
    constructor(topLeft, sideLength) {
        this.topLeft = topLeft;
        this.sideLength = sideLength;
    }

    calculateRandomPoint() {
        var side = Math.floor(Math.random() * 4);
        var x = 0;
        var y = 0;
        switch (side) {
            case TOP:
                x = this.topLeft.x + Math.floor(Math.random() * this.sideLength);
                y = this.topLeft.y;
                break;
            case LEFT:
                x = this.topLeft.x;
                y = this.topLeft.y + Math.floor(Math.random() * this.sideLength);
                break;
            case BOTTOM:
                x = this.topLeft.x + Math.floor(Math.random() * this.sideLength);
                y = this.topLeft.y + this.sideLength;
                break;
            case RIGHT:
                console.log("RIGHT");
                x = this.topLeft.x + this.sideLength;
                y = this.topLeft.y + Math.floor(Math.random() * this.sideLength);
                break;
        }
        return new Point(x, y);
    }
}

function drawSquare(sqr, iterations) {
    stroke('rgba(199,199,199,0.5)');
    for (var i = 0; i < iterations; i++) {
        var p1 = sqr.calculateRandomPoint();
        var p2 = sqr.calculateRandomPoint();

        line(p1.x, p1.y, p2.x, p2.y);
    }
}

function drawPointFromTo(sqr1, sqr2) {
    stroke('rgba(199,10,10,0.23)');
    var p1 = sqr1.calculateRandomPoint();
    var p2 = sqr2.calculateRandomPoint();

    line(p1.x, p1.y, p2.x, p2.y);

}

function setup() {
    createCanvas(displayWidth, displayHeight);
    background(232);
    // noFill();
    LEFT_X = displayWidth / 4;
    CENTER_Y = displayHeight / 4;
    BUFFER = displayWidth / 16;
    SIZE = displayWidth / 4;
    ITERATIONS = 400;

    var point1 = new Point(BUFFER, CENTER_Y);
    var sqr1 = new Square(point1, SIZE);
    drawSquare(sqr1, ITERATIONS);
    var point2 = new Point(SIZE + 2*BUFFER, CENTER_Y);
    var sqr2 = new Square(point2, SIZE);
    drawSquare(sqr2, ITERATIONS);
    var point3 = new Point(2*SIZE + 3*BUFFER, CENTER_Y);
    var sqr3 = new Square(point3, SIZE);

    drawSquare(sqr3, ITERATIONS);

    drawPointFromTo(sqr1, sqr2);
    drawPointFromTo(sqr1, sqr3);
    drawPointFromTo(sqr2, sqr3);
    drawPointFromTo(sqr3, sqr2);
    drawPointFromTo(sqr3, sqr3);
    drawPointFromTo(sqr3, sqr3);
    drawPointFromTo(sqr3, sqr3);
    drawPointFromTo(sqr3, sqr3);
}


function draw() {
    // clear();
}
