class Tree {
    constructor(x, y) {
      var options = {
          'isStatic':true,
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 1, 1, options);
      this.width = 1;
      this.height = 1;
      this.image = loadImage("Plucking mangoes/tree.png")
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      imageMode(CENTER);
      image(this.image, pos.x, pos.y, 800, 800)
      pop();
    }
  };
  