class Stone { 
    constructor(x,y){
    
    var options = {
        isStatic: false,
        restitution : 0,
        friction : 1,
        density : 5.0
    }
    this.x = x;
    this.y = y;
    this.width = 40;
    this.height = 40;
    this.body = Matter.Bodies.rectangle(this.x, this.y,this.width,this.height, options);
    World.add(world,this.body);
   
   

  
    
    }
    
    display(){
        var pos = this.body.position;

        push()
        translate(pos.x,pos.y)
        rectMode(CENTER);
        fill("yellow");
        rect(0,0,this.width,this.height);
        pop()
    }
}