class Poly {
  constructor(x,y,r)
	{
		var options = { 
			density: 1, 
			frictionAir: 0.3
		};
		this.x=x;
		this.y=y;
		this.r=r;
		this.image=loadImage("polygon.png");
		this.body=Bodies.circle(this.x, this.y, (this.r)/2, options);
		World.add(world, this.body);

	}
	
	display()
	{
			
			var polyPos=this.body.position;		
			push()
			translate(polyPos.x, polyPos.y-100);
			rectMode(CENTER)
			fill(255,0,255)
			imageMode(CENTER);
			image(this.image, 0,0,this.r+150, this.r)
			pop()
			
	}
}
