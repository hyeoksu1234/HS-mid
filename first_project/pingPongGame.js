// 물리 시뮬레이션 및 렌더링을 위한 모듈들.
// 당연하지만 좌변 이름은 마음대로, 우변은 그대로.
let Engine = Matter.Engine,
  Bodies = Matter.Bodies,
  Composite = Matter.Composite;
// 물리 엔진 생성.
let engine;
// 튕기는 공 생성
let pingPongBall;
// 받아칠 막대기 생성
let bar;

function setup() {
  createCanvas(800, 600);
  engine = Engine.create();
  pingPongBall = new Circle(400, -15, 30, "blue", {
    frictionAir: 0,
    friction: 0,
    frictionSatatic: 1,
    inertia: Infinity,
    restitution: 1,
  });
  Composite.add(engine.world, pingPongBall.bodies);
}

function draw() {
  background("#F8F3FD");
  Engine.update(engine);
  noStroke();
  pingPongBall.render();
  console.log(pingPongBall);

  // 핑퐁볼이 바닥으로 떨어지면 다시 위에서 시작하게
  if (pingPongBall.getPositionY() >= 600 + 15) {
    pingPongBall = new Circle(400, -15, 30, "blue", {
      frictionAir: 0,
      friction: 0,
      frictionSatatic: 1,
      inertia: Infinity,
      restitution: 1,
    });
    Composite.add(engine.world, pingPongBall.bodies);
  }
  // 마우스 오버시 X축 이동하는 바 생성
}
function mouseOver() {
  bar = new Rect(mouseX, 500, 100, 15, "pink", { isStatic: false });
  Composite.add(engine.world, bar.bodies);
  bar.render();
  console.log(bar);
}

// function mouseOver() {
//   if (mouseOver() === ture) {
//     bar = new Rect(mouseX, 500, 100, 15, "pink", { isStatic: false });
//   } else if (mouseOver() === false) {
//     bar = new Rect(400, 500, 100, 15, "pink", { isStatic: true });
//   }
// }

// function mouseMoved() {
//   bar = new Rect(mouseX, 500, 100, 15, "pink", { isStatic: false });
// }
