$(() => {

    $(".sidenav-button")
      .mouseover(function() {
        $(this).find("div").show()
  
      })
      .mouseout(function() {
        console.log("hoverout")
  
        $(this).find("div").hide()
      });
  
  })
  