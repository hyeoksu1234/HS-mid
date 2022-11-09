let engine;
let mouseConstraint;

let boundaryObjs = [];
let matterObjs = [];

let colors = [
  "#e7007d",
  "#e72600",
  "#b26300",
  "#937300",
  "#6d7f00",
  "#008a39",
  "#008673",
];

let canvas;

function createBoundaries(thickness) {
  // boundaryObjs.push(
  //   new Rect(width * 0.5, 0, width, thickness * 2, { isStatic: true })
  // );
  boundaryObjs.push(
    new Rect(width * 0.5, height, width, thickness * 2, {
      restitution: 1,
      friction: 0,
      frictionAir: 0,
      frictionStatic: 0,
    })
  );
  boundaryObjs[0].body.isStatic = true;
  boundaryObjs.push(
    new Rect(0, height * 0.5, thickness * 2, height, { isStatic: true })
  );
  boundaryObjs.push(
    new Rect(width, height * 0.5, thickness * 2, height, { isStatic: true })
  );
}

function setup() {
  let dom = document.getElementById("sketch");
  canvas = createCanvas(
    dom.getBoundingClientRect().width,
    dom.getBoundingClientRect().height
  );
  canvas.parent("sketch");
  engine = Matter.Engine.create();
  let mouseOnP5Cavas = Matter.Mouse.create(canvas.elt);
  mouseOnP5Cavas.pixelRatio = pixelDensity();
  mouseConstraint = Matter.MouseConstraint.create(engine, {
    mouse: mouseOnP5Cavas,
    constraint: { stiffness: 0.2 },
  });
  Matter.Composite.add(engine.world, mouseConstraint);
  createBoundaries(80);
  matterObjs.push(
    new Circle(width * 0.5, 0, 50, {
      restitution: 1,
      friction: 0,
      frictionAir: 0,
      frictionStatic: 0,
    })
  );
  matterObjs.push(
    new Rect(width * 0.5, height * 0.8, 100, 20, {
      restitution: 1,
      friction: 0,
      frictionAir: 0,
      frictionStatic: 0,
      isStatic: true,
    })
  );
  console.log(boundaryObjs[0].body);
  console.log(matterObjs[0].body);
  console.log(matterObjs[1].body);
}
function keyPressed() {
  if (key == "a") {
    matterObjs.push(
      new Circle(width * 0.5, 0, 50, {
        restitution: 1,
        friction: 0,
        frictionAir: 0,
        frictionStatic: 0,
      })
    );
  }
}

function draw() {
  background("#ffffff");
  let tBody = matterObjs[1].body;
  let originY = tBody.position.y;
  let NewX = mouseX;
  Matter.Body.setPosition(tBody, { x: NewX, y: originY });
  Matter.Engine.update(engine);
  noStroke();
  matterObjs.forEach((obj, idx) => {
    if (mouseConstraint.body === obj.body) {
      fill("#00daf2");
    } else {
      fill(colors[idx % colors.length]);
    }
    obj.render();
  });
  noFill();
  stroke(0);
  matterObjs.forEach((obj) => obj.renderDirVector());

  noStroke();
  fill("#919191");
  boundaryObjs.forEach((obj) => obj.render());
}
