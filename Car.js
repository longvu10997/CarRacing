class Car {
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
  drawCar() {
    let image = new Image();
    image.src = "/Image/PlayerCar.png";
    this.ctx.drawImage(image, this.x, this.y, this.width, this.height);
  }
  moveLeft() {
    this.ctx.clearRect(this.x, this.y, this.width, this.height);
    if (this.x >= 0) {
      this.x -= 10;
      this.drawCar();
    }
  }
  moveRight() {
    this.ctx.clearRect(this.x, this.y, this.width, this.height);
    if (this.x + this.width <= this.canvas.width) {
      this.x += 10;
      this.drawCar();
    }
  }
}
