const YEAR_OF_BIRTH = 2001;
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
   
    
    ]
var projects = {
        2014:{
       "projects":[
            {
             name: '"Junior" Sys-Admin',
             github: "https://wp.schloss-rohlstorf.de/",
             githubSymbole: '<i class="fa-brands fa-fort-awesome-alt"></i>',
             content: "I grew up with macs so my understanding of them was pretty good. I noticed that the Sys-Admin struggled with managing them. There i saw the chance help out. So i did",
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
              name: " honorary award",
              github: "google.de",
              content: "For my duties as a Sys-Admin",
              githubSymbole:" ",
              picture: "/images/object_bg.jpg"
             },
             {
                name: "First batch chat",
                github: "https://github.com/DerDeathraven/Batchchat",
                content: "My buddy and i designed a chat program wich had Batch as backend",
                picture: "/images/old_batchchat.png",
                releatedSkills:[
                    "Bash/Batch",
                ]
                },
               
         ]
     },
     2018:{
        "projects":[
             {
              name: "Final batch chat",
              github: "https://github.com/DerDeathraven/Batchchat",
              content: "I wanted to test my new gained skills. So i updated the old chat with an updated UI",
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
              content: "School project: Less programming on my part and more managment and design ",
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
                content: "Working on robotic Sweepingmaschines. Working right along senior-devs and being integrated in to the team",
                githubSymbole:'<i class="fa-solid fa-link"></i>',
                picture: "/images/Termine_Header.jpg",
            },
            {
                name: "StreamPipe",
                github: "https://www.hako.com/en/",
                content: "Developing a full-fledged ROS-Bag analytic-suite. Marking Timestamps,Adding comments and exporting them as PDF. Built with Nodejs and Socket.io. Sadly not open source",
                githubSymbole:'<i class="fa-solid fa-link"></i>',
                picture: "/images/csm_Eingang-UNI-Studenten_CORP_Rene-Kube_IMG_6016_neu_97e9451734.jpg",
                releatedSkills:[
                    "NodeJS",
                    "JavaScript",
                    "<HTML/CSS>",
                    "Socket.io",
                    "JQuery"
                ]
            },
             {
              name: "Experimental Portfolio",
              github: "https://github.com/DerDeathraven/jlcd",
              content: "Using Three.js and CSS3D. This developed out of a weekend of learning 3D modeling inside of a browser.",
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
    var time = new Date()
    $("#geburtstagSpan").text(time.getFullYear()-YEAR_OF_BIRTH)
    timeline = new Timeline(projects,$(".timeline"),skills,$(".skillsList"))
    
}
onLoad()