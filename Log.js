class Log {
    constructor(x, y,height,width) {
      var options = {
          'isStatic':true,
          'restitution':0.8,
          'friction':4.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y,height,width,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("green");
      fill(255);
      rect(0, 0, this.width, this.height);
      pop();
    }
  };