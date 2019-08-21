function setup() {
    createCanvas(400, 400);
    angleMode(DEGREES);
}

function draw() {
    background(0);
    translate(200, 200);
    rotate(-90);

    let hr = hour();
    let mn = minute();
    let sc = second();

    strokeWeight(8);
    stroke(255, 100, 150);
    noFill();
    let secondAngle = map(sc, 0, 60, 0, 360);
    arc(0, 0, 300, 300, 0, secondAngle);

    push();
    rotate(secondAngle);
    stroke(255, 100, 150);
    line(0, 0, 100, 0);
    pop();

    stroke(255);
    point(0, 0);


    //  fill(255);
    //  noStroke();
    //  text(hr + ':' + mn + ':' + sc, 10, 200);


}