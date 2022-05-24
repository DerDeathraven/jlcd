class StateMachine{
    constructor(){
        this.frontside = true;
        this.oldSide = false;
        this.rotate = 0
        this.oldMouseSide = false
        this.mousedown = false


        this.floatIn = false;
        this.sideCard = false;
    }

    rotateMe(rotation){
        this.rotate = rotation
        this.oldSide = this.frontside
    }



}