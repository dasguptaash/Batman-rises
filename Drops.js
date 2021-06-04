class Drops{
    constructor(x,y,r){
        var options = {
            restitution : 0.1,
            friction : 0.01,
            
        }
        this.r = 5;
        this.body = Bodies.circle(x,y,r,options);
        World.add(world,this.body);
    }

    updatePostion(){     
        if(this.body.position.y > height){
            Matter.Body.setPosition(this.body, {x:random(0,800), y:random(0,500)})
        }
    }
    

    display(){
        var pos = this.body.position;
        fill("blue")
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,this.r,this.r);
    }
}