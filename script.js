$(document).ready(function () {

  // function toggle() {
  //   $(this).toggleClass("unfilled filled");
  // };

var i = 0
var xo = ""

  function xoxo() {
    if (i%2 == 0) {
    xo = "<p>X</p>"
    } else {
    xo = "<p>O</p>"
    }
    i += 1
  }

  function play(id) {
    $(id).one("click", function () {
      xoxo();
      $(xo).appendTo(id);
      $(this).toggleClass("unfilled filled");
    });
  }

play("#top-left")
play("#top-center")
play("#top-right")
play("#middle-left")
play("#middle-center")
play("#middle-right")
play("#bottom-left")
play("#bottom-center")
play("#bottom-right")

});