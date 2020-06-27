class Paper{
    constructor(x,y){
        var options = {
          isStatic : false,
          restitution:0.3,
          friction:0.5,
          density:1.2

        }
    }

    display(){
      Matter.Bodies.circle(x,y,radius,options)
    }

    

    

}