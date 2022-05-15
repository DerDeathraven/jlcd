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


    $(".footer").on("mousedown",e=>{
        state.mousedown = true
        state.oldMouseSide = state.frontside
        console.log("test")
    })
    $(document).on("mouseup",e=>{
        state.mousedown = false
        if(state.oldMouseSide !== state.frontside){
            state.oldMouseSide = state.frontside
            handleEvents(true)
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


}


$(document).ready(e=>{
    console.log("test")
    var time = new Date()
    $("#geburtstagSpan").text(time.getFullYear()-YEAR_OF_BIRTH)
})
