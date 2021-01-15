class Box{
    constructor(x,y){
        var options={
            restitution:0.8,
            density:20,
            friction:1.
        }
      this.x=x;
      this.y=y;
      this.width=50;
      this.height=50;
      this.body=Bodies.rectangle(x,y,50,50,options);
      World.add(world,this.body);
        
    }
    display()
    {
      var pos=this.body.position;
      var angle=this.body.angle;

      push ();
      translate(pos.x,pos.y);
      rotate(angle);     
      rectMode(CENTER);
      strokeWeight(3);
      stroke("black");
      fill("red");
      rect(0,0,50,50);
      pop();
    }
};
