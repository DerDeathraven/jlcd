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