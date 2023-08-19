class Line {
  x;
  y;
  width;
  height;

  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.cavans = document.getElementById("myCanvas");
    this.ctx = this.cavans.getContext("2d");
  }
  drawLine() {
    let image = new Image();
    image.src = "/Image/Line.png";
    this.ctx.drawImage(image, this.x, this.y, this.width, this.height);
  }

  move() {
    this.ctx.clearRect(this.x, this.y, this.width, this.height);
    this.y += 3;
    this.drawLine();
  }
}
