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

class Score{
  x;
  y;
  width;
  height;
  text;
  constructor(x,y,width,height,text) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.text = text;
    this.cavans = document.getElementById("myCanvas");
    this.ctx = this.cavans.getContext("2d");
  }
  drawScore() {
    this.ctx.clearRect(this.x, this.y, this.width, this.height); 
    this.ctx.font = "20px Arial";
    this.ctx.fillStyle = "white";
    this.ctx.fillText(this.text, this.x, this.y + this.height); 
  }
  
  updateScore() {
    this.ctx.clearRect(this.x, this.y, this.width, this.height); 
    const currentScore = parseInt(this.text.split(":")[1]);
    const newScore = currentScore + 1;
    this.text = "Score: " + newScore;
    this.drawScore();
  }
  
}
