class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':20,
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.visibility=255;
    World.add(world, this.body);
  }

  score(){
    if(this.visibility<0 && this.visibility>-105){
      score++
    }

  }
  display(){
    if(this.body.speed<3){

    
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(4);
    stroke("white");
    fill("lightblue");
    rect(0, 0, this.width, this.height);
    pop();
    }else{
      push();
      this.visibility=this.visibility-5
      pop();
    }
  }

}