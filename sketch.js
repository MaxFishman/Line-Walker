let randomWalkers = [];
let colorPalette = [
  "blue",
  "red",
  "green",
  "yellow",
  "orange",
  "purple",
  "pink",
  "white",
  "grey",
  "brown",
];

function setup() {
  createCanvas(400, 400);
  background("black");

  for (i = 0; i < 10; i++) {
    randomWalkers.push(
      new LineWalker(width / 2, height / 2, random(5, 10), colorPalette[i])
    );
  }
}

function draw() {
  for (i = 0; i < 10; i++) {
    randomWalkers[i].newLife();
    randomWalkers[i].display();
    randomWalkers[i].walkingDirection();
    randomWalkers[i].keepInCanvas();
    randomWalkers[i].lifeExpectancy(100);
  }
}

// Update canvas size when the window is resized
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
