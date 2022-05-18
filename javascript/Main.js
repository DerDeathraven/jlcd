const DEBUG = false
var camera, scene, renderer;

var scene2, renderer2;

var mouseX = 0, oldMouseX = 0;

var controls;


var lookAt = new THREE.Vector3(0, 0, 0);


var main

var secondMain

var sideCard

var gui
var settings = {}
    settings.rotate = false

var state = new StateMachine()

var media = window.innerWidth> 600

init();
animate(performance.now());


function init() {
    renderer2 = new THREE.CSS3DRenderer({alpha:true,antialias:true});
    
    renderer2.autoClearStencil = true;
    renderer2.setSize( window.innerWidth, window.innerHeight );
    renderer2.domElement.style.position = 'absolute';
    renderer2.domElement.style.transition = 'scale(2)';
    renderer2.domElement.classList.add("rendererClass")
    renderer2.domElement.style.top = 0;
    document.querySelector('#css').appendChild( renderer2.domElement );
    
   


    windowHalfX = window.innerWidth / 2;
    windowHalfY = window.innerHeight / 2;

    camera = new THREE.PerspectiveCamera(
        45, window.innerWidth / window.innerHeight, 1, 2000
    );
    

    
    camera.position.set( 0, 0, 500 );
    scene2 = new THREE.Scene();
    scene2.background = null
    main =  createMainPage("MainPage")
    secondMain =  createMainPage("BackPage")
    sideCard = generateSideCard()
    if(DEBUG){
        secondMain.rotation.y = 0
        main.rotation.y = Math.PI
    }else{
    secondMain.rotation.y = Math.PI
    secondMain.visible = false;
    }
    if(!media){
          main.position.z = -600
          secondMain.position.z = -600
          sideCard.position.z = -600
    }
    
   
    //var controls =  new THREE.OrbitControls(camera, renderer2.domElement);
  

    document.addEventListener( 'mousemove',onDocumentMouseMove)
    
    document.addEventListener( 'mouseup',mouseUp)
    renderer2.render( scene2, camera );
    initTween()
}

function onDocumentMouseMove( e) {
    mouseX = e.clientX
}

function mouseUp( e ) {
    
}

function animate(time) {
    
    renderer2.render( scene2, camera );
   
    if(state.rotate!=0)rotate(0.05)
    if(state.mousedown)rotateMouse()
    
    checkRotaion()
    
   TWEEN.update()
    
    
    
   
    
    
    requestAnimationFrame( animate );
}


function createMainPage(page){
    var element = document.createElement( 'div' );
    element.classList.add("mainPages")
    element.innerHTML = document.getElementById( page).innerHTML

        element.style.opacity = 0.999;

        var domObject = new THREE.CSS3DObject( element );
        scene2.add( domObject );
        return domObject;

}


function checkRotaion(){
    var mainBuff = Math.abs(main.rotation.y % (Math.PI * 2))
    
    if(mainBuff>Math.PI/2&&mainBuff<Math.PI*1.5){
        state.frontside = false
    }else{
        state.frontside = true
    }
    if(state.frontside){
        main.visible = true
        secondMain.visible =false
    }else{
        main.visible = false
        secondMain.visible =true
    }
}




function rotate(rad){

    switch(true){
        case state.rotate == 1:
            main.rotation.y -= rad
            secondMain.rotation.y -= rad
            break;
        case state.rotate == 2:
            main.rotation.y += rad
            secondMain.rotation.y += rad
            break;

    }

    var normalizedRotationMain =Math.abs( main.rotation.y % (Math.PI * 2))
    console.log(normalizedRotationMain)
    

    if(state.oldSide){
        if(normalizedRotationMain >= Math.PI){
            state.rotate = 0
        }
    }else{
        if(normalizedRotationMain <= 1){
            state.rotate = 0
        }
    }
    console.log(state.frontside)
}

function rotateMouse(){
    if(oldMouseX==mouseX)return
    
    

    if(oldMouseX<mouseX){
        var normalizedMouse = mouseX % (Math.PI * 2)/30
    }else{
        var normalizedMouse = -(mouseX % (Math.PI * 2))/30
    }
    
   
    
    main.rotation.y += normalizedMouse
    secondMain.rotation.y += normalizedMouse
    oldMouseX = mouseX
}

function keepRotating(){
    console.log(state.rotationAcceleration)
    speed = state.rotationAcceleration/20
    if(state.rotationAcceleration >0){
        main.rotation.y += speed
        secondMain.rotation.y += speed
        state.rotationAcceleration -= 0.1
    }else{
        main.rotation.y -= speed
        secondMain.rotation.y -= speed
        state.rotationAcceleration += 0.1
    }

    if(1>=Math.abs(state.rotationAcceleration))state.rotationAcceleration = 0

    
    
}
