class Circle {
  constructor(x, y, radius, options) {
    this.radius = radius;
    this.body = Matter.Bodies.circle(x, y, this.radius, options);
    Matter.Composite.add(engine.world, this.body);
  }
  render() {
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(this.body.angle);
    circle(0, 0, this.radius * 2);
    pop();
  }
  renderDirVector() {
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(this.body.angle);
    line(0, 0, this.radius, 0);
    pop();
  }
}
