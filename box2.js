class BoxA{
  constructor(x, y, width, height) {
      var options = {
        'restitution':0.4,
          'friction':0.1,
         
      }
    this.visibility=255;
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      if(this.body.speed<3){
        push();
        //translate(this.body.position.x, this.body.position.y);
        var pos =this.body.position;
        rectMode(CENTER);
        fill("yellow");
        rect(pos.x, pos.y, this.width, this.height);
        
        pop();
      }
      else{
        World.remove(world,this.body);
        push();
        this.visibility=this.visibility-5
        tint(this.visibility,50)
        pop();
      }
    
    }
}
  