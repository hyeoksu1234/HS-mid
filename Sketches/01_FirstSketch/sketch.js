let oneDGraph;

function setup() {
  createCanvas(400, 400);
  oneDGraph = new OneDGraph();
}

let noiseInput = 0;
let noiseAdder = 1;

function draw() {
  background(255);
  let noiseVal = height * noise(noiseInput);
  noStroke();
  fill("#ff0000");
  circle(width, noiseVal, 20);
  stroke(0);
  noFill();
  oneDGraph.update(noiseVal);
  oneDGraph.render();
  noiseAdder = map(mouseX, 0, width, 0, 1);
  noiseInput += noiseAdder;
}

class OneDGraph {
  constructor() {
    this.points = new Array(width);
    this.initPoints();
  }

  initPoints() {
    for (let idx = 0; idx < this.points.length; idx++) {
      this.points[idx] = height / 2.0;
    }
  }

  update(newVal) {
    this.points[this.points.length - 1] = newVal;
    for (let idx = 0; idx < this.points.length - 1; idx++) {
      this.points[idx] = this.points[idx + 1];
    }
  }

  render() {
    for (let idx = 1; idx < this.points.length; idx++) {
      line(idx - 1, this.points[idx - 1], idx, this.points[idx]);
    }
  }
}
