class TimelineState{
    constructor(){
        this.sliderPosition = 0;
        this.mousedown = false;
         
    }
}

var timeline



/**
 * Basic idea:
 * timeline -> multiple years 
 * one year -> multiple projects
 * 
 * 
 */

class Timeline{
    constructor(yearObj,domFather){
        this.sate = new TimelineState()
        this.years = []
        this.domFather = domFather
        this.fillYears(yearObj)
        this.drawTimeline()
        
    }
    fillYears(yearObj){
        Object.keys(yearObj).forEach(y=>{
            var f = yearObj[y]
            this.years.push(new Year(y,f.projects))
        })
    }
    drawTimeline(){
        var container = document.createElement("div")
        $(container).addClass("timelineContent");
        this.years.forEach(y=>{
            $(container).append(y.domElement);
        })
        var width = this.calculateWidth()
        

        this.domFather.append(container)

    }
    calculateWidth(){
        var menge = 0
        this.years.forEach(y=>{
           menge += y.projects.length
        })
        menge =  menge*110

        return menge
    }

   
}



class Year{
    constructor(year,projects){
        this.year = year
        this.projects = this.generateProjects(projects)
        this.domElement = this.generateDomElement()
    }
    generateProjects(projects){
        var buffArr = [];
        projects.forEach(e=>{
            buffArr.push(new Project(e))
        })
        return buffArr
    }
    generateDomElement(){
        var length
        if(this.projects.length > 0){
            length = this.projects.length 
        }else{
            length = 1
        }

        var container = document.createElement("div")
        var yearText = document.createElement("div")
        var projectContainer = document.createElement("div")

        $(yearText).text(this.year).addClass("yearText");
        
        $(projectContainer).addClass("projectContainer")
        this.projects.forEach(p=>{
            $(projectContainer).append(p.domElement);
        })

        
       
        $(container).append(yearText).append(projectContainer).addClass("projectYear");
        return container

    }
}
class Project {
    constructor(p){
        this.name = p.name;
        this.github = p.github;
        this.githubSymbole = p.githubSymbole || '<i class="fa-brands fa-github-square"></i>'
        this.content = p.content;
        this.picture = p.picture;
        this.domElement = this.generateDomElement()
    }
    generateDomElement(){
        var container = document.createElement("div")
        var header = document.createElement("div")
        var headerPicture = document.createElement("img")
        var content =  this.generateDomContent()
        $(headerPicture).attr("src", this.picture).addClass("projectPicture");
        $(header).append(headerPicture).addClass("projectHeader");
        $(content).addClass("projectContent");

        $(container).addClass("project").addClass(this.name).append(header).append(content);

        return container
    }
    generateDomContent(){
        var content = document.createElement("div")
        var title = document.createElement("div")
        var contentText = document.createElement("div")
        var github = document.createElement("div")

        $(title).text(this.name).addClass("projectTitle");
        $(contentText).text(this.content).addClass("projectContentText");
        $(github).html(`<a href="${this.github}" target="_blank">${this.githubSymbole}</a>`).addClass("projectGithub")


        $(content).append(title).append(contentText).append(github);
        return content


    }

}
function generateTimeline(){
    var projects = {
        2014:{
       "projects":[
            {
             name: '"Junior" Sys-Admin',
             github: "https://wp.schloss-rohlstorf.de/",
             githubSymbole: '<i class="fa-brands fa-fort-awesome-alt"></i>',
             content: "Growing up using macs in my spare time, I developed a good understanding of the ins and outs of the system. I quickly realized my potential to help the Sys-Admin at my school manage their computers.",
             picture: "/images/Gut_Rohlstorf_Herrenhaus.jpg"
            },
            
               
        ]
    },
    2016:{
        "projects":[
             {
              name: " Honorary Award",
              github: "google.de",
              content: "For my duties as a Sys-Admin at my school I was given an honory award by the school's council.",
              githubSymbole:" ",
              picture: "/images/object_bg.jpg"
             },
             {
                name: "First batch chat",
                github: "https://github.com/DerDeathraven/Batchchat",
                content: "My buddy and i designed a chat program wich had Batch as backend",
                picture: "/images/old_batchchat.png"
                },
         ]
     },
     2018:{
        "projects":[
             {
              name: "Final batch chat",
              github: "https://github.com/DerDeathraven/Batchchat",
              content: "I wanted to test my new gained skills. So i updated the old chat with an updated UI",
              picture: "/images/Batchchat.png"
             },
             {
                name: "Family business",
                github: "https://www.webspezi.com/de/",
                content: "I started working for my mother, who is a WebDev and is working in the business since 1997. My duties included administration of online meetings, on-site deployment and zoom trainings ",
                githubSymbole: '<i class="fa-solid fa-link"></i>',
                picture: "/images/20_Jahre_webspezi.png"
             }
            
                
         ]
     },
    
     2021:{
        "projects":[
             {
              name: "Art Collection",
              github: "https://kunst.breede.sh/kunstwerke/0",
              content: "I did a school project together with 2 others. My work focused on managing of ideas and concepts ",
              githubSymbole:'<i class="fa-solid fa-link"></i>',
              picture: "/images/bbz.png"
             },
             {
                name: "IT-Security",
                github: "https://www.uni-luebeck.de/universitaet/universitaet.html",
                content: "Starting my studies and extending my knowledge of JS in the background",
                githubSymbole:'<i class="fa-solid fa-link"></i>',
                picture: "/images/csm_Eingang-UNI-Studenten_CORP_Rene-Kube_IMG_6016_neu_97e9451734.jpg"
            },
            
            
                
         ]
     },
     2022:{
        "projects":[
            {
                name: "Hako",
                github: "https://www.hako.com/en/",
                content: "Crossing the lines of webdevelopment and ROS. Adapting my knowledge of NodeJS to help analyze test reports. All this while being able to peek in to all sorts of Topics of intrest",
                githubSymbole:'<i class="fa-solid fa-briefcase"></i>',
                picture: "/images/Termine_Header.jpg"
            },
            {
                name: "StreamPipe",
                github: "https://www.hako.com/en/",
                content: "Developing a full-fledged ROS-Bag analytic-suite. Marking Timestamps,Adding comments and exporting them as PDF. Built with Nodejs and Socket.io. Sadly not open source",
                githubSymbole:'<i class="fa-solid fa-link"></i>',
                picture: "/images/csm_Eingang-UNI-Studenten_CORP_Rene-Kube_IMG_6016_neu_97e9451734.jpg"
            },
             {
              name: "This Website",
              github: "https://github.com/DerDeathraven/jlcd",
              content: "Using Three.js and CSS3D. This developed out of a weekend of learning 3D modeling inside of a browser.",
              picture: "/images/Bewerbungsfoto.jpg"
             },
            
                
         ]
     },
}
    timeline = new Timeline(projects,$(".timeline"))
 
 
     
 }
 generateTimeline()