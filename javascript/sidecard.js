var sideCardPosition =  window.innerWidth> 600?{x:550,y:0}:{x:0,y:-700}
var easeInPosition =  window.innerWidth> 600? {x:280,y:0}:{x:0,y:-200}
var easeOutPosition =  window.innerWidth> 600?{x:550,y:0}:{x:0,y:-700}

var mainPosition = {x:0,y:0}
var moveMainPosition = window.innerWidth> 600?{x:0,y:-50}:{x:100,y:0}
var moveMainBack = {x:0,y:0}
var  easeIn
var  easeOut
var moveMain
var moveMainBack
var rotationPos = {x:0,y:0}
var returnHome

function generateSideCard(){
        generateMoreSkills()

    var element = document.createElement( 'div' );
    
        element.innerHTML = document.getElementById( "sideCard").innerHTML
        element.classList.add("sidecard")
        element.style.opacity = 0.999;

        var domObject = new THREE.CSS3DObject( element );

        
         domObject.position.x = sideCardPosition.x
         domObject.position.y = sideCardPosition.y
        
        

        scene2.add( domObject );
        
        return domObject;
   

   
}
function initTween(){
    
       
    easeIn = new TWEEN.Tween(sideCardPosition).to(easeInPosition,1000)
    easeIn.easing(TWEEN.Easing.Exponential.InOut)
    easeIn.onUpdate(e=>{
        sideCard.position.x = sideCardPosition.x
        sideCard.position.y = sideCardPosition.y
    })

    easeOut = new TWEEN.Tween(sideCardPosition).to(easeOutPosition,1000)
    easeOut.easing(TWEEN.Easing.Exponential.InOut)
    easeOut.onUpdate(e=>{
        sideCard.position.x = sideCardPosition.x
        sideCard.position.y = sideCardPosition.y
    })

    moveMain = new TWEEN.Tween(mainPosition).to(moveMainPosition,1000)
    moveMain.onUpdate(e=>{
        main.position.x = mainPosition.y
        secondMain.position.x = mainPosition.y
        main.position.y = mainPosition.x
        secondMain.position.y = mainPosition.x
    })
    moveMain.easing(TWEEN.Easing.Exponential.InOut)

    moveMainBack = new TWEEN.Tween(mainPosition).to(moveMainBack,1000)
    moveMainBack.onUpdate(e=>{
        main.position.x = mainPosition.y
        secondMain.position.x = mainPosition.y
        main.position.y = mainPosition.x
        secondMain.position.y = mainPosition.x
    })
    moveMainBack.easing(TWEEN.Easing.Exponential.InOut)

    returnHome = new TWEEN.Tween(rotationPos).to({x:0,y:0},500)
    returnHome.onUpdate(e=>{
       
            if(state.oldSide){
            main.rotation.y = rotationPos.y
            }else{
            secondMain.rotation.y = rotationPos.y 
            }
        
    }).onComplete(e=>{
        if(state.oldSide){
            main.rotation.y = 0
            secondMain.rotation.y = Math.PI
            }else{
            secondMain.rotation.y = 0
            main.rotation.y = Math.PI
            }
    })
    returnHome.easing(TWEEN.Easing.Exponential.Out)
}