<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JLCD Portfolio</title>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    <script src="https://kit.fontawesome.com/f3c11e6ecc.js" crossorigin="anonymous"></script>


    <link rel="stylesheet" href="/css/style.css" >

    <script src="https://threejs.org/build/three.min.js" defer></script>
    <script src="https://threejs.org/examples/js/controls/OrbitControls.js" defer></script>
    <script src="https://threejs.org/examples/js/renderers/CSS3DRenderer.js" defer></script>
    <script src="/javascript/lib/tween.js" defer></script>
    <script src="/javascript/lib/three-interaction.js" defer></script>
    <script
    src="https://code.jquery.com/jquery-3.6.0.min.js"
    integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
    crossorigin="anonymous" defer></script>


    <script src="/javascript/generateSkillsTimeline.js" defer></script>
    <script src="/javascript/stateMachine.js" defer></script>
    <script src="/javascript/sidecard.js" defer></script>
    <script src="/javascript/projectTimeline.js" defer></script>
    <script src="/javascript/Main.js" defer></script>

    <script src="/javascript/jqueryTrigger.js" defer></script>



</head>


<body scroll="no" style="overflow: hidden">
    
<div id="css"></div>
<div id="webgl"></div>


<div id="MainPage" hidden>
<div class="Container">
        <div class="NavBar">
            <div class="name">
                Jean-Luc Christoph Dittler
            </div>
            <div class="icons">
                <a href="https://www.linkedin.com/in/jean-luc-dittler-b95064137/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
                <a href="https://github.com/DerDeathraven" target="_blank"><i class="fa-brands fa-github-square"></i></a>
                <a href="http://"><i class="fa-solid fa-file-pdf" target="_blank"></i></a>
            </div>
        </div>
        
        <div class="content">
            <div class="aboutMe">
                <div class="aboutMeOben">
                    <div class="picture">
                        <img src="/images/Profbild1.jpg" alt="Profilbild">
                    </div>
                    <div class="aboutMeText ">
                       <ul class="fa-ul">
                           <li class="aboutMeListItem" ><span class="fa-li"><i class="fa-solid fa-cake-candles"></i></span><span id="geburtstagSpan"></span></li>
                           <li class="aboutMeListItem" ><span class="fa-li"><i class="fa-solid fa-graduation-cap"></i></span>Abitur</li>
                           <li class="aboutMeListItem" ><span class="fa-li"><i class="fa-solid fa-school"></i></span>UzL</li>
                           <li class="aboutMeListItem" ><span class="fa-li"><i class="fa-solid fa-book-open-reader"></i></span>IT-Sicherheit</li>
                           <li class="aboutMeListItem" ><span class="fa-li"><i class="fa-brands fa-node-js"></i></span>Fullstack</li>
                           <li class="aboutMeListItem" ><span class="fa-li"><i class="fa-solid fa-map-location-dot"></i></span>Geesthacht</li>
                       </ul>
                    </div>
                </div>
               
            </div>
            <div class="skills">
                <div class="skillsFull">
                    <div class="skillsText">
                        Skills 
                    </div>
                    <div class="skillsContent">
                        
                    </div>
                </div>
                <div class="moreSkills">
                    <div class="moreSkillsText">
                        <i class="fa-solid fa-angles-right"></i>
                        More
                    </div>
                </div>
            </div>
        </div>
        <div class="footer">
            <div class="rotationHelperIcon">
                <i class="fa-solid fa-angles-left rotate-left"></i>
            </div>
            <div class="rotationHelper">
                <div class="rotationHelperText">
                    Hold To Rotate
                </div>
            </div>
            <div class="rotationHelperIcon floatRight">
                
                <i class="fa-solid fa-angles-right rotate-right"></i>
            </div>
        </div>
    </div>
    
</div>
<div id="BackPage" hidden>
    <div class="Container">
        <div class="NavBar">
            <div class="name">
                Jean-Luc Christoph Dittler
            </div>
            <div class="icons">
                <a href="https://www.linkedin.com/in/jean-luc-dittler-b95064137/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
                <a href="https://github.com/DerDeathraven" target="_blank"><i class="fa-brands fa-github-square"></i></a>
                <a href="http://"><i class="fa-solid fa-file-pdf" target="_blank"></i></a>
            </div>
        </div>
        
        <div class="content">
           <div class="projects">
               <div class="timeline">

               </div>
               <input type="range" name="scrollbar" class="projectScrollbar" min="0" max="100" value="0">
           </div>
           
        </div>
        <div class="footer">
            <div class="rotationHelperIcon">
                <i class="fa-solid fa-angles-left rotate-left"></i>
            </div>
            <div class="rotationHelper">
                <div class="rotationHelperText">
                    Hold To Rotate
                </div>
            </div>
            <div class="rotationHelperIcon floatRight">
                
                <i class="fa-solid fa-angles-right rotate-right"></i>
            </div>
        </div>
    </div>

    
</div>
<div id="sideCard" hidden>
    <div class="Container">
        <div class="NavBar">
            <div class="name">
                More Skills
            </div>
           
        </div>
        
        <div class="content">
            <div class="skills">
                <div class="skillsFull">

                    <div class="moreSkillsContent">

                    </div>
                </div>
                
             </div>
        </div>
        
</div>
</body>
</html>