class TimelineState{
    constructor(){
        this.sliderPosition = 0;
        this.mousedown = false;
         
    }
}
var tState = new TimelineState()

function generateProject(name,bodeObj){
    var container = document.createElement("div")
    var head = document.createElement("div")
    var body = document.createElement("div")

    $(container).addClass("projectContainer");
    $(head).addClass("projectHead")
    $(body).addClass("projectBody");
    $(head).text(name)
    $(body).html(bodyHTML);

    
}



function generateTimeline(data =[{year:2016, projects:["Javascript tests"]}]){
    let container = document.createElement("div");
    let timeline = document.createElement("div");

    $(container).addClass("timelineContainer");
    $(timeline).addClass("timeline");

    $(container).append(timeline);
    $(".projects").append(container);
}




function generateDivider(year) {
    let dividerContainer = document.createElement("div");
    let dividerYear = document.createElement("div");
    let dividerHR = document.createElement("div");

    $(divider).text(year);

    $(dividerContainer).addClass("dividerContainer");
    $(dividerYear).addClass("dividerYear");
    $(dividerHR).addClass("dividerHR");
}

