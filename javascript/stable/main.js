const YEAR_OF_BIRTH = 2001;
function onLoad(){
    var time = new Date()
    $("#geburtstagSpan").text(time.getFullYear()-YEAR_OF_BIRTH)
}
onLoad()