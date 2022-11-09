class Rect {
  constructor(x, y, width, height, options) {
    this.width = width;
    this.height = height;
    this.radius = [0, 0, 0, 0];
    if (options?.chamfer?.hasOwnProperty("radius")) {
      if (typeof options.chamfer.radius === "number") {
        this.radius[0] = options.chamfer.radius;
        this.radius[1] = options.chamfer.radius;
        this.radius[2] = options.chamfer.radius;
        this.radius[3] = options.chamfer.radius;
      } else {
        console.log("obj");
        this.radius = options.chamfer.radius;
      }
    }
    this.body = Matter.Bodies.rectangle(x, y, this.width, this.height, options);
    Matter.Composite.add(engine.world, this.body);
  }
  render() {
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(this.body.angle);
    // rectMode(CENTER)를 안쓰고 중앙기준으로 직사각형 그리기.
    rect(
      -this.width * 0.5,
      -this.height * 0.5,
      this.width,
      this.height,
      this.radius[0],
      this.radius[1],
      this.radius[2],
      this.radius[3]
    );
    pop();
  }
  renderDirVector() {
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(this.body.angle);
    line(0, 0, this.width * 0.5, 0);
    pop();
  }
}
