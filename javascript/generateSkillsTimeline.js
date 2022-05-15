const START_OF_PROGRAMMING = 2011;

function generateMoreSkills(skill,startDate,endDate){

    var skills = [
        {
            "name":"<HTML/CSS>",
            "startDate":2011,
        },
        {
            "name":"Bash/Batch",
            "startDate":2014,
            

        }, 
        {
            "name": "Socket.io",
            "startDate":2020,
            
        }, 
        {
            "name":"Three.js",
            "startDate":2021,
            

        }, 
        
        {
            "name":"ROS",
            "startDate":2021,
        },
        
        
        
       
        
        ]

        skills.forEach(f=>{
            
            $(".moreSkillsContent").append( generateMain(f.name,f.startDate,f.endDate))
        })
   
}
function generateSkillsTimeline(skill,startDate,endDate) {
   
    var container = generateMain(skill,startDate,endDate)
    $(".skillsContent").append(container);
   
    

}
function generateMain(skill,startDate,endDate){
    var time = new Date
    if(endDate === undefined)endDate = time.getFullYear();

    var container = document.createElement( 'div' );
    var header = document.createElement( 'div' )
    var content = generateSkillContent(startDate,endDate);

    $(container).addClass("skillContainer");

    $(header).addClass("skillHeader");
    $(content).addClass("skillContent");

    $(header).text(skill)
    var yearContainer = document.createElement("div");
    var startReadout = generateYearReadout(startDate)
    var endReadout = generateYearReadout(endDate)
    if(startDate != START_OF_PROGRAMMING){
        $(yearContainer).append(startReadout)
    }
    if(time.getFullYear()!=endDate){
        $(yearContainer).append(endReadout)
    }
    
   $(yearContainer).addClass("yearContainer");

    var firstYear =  generateFirstYear()
    var lastYear = generateLastYear()
    $(yearContainer).append(firstYear).append(lastYear)

    $(container).append(header).append(content).append(yearContainer);

    positionReadouts(startReadout,endReadout,startDate,endDate)
   return container
}
function generateSkillContent(startDate,endDate) {
    var object = document.createElement("div")

    var leftBar = document.createElement("div")
    var middleBar = document.createElement("div")
    var rightBar = document.createElement("div")



    $(middleBar).before(generateYearReadout(startDate));
    $(middleBar).after(generateYearReadout(endDate));
    var time = new Date
    var currentYear = time.getFullYear()
    var max = currentYear - START_OF_PROGRAMMING

    var firstPart = ((startDate - START_OF_PROGRAMMING)/max)*100
    
    var endPart = ((currentYear - endDate)/max)*100
    var middlePart = ((endDate - startDate)/max)*100

    $(leftBar).css({
        width: `${firstPart}%`
        
    }).addClass("leftBar")
    $(middleBar).css({
        width:  `${middlePart}%`
    }).addClass("middleBar")
    $(rightBar).css({
        width: `${endPart}%`
    }).addClass("rightBar")

    $(object).append(leftBar).append(middleBar).append(rightBar);

    return object
}

function generateYearReadout(year) {
    var obj = document.createElement( 'div' );
    var barContainer = document.createElement( 'div' );
    var bar = document.createElement( 'div' );
    var barText = document.createElement( 'div' )

    $(obj).addClass("fullBar");
    $(bar).addClass("bar")
    $(barContainer).append(bar).addClass("barContainer");
    $(barText).text(year).addClass("barText");

    $(obj).append(barContainer).append(barText)

    

    return obj

}
function positionReadouts(startReadout,endReadout,startDate,endDate){

    var time = new Date
    var currentYear = time.getFullYear()
    var max = currentYear - START_OF_PROGRAMMING
    var firstPart = ((startDate - START_OF_PROGRAMMING)/max)
    var endPart = ((currentYear - endDate)/max)
    
    var readoutWith = (180 * firstPart)-9
    var secondReadout = (180 *endPart)+6
    
    
    
    $(startReadout).css({
        "left": `${readoutWith}px`,
        "position": "absolute"
        
    })
    $(endReadout).css({
        "left": `${secondReadout}px`,
        "position": "absolute"
        
    })

}

function generateFirstYear(){
   var obj =  generateYearReadout(START_OF_PROGRAMMING)

   $(obj).css("left", -10);
   return obj
}
function generateLastYear(){

    var time = new Date
    var now = time.getFullYear()
    var obj =  generateYearReadout(now)

   $(obj).css("right", -10);
   return obj
}