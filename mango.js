class Mango {
    constructor(x, y) {
      var options = {
          'isStatic':true,
          'restitution':0,
          'friction':1,
      }
      this.body = Bodies.circle(x, y, 45,  options);
      this.r = 45;
      this.image = loadImage("Plucking mangoes/mango.png")
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      rotate(angle);
      imageMode(CENTER);
      image(this.image, pos.x, pos.y, 50, 50);
      pop();
    }
  };
  