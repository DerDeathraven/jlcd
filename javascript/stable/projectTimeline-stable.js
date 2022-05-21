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
    constructor(yearObj,domFather,skillsList,skillDom){
        this.sate = new TimelineState()
        this.years = []
        this.domFather = domFather
        this.skills = new SkillList(skillDom,skillsList)
        this.fillYears(yearObj)
        this.drawTimeline()
        var me = this
        $(".project").on("click",(e)=>{
            if($(e.currentTarget).hasClass("active")){
                $(".project").removeClass("active")
                me.skills.renderSkills()
            }else{
                $(".project").removeClass("active")
                $(e.currentTarget).addClass("active")
                var name = $(e.currentTarget).find(".projectTitle").text()
                var skills = []
                this.years.forEach(y=>{
                    y.projects.forEach(p=>{
                        if(p.name == name){
                            skills = p.releatedSkills
                        }
                    })
                })
                me.skills.renderSkills(skills)
            }
        })
        
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
        this.releatedSkills = p.releatedSkills || []
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
        if(this.releatedSkills.length>0){
            $(container).addClass("hasSkills")
        }
        $(container).addClass("project").append(header).append(content);

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
