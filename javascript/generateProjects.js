var projects = [
    {
        "name": "Batch Chat",
        "pictureSrc":"/images/Batchchat.png",
        "stack":[
            '<i class="fa-brands fa-windows"></i>',
            '<i class="fa-brands fa-js-square"></i>'
        ],
        "moreInfos":"One of my first projects. It used the shared filesystem of my School"
    },
    {
        "name": "StreamPipe",
        "pictureSrc":"/images/Profbild1.jpg",
        "stack":[
            '<i class="fa-solid fa-robot"></i>',
            '<i class="fa-brands fa-node"></i>',
            '<object class="svgClass" type="image/svg+xml" data="/images/socketio-icon.svg"></object>'
        ],
        "moreInfos":"Sadly not Open Source. this Project is used for rapid debuging and report creation of ROS-Bags"
    },
    {
        "name": "Portfolio",
        "pictureSrc":"/images/Portfolio.png",
        "stack":[
            '<i class="fa-brands fa-html5"></i>',
            '<i class="fa-brands fa-css3-alt"></i>',
            '<i class="fa-brands fa-js-square"></i>',
            
        ],
        "moreInfos":"This site is my sandbox. My latest sandcastle is a CSS3D implementation"
    },
];

projects.forEach(e=>{
    console.log(e)
    $(".projects").append(generateGithubProject(e))
})


function generateGithubProject(project){
    var container = document.createElement( 'div' );
    var header = document.createElement( 'div' );
    var name = document.createElement( 'div' );
    var content = createProjectContent(project)

    $(container).addClass("project");
    $(header).addClass("projectHeader")
    $(name).addClass("projectName").text(project.name)
    $(content).addClass("projectContent");

    $(header).append(createProjectHeader(project));

    $(container).append(header).append(name).append(content);

    return container;

}

function createProjectHeader(project) {
    var picture = document.createElement( 'img' )
    
    $(picture).attr("src", project.pictureSrc).addClass("projectPicture");

    return picture;
}
function createProjectContent(project) {
    var container = document.createElement( 'div')
    var links = document.createElement( 'div' )
    var rechts = document.createElement( 'div')

    project.stack.forEach(f=>{
        
        $(links).append(f);
    })
    $(rechts).text(project.moreInfos);


    $(links).addClass("projectLeft");
    $(rechts).addClass("projectRight");

    $(container).append(links).append(rechts);

    return container;

}