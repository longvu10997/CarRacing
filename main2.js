const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

let lines = [];
function createLine() {
  let line = new Line(140, 10, 20, 110);
  lines.push(line);
}
setInterval(createLine, 1000);

function displayLine() {
  for (let i = 0; i < lines.length; i++) {
    lines[i].drawLine();
    lines[i].move();
  }
}
const car = new Car(105, 400, 70, 100);
document.addEventListener("keydown", (event) => {
  if (event.code === "ArrowLeft") {
    car.moveLeft();
  }
  if (event.code === "ArrowRight") {
    car.moveRight();
  }
});

let obstaclesArr = [];

function createObstacle() {
  let obstacle = new Obstacle(
    Math.random() * (canvas.width - 50),
    -100,
    50,
    90
  );
  obstaclesArr.push(obstacle);
}
setInterval(createObstacle, 2000);

let animationID;
function displayObstacle() {
  for (let i = 0; i < obstaclesArr.length; i++) {
    obstaclesArr[i].drawObstacle();
    obstaclesArr[i].moveObstacle();

    if (obstaclesArr[i].y > canvas.height) {
      obstaclesArr.splice(i, 1);
      score.updateScore();
    }
  }
}

const score = new Score(10, 10, 10, 10, "Score: 0");

function start() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  score.drawScore();
  displayLine();
  displayObstacle();
  car.drawCar();
  for (let i = 0; i < obstaclesArr.length; i++) {
    if (obstaclesArr[i].checkCollision(car)) {
      document.getElementById("gameOver").style.display = "block";
      cancelAnimationFrame(animationID);
      return;
    }
  }
  animationID = requestAnimationFrame(start);
}
start();
