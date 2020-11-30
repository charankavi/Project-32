class Block { 
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
    this.height = 50;
    this.body = Matter.Bodies.rectangle(this.x, this.y,this.width,this.height, options);
    this.Visiblity = 255;
    World.add(world,this.body);
   
   

  
    
    }
    
    display(){
        var pos = this.body.position;
        if(this.body.speed<7){
            push()
            translate(pos.x,pos.y)
            strokeWeight(1);
            rectMode(CENTER);
            fill(random(1,225),random(1,225),random(1,225));
            rect(0,0,this.width,this.height);
            pop()
            }
            else{
            World.remove(world,this.body);
            push();
            this.Visiblity = this.Visiblity - 5;
            tint(255,this.Visiblity)
            pop();
            }
        
    }
}