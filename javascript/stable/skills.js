const START_OF_PROGRAMMING = 2011

class SkillList{
    /**
     * 
     * @param {JQueryElement} dom dom hook 
     * @param {Array<object>} skillList all skills as JSON
     */
    constructor(dom,skillList){
        this.dom = dom;
        this.skills = this.fillSkills(skillList);
        this.renderSkills()
    }
    /**
     * Transfers the list of skills to a array of Skill elements
     * @param {Array<object>} skillList 
     * @returns {Array<Skill>}
     */
    fillSkills(skillList){
        var buffArr = []
        skillList.forEach(y=>{
            buffArr.push(new Skill(y.name,y.startDate,y.endDate))
        })
        return buffArr
    }
    /**
     * renders every skill on the screen
     * @param {Array<String>} selection 
     */
    renderSkills(selection=[]){
        this.dom.html("")
        if(!(selection.length>0)){
            this.skills.forEach(s=>{
                this.dom.append(s.domElement)
            })
        }else{
            this.skills.forEach(s=>{
                if(selection.indexOf(s.name)!=-1){
                    this.dom.append(s.domElement)
                }
            })
        }
    }
}


class Skill {
    /**
     * 
     * @param {String} name Name of the skill
     * @param {String} startYear When did i start to learn the Skill start
     * @param {String} endYear Did in end? When?
     */
    constructor(name,startYear, endYear){
        var time = new Date
        this.name = name;
        this.startYear = startYear;
        this.endYear = endYear || time.getFullYear()
        this.domElement = this.createDomElement()
    }
    /**
     * Build a Div out of the information
     * @returns {HTMLDivElement} 
     */
    createDomElement(){
        var time = new Date

        var container = document.createElement( 'div' );
        var header = document.createElement( 'div' )
        var content = this.generateSkillContent();

        $(container).addClass("skillContainer");

        $(header).addClass("skillHeader");
        $(content).addClass("skillContent");

        $(header).text(this.name)
        var yearContainer = document.createElement("div");
        var startReadout = this.generateYearReadout(this.startYear)
        var endReadout = this.generateYearReadout(this.endYear)
        if(this.startYear> START_OF_PROGRAMMING ){
            $(yearContainer).append(startReadout)
        }
        if(time.getFullYear()-1>this.endYear  ){
            
            $(yearContainer).append(endReadout)
        }
        
    $(yearContainer).addClass("yearContainer");

        var firstYear =  this.generateFirstYear()
        var lastYear = this.generateLastYear()
        $(yearContainer).append(firstYear)
        if(this.startYear< time.getFullYear()-1){
            $(yearContainer).append(lastYear)
        }

        $(container).append(header).append(content).append(yearContainer);

        this.positionReadouts(startReadout,endReadout)
    return container
    }
    /**
     * Generate the Timeline section
     * @returns {HTMLDivElement}
     */
    generateSkillContent() {
        var object = document.createElement("div")
    
        var leftBar = document.createElement("div")
        var middleBar = document.createElement("div")
        var rightBar = document.createElement("div")
    
    
    
        $(middleBar).before(this.generateYearReadout(this.startYear));
        $(middleBar).after(this.generateYearReadout(this.endYear));
        var time = new Date
        var currentYear = time.getFullYear()
        var max = currentYear - START_OF_PROGRAMMING
    
        var firstPart = ((this.startYear - START_OF_PROGRAMMING)/max)*100
        
        var endPart = ((currentYear - this.endYear)/max)*100
        var middlePart = ((this.endYear - this.startYear)/max)*100
    
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
    /**
     * Generates the Year writing below the timeline
     * @param {String} year 
     * @returns {HTMLDivElement}
     */
    generateYearReadout(year) {
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
    /**
     * Places the Readouts below the right postions
     * 
     * @param {HTMLDivElement} startReadout the starting year of the
     * @param {HTMLDivElement} endReadout the ending year
     */
    positionReadouts(startReadout,endReadout){

        var time = new Date
        var currentYear = time.getFullYear()
        var max = currentYear - START_OF_PROGRAMMING
        var firstPart = ((this.startYear - START_OF_PROGRAMMING)/max)
        var endPart = ((currentYear - this.endYear)/max)
        
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
    /**
     * Generates the first Year and positions it
     * @returns {HTMLDivElement}
     */
    generateFirstYear(){
        var obj =  this.generateYearReadout(START_OF_PROGRAMMING)
     
        $(obj).css("left", -10);
        return obj
     }
     /**
      * Generates and positions the current year
      * @returns {HTMLDivElement}
      */
     generateLastYear(){

        var time = new Date
        var now = time.getFullYear()
        var obj =  this.generateYearReadout(now)
    
        $(obj).css("right", -10);
        return obj
    }
    
}