class Stone {
    constructor(x, y) {
      var options = {
          'restitution':0,
          'friction':1,
          'density':1.2
      }
      this.body = Bodies.circle(x, y, 40, options);
      this.r = 40
      this.image = loadImage("Plucking mangoes/stone.png")
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      imageMode(CENTER);
      image(this.image, pos.x, pos.y, 70, 70);
      pop();
    }
  };
  