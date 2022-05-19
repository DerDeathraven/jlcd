<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0 viewport-fit=cover">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="/css/routing/style.css">

    <script src="https://kit.fontawesome.com/f3c11e6ecc.js" crossorigin="anonymous"></script>
    <script
  src="https://code.jquery.com/jquery-3.6.0.min.js"
  integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
  crossorigin="anonymous" defer></script>
    <title>JLCD Routing</title>
</head>
<body>
    <div class="container">
        <div class="title">
            <div class="titleName">
                <span>J</span><span class="hidding jean">ean-</span>
                <span>L</span><span class="hidding luc">uc</span>
                <span>C</span><span class="hidding chrisoph">hristoph</span>
                <span>D</span><span class="hidding dittler">ittler</span>
                </div>
            <div class="titleText">Choose your Preference</div>
            <div class="titleLinks">
                <div class="titleLinksContent">
                    <a href="https://www.linkedin.com/in/jean-luc-dittler-b95064137/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
                    <a href="https://github.com/DerDeathraven" target="_blank"><i class="fa-brands fa-github-square"></i></a>
                    <a href="http://"><i class="fa-solid fa-file-pdf" target="_blank"></i></a></div>
                </div>
                
        </div>
        <div class="choseContent">
            <div class="left sides" onClick="window.location.assign('stable')">
                <div class="header">
                    <div class="headerText">Stable</div>
                </div>
                <div class="content">
                    <div class="contentText">
                        <span class="explainText">A more conventional website</span></br>
                        <span>but still completely without Templates</span>
                    </div>
                </div>
            </div>
            <div class="right sides" onClick="window.location.assign('experimental')">
                <div class="header">
                    <div class="headerText">Experimental</div>
                </div>
                <div class="content">
                    <span class="explainText">My Sandbox</span><br/>
                        <span class="explainTextAlert">the content could be blurred.<br/> If so, you can increase your browsers zoom to 200%</span>
                </div>
            </div>
        </div>
        
    </div>
    
</body>
</html>