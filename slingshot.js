class Slingshot{
    constructor(body1,coordinate){
            var options = {
                bodyA:body1,
                pointB:coordinate,
                stiffness:0.04,
                length:10
            }
            this.sling =Constraint.create(options)
            World.add(world, this.sling)
    }
    display(){
        if(this.sling.bodyA){
            var startPoint= this.sling.bodyA.position;
            var endPoint = this.sling.pointB;
            strokeWeight(4);
            line(startPoint.x,startPoint.y,endPoint.x,endPoint.y)   
        }
    }
  fly(){
      this.sling.bodyA = null;
  }      
}
