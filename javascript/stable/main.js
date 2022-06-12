
var timeline
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
    {
        "name":"Angular",
        "startDate":2021,
    }, 
   
    
    ]
var projects = {
        2014:{
       "projects":[
            {
             name: '"Junior" Sys-Admin',
             github: "https://wp.schloss-rohlstorf.de/",
             githubSymbole: '<i class="fa-brands fa-fort-awesome-alt"></i>',
             content: "Growing up with a web-developer mom lead to me being fluid with OSX at the age of 13. This I used to administrate the macbooks used by my school.",
             picture: "/images/Gut_Rohlstorf_Herrenhaus.jpg",
            releatedSkills:[
                "Bash/Batch",
                "Unix"
            ]
            
            },
            
               
        ]
    },
    2016:{
        "projects":[
             {
              name: " Honorary Award",
              github: "https://wp.schloss-rohlstorf.de/",
              content: "In recognition of my duties as a system administrator for all the OSX devices in our school. As well as being a role-model for other students",
              githubSymbole:" ",
              picture: "/images/eherenmarke.jpeg"
             },
             {
                name: "First batch chat",
                github: "https://github.com/DerDeathraven/Batchchat",
                content: "Developing a basic knowledge of programming in my early years and the need for a teacher free chat in school, ended in me and my friend building a chat with batch as a backend",
                picture: "/images/old_batchchat.png",
                releatedSkills:[
                    "Bash/Batch",
                ]
                },
               
         ]
     },
     2017:{
        "projects":[
             {
              name: "MSA",
              github: "https://www.basses-blatt.de/newsreader-aktuelles/esa-und-msa-in-rohlstorf.html",
              content: "Graduating as best in class with a GPA of 1.6",
              githubSymbole:'<i class="fa-solid fa-graduation-cap"></i>',
              picture: "/images/msa.jpg"
             },
               
         ]
     },
     2018:{
        "projects":[
             {
              name: "Final batch chat",
              github: "https://github.com/DerDeathraven/Batchchat",
              content: "Using my new developed skill in web-development, I wanted to redo my chat program. I used a HTML frontend to smooth up the user experience.",
              picture: "/images/Batchchat.png",
              releatedSkills:[
                "Bash/Batch",
                "JavaScript",
                "<HTML/CSS>",
            ]
             },
             {
                name: "Family business",
                github: "https://www.webspezi.com/de/",
                content: "Starting to work for my mom. Work such as: on-side customer service, setting up maschines, training with elderly",
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
              content: "A school project in which I took on me the role of managment and keeping the big picture. ",
              githubSymbole:'<i class="fa-solid fa-link"></i>',
              picture: "/images/bbz.png"
             },
             {
                name: " Abitur ",
                github: "http://www.bbz-se.de/verabschiedung-der-abiturientinnen/",
                content: "A technical school simlar to college. This school allowed to choose a main course out of various classes. This course was part of the Abitur exams. I chose environment development",
                githubSymbole:'<i class="fa-solid fa-graduation-cap"></i>',
                picture: "/images/BG-T18.jpg"
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
                content: "Working on robotic sweepingmaschines. Being treated as a full member and not a intern right alongside senior-devs",
                githubSymbole:'<i class="fa-solid fa-link"></i>',
                picture: "/images/Termine_Header.jpg",
            },
            {
                name: "StreamPipe",
                github: "https://www.hako.com/en/",
                content: "Developing a full-fledged ROS-Bag analytic-suite. Marking Timestamps, Adding comments and exporting them as PDF. Built with Nodejs and Socket.io.",
                githubSymbole:'<i class="fa-solid fa-lock"></i>',
                picture: "/images/csm_Eingang-UNI-Studenten_CORP_Rene-Kube_IMG_6016_neu_97e9451734.jpg",
                releatedSkills:[
                    "NodeJS",
                    "JavaScript",
                    "<HTML/CSS>",
                    "Socket.io",
                    "JQuery",
                    "ROS"
                ]
            },
            {
                name: "Threejs Smarthome",
                github: "https://github.com/DerDeathraven/threejs_smarthome_control",
                content: "This NodeJS Project uses MQTT and Socket.io to render the status of your smarthome devices in realtime and 3D",
                picture: "/images/screenshot_Smarthome.png",
                releatedSkills:[
                    "NodeJS",
                    "JavaScript",
                    "<HTML/CSS>",
                    "Socket.io",
                    "JQuery",
                ]
            },
             
            
                
         ]
     },
     "Portfolio":{
        "projects":[
            {
                name: "Stable Portfolio",
                github: "https://github.com/DerDeathraven/jlcd",
                content: "My spin on a modern website similar to what you can find on many websites",
                picture: "/images/schonwieder_ich.JPG",
                releatedSkills:[
                    "JavaScript",
                    "<HTML/CSS>",
                    "JQuery"
                ]
               },
               {
                name: "Angular Portfolio",
                github: "https://jlcd.de/de/stable/angular",
                content: "My Portfolio, rewritten in Angular. As a weekend project to teach myself the basics of Angular.",
                picture: "/images/Angular.jpg",
                githubSymbole: '<i class="fa-brands fa-angular"></i>',
                releatedSkills:[
                    "JavaScript",
                    "<HTML/CSS>",
                    "JQuery",
                    "Angular"
                ]
               },
               {
                name: "Experimental Portfolio",
                github: "https://github.com/DerDeathraven/jlcd",
                content: "Using Three.js and CSS3D. This developed out of a weekend of learning 3D programming inside of a browser.",
                picture: "/images/Bewerbungsfoto.jpg",
                releatedSkills:[
                    "JavaScript",
                    "<HTML/CSS>",
                    "JQuery",
                    "Three.js"
                ]
               },
             
                
         ]
     },
}
function onLoad(){
    

    timeline = new Timeline(projects,$(".timeline"),skills,$(".skillsList"))
    
}
onLoad()