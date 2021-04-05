class Ground{

    constructor(){
        var ground_options={
            isStatic : true
          }
        
          this.ground = Bodies.rectangle(630,530,1400,20,ground_options)
          World.add(world,this.ground);
    }
    display(){
        noStroke();
        fill("gold");
        rectMode(CENTER);
        rect(this.ground.position.x,this.ground.position.y,1400,20);
    }
}