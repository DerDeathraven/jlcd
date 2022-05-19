$(".landingCardFooter").on("click", e=>{
    var el = $("#skills").get(0)
    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
})