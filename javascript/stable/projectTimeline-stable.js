
var timeline



class Timeline{
    /**
     * Creates and manages the Timeline
     * 
     * @param {Object} yearObj JSON of the Years
     * @param {JqueryObject} domFather The dom hook
     * @param {Array<Object>} skillsList propertys to patch trough the skillmanager
     * @param {JqueryObject} skillDom the skill hook
     */
    constructor(yearObj,domFather,skillsList,skillDom){
        this.years = []
        this.domFather = domFather
        this.skills = new SkillList(skillDom,skillsList)
        this.fillYears(yearObj)
        this.drawTimeline()
        
        /**
         * Click event handler to rerender the skills
         */
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
                me.skills.dom.get(0).scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                    inline: "nearest"
                  })
            }
        })
        
    }

    /**
     * generate Years from the given JSON
     * @param {*} yearObj 
     */
    fillYears(yearObj){
        Object.keys(yearObj).forEach(y=>{
            var f = yearObj[y]
            this.years.push(new Year(y,f.projects))
        })
    }
    /**
     * fill the Timeline with the years
     */
    drawTimeline(){
        var container = document.createElement("div")
        $(container).addClass("timelineContent");
        this.years.forEach(y=>{
            $(container).append(y.domElement);
        })
        

        this.domFather.append(container)

    }

   
}



class Year{
    /**
     * 
     * @param {*} year the year or text that appears on the top
     * @param {Array<object>} projects all projects that the year should contain
     */
    constructor(year,projects){
        this.year = year
        this.projects = this.generateProjects(projects)
        this.domElement = this.generateDomElement()
    }

    /**
     * Generates the Projects from the given JSON
     * @param {Array<object>} projects 
     * @returns {Array<Project>} 
     */
    generateProjects(projects){
        var buffArr = [];
        projects.forEach(e=>{
            buffArr.push(new Project(e))
        })
        return buffArr
    }
    /**
     * Generates a div containing all the projects
     * @returns {HTMLDivElement}
     */
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
    /**
     * Generates a new project which contains the specified informations
     * @param {Object} p JSON of the project
     */
    constructor(p){
        this.name = p.name;
        this.github = p.github; //can be any link
        this.githubSymbole = p.githubSymbole || '<i class="fa-brands fa-github-square"></i>' //the fontawesome icon at the bottom
        this.content = p.content; //Text content
        this.picture = p.picture;
        this.releatedSkills = p.releatedSkills || [] //Skill that were used in this project
        this.domElement = this.generateDomElement() // the div of this element
    }

    /**
     * Generates a new element that contains this project
     * @returns {HTMLDivElement}
     */
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

    /**
     * To seperate the Content from the Header
     * @returns {HTMLDivElement}
     */
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
