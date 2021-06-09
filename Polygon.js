class Polygon {
    constructor(x,y) {
        var options = {
            restitution:0.8,
            friction:1.0,
            density:1.0
        }
        
        this.r = 30;
        this.body = Bodies.circle(x,y,this.r,options);
        this.image = loadImage("polygon.png");
        World.add(world,this.body);
    }

    display() {
        var radius = this.r
        var angle = this.body.angle;
        var img = this.image;
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(img,0,0,radius+50,radius+50);
        pop();

        // var radius = this.r;

        // push();
        // translate(this.body.position.x,this.body.position.y);
        // ellipseMode(RADIUS);
        // ellipse(0,0,radius,radius);
        // pop();
    }
}