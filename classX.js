class LineWalker {
  constructor(x, y, distance, col) {
    this.x1 = x;
    this.y1 = y;
    this.x2 = this.x1 + distance;
    this.y2 = this.y1 + distance;

    this.MyDistance = distance;
    this.MyColor = color(col);

    this.age = 0;
  }
  newLife() {
    let newAge;
    newAge = this.age++;
    return newAge;
  }
  display() {
    stroke(this.MyColor);
    strokeWeight(2);
    line(this.x1, this.y1, this.x2, this.y2);

    this.x1 = this.x2;
    this.y1 = this.y2;
  }

  walkingDirection() {
    let nextPos = floor(random(4));

    if (nextPos == 0) {
      this.x2 = this.x1 + this.MyDistance;
    } else if (nextPos == 1) {
      this.x2 = this.x1 - this.MyDistance;
    } else if (nextPos == 2) {
      this.y2 = this.y1 + this.MyDistance;
    } else if (nextPos == 3) {
      this.y2 = this.y1 - this.MyDistance;
    }
  }

  keepInCanvas() {
    if (this.x2 < 0) {
      this.x2 = 0;
    } else if (this.x2 > width) {
      this.x2 = width;
    } else if (this.y2 < 0) {
      this.y2 = 0;
    } else if (this.y2 > height) {
      this.y2 = height;
    }
  }

  lifeExpectancy(deathAge) {
    let myCurrentAge = this.newLife();

    if (myCurrentAge > deathAge) {
      noLoop();
    }
  }
}
