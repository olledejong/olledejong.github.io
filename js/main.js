$(function(){
  $("#links > a").click(function(e) {
    $("#content > div").hide()
    const clickedId = $(e.target).attr("id")
    const genId = "#content-" + clickedId
    $(genId).css("display", "grid");
  })

  // social button clicks
  $("#footer-icons i").click(function(e) {
    switch($(e.target).attr("class")) {
      case "fa-brands fa-instagram":
        window.open('https://www.instagram.com/olledejong/')
        break;
      case "fa-brands fa-github":
        window.open('https://github.com/olledejong')
        break;
      case "fa-brands fa-linkedin-in":
        window.open('https://nl.linkedin.com/in/olledejong')
        break;
    }
  })
});
