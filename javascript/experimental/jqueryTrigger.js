const YEAR_OF_BIRTH = 2001

function generateSkills(){
    var skills = [
        
        {
            "name": "JavaScript",
            "startDate":2011,
            
        }, 
        {
            "name":"Unix",
            "startDate":2011,
            

        },
        {
            "name":"JQuery",
            "startDate":2014,
        },
        {
            "name":"NodeJS",
            "startDate":2019,
        },
        
       
        
        ]

        skills.forEach(f=>{
            
            generateSkillsTimeline(f.name,f.startDate,f.endDate)
        })

}
generateSkills()
handleEvents()



function handleEvents(reset = false){

    if(reset){
    $(document).off()
    $(document).find("*").off()
    }


    $(".rotationHelper").on("mousedown",e=>{
        state.mousedown = true
        state.oldMouseSide = state.frontside
    })
    $(document).on("mouseup",e=>{
        
        if(state.oldMouseSide !== state.frontside){
            state.oldMouseSide = state.frontside
            handleEvents(true)
        }
       // main.rotation.y = main.rotation.y % (Math.PI * 2)
      //  secondMain.rotation.y = secondMain.rotation.y % (Math.PI * 2)
        if(state.mousedown) {
            if(state.frontside){
                secondMain.rotation.y = Math.PI;
                rotationPos.y = main.rotation.y
            
            }else{
                main.rotation.y = Math.PI;
                rotationPos.y = secondMain.rotation.y
            }
            state.oldSide = state.frontside
            returnHome.start()
            state.mousedown = false
        }
    })
    
    
    $(".rotate-left").on("click",e=>{
        e.preventDefault()
        state.rotateMe(1)
        console.log("ping")
    })
    $(".rotate-right").on("click",e=>{
        e.preventDefault()
        state.rotateMe(2)
    })
    $(".moreSkills").on("click",e=>{
        state.floatIn ? easeOut.start():easeIn.start()
        state.floatIn ? moveMainBack.start():moveMain.start()
        moveMain.start()
        state.floatIn =  !state.floatIn
        
    })
    $(".projectScrollbar").on("input",e=>{
       var value =  $(".projectScrollbar").val() /100
       
       
       
       var width = parseInt($(".timelineContent").width()) 
       var realLength = width-$(".timeline").width()
       console.log($(".timelineContent").width())
       $(".timelineContent").css("left",`${-(value*realLength)}px`)
    })
    


}


$(document).ready(e=>{
    console.log("test")
    var time = new Date()
    $("#geburtstagSpan").text(time.getFullYear()-YEAR_OF_BIRTH)
    
})
