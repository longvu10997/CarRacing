class Obstacle {
  x;
  y;
  width;
  height;
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.canvas = document.getElementById("myCanvas");
    this.ctx = this.canvas.getContext("2d");
  }
  drawObstacle() {
    let image = new Image();
    image.src = "/Image/OtherCar.png";
    this.ctx.drawImage(image, this.x, this.y, this.width, this.height);
  }
  moveObstacle() {
    this.ctx.clearRect(this.x, this.y, this.width, this.height);
    this.y += 5;
    this.drawObstacle();
  }
  checkCollision(car) {
    const collisionMargin = 10;
    if (
      this.x < car.x + car.width - collisionMargin&&
      this.x + this.width - collisionMargin > car.x &&
      this.y < car.y + car.height - collisionMargin &&
      this.y + this.height - collisionMargin > car.y
    ) {
      return true;
    } else {
      return false;
    }
  }
}
