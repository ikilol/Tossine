class Bug {
    constructor() {
      this.x = 200;
      this.y = 200;
      this.size = 50;
    }
  
    display() {
    translate(-width/2, height/2);
    textSize(32);
    fill(255)
    noStroke();
    text(uno, 10, 10);
    }
  
    clicked() {
      if (dist(mouseX, mouseY, this.x, this.y) < this.size) {
        background(255, 0, 0);
      }
    }
  }