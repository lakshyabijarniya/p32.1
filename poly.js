class Poly{
    constructor(x, y, radius) {
        var options = {
          'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.circle(x, y,radius,options);
      this.radius=radius;
        World.add(world, this.body);
    this.image=loadImage("hexa.png");
      }
      display(){
        push();
        //translate(this.body.position.x, this.body.position.y);
        var pos =this.body.position;
        imageMode(CENTER);
        fill("purple");
        ellipse(pos.x, pos.y,this.radius);
        image(this.image,this.body.position.x,this.body.position.y,60,50);
        pop();
      }
  }