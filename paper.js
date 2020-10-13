
class paper {
 
    constructor(x, y, radius) {
      var options = {
          'restitution':0.4,
          'friction':1.5,
          'density':1.5,
          isStatic:false
      }
      this.body = Matter.Bodies.circle(x, y, radius , options);
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      fill("salmon");
      ellipse(0, 0,25,25);
      pop();
    }
  };
 