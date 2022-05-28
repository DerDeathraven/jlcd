const YEAR_OF_BIRTH = 2001;
$(".landingCardFooter").on("click", e=>{
    var el = $("#skills").get(0)
    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
})
$(".projectScrollbar").on("input",e=>{
  var value =  $(".projectScrollbar").val() /100
  
  
  
  var width = parseInt($(".timelineContent").width()) 
  var realLength = width-$(".timeline").width()
  $(".timelineContent").css("left",`${-(value*realLength)}px`)
})
$(document).ready(e=>{
  var time = new Date()
  if(window.innerWidth <= 750){
    $(".landingCard").addClass("extendHover")
  }
  $("#geburtstagSpan").text(time.getFullYear()-YEAR_OF_BIRTH)
})