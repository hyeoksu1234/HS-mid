// matter의 body 속성중에 restitution이 튕기는 속성인듯해서 시도해봤지만 잘 안됨
// restitution 값이 0이면 디폴트, 1에 가까울수록 튕기는거 같은데 사용법을 정확히 모르겠음

class Circle {
  constructor(x, y, d, c, opt) {
    this.x = x;
    this.y = y;
    this.d = d;
    this.c = c;
    this.bodies = Bodies.circle(x, y, this.d * 0.5, opt);
  }

  render() {
    push();
    translate(this.bodies.position.x, this.bodies.position.y);
    fill(this.c);
    circle(0, 0, this.d);
    // let positionY = this.bodies.position.y;
    pop();
  }
  // Y축 좌표값 가져오기
  getPositionY() {
    return this.bodies.position.y;
  }
}
