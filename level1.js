class Level1{

  constructor(x,y,width,height){
  
     var options={restitution:0.2,
      isStatic:false,
      friction:0.5,
      density:0.5
   }


     this.body=Bodies.rectangle(x,y,width,height,options);
     this.width=width;
     this.height=height;
     World.add(world,this.body);
  }


  display(){
     var angle=this.body.angle;
     push();
     rectMode(CENTER);
     rotate(angle);
     translate(this.body.position.x,this.body.position.y);
     rect(0,0,this.width,this.height);
     pop();
  }
}