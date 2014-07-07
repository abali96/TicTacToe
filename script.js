$(document).ready(function () {

  // function toggle() {
  //   $(this).toggleClass("unfilled filled");
  // };

  $("#top-left").one("click", function () {
    $("<p>X</p>").appendTo('#top-left');
    $(this).toggleClass("unfilled filled");
  });

  $("#top-center").one("click", function () {
    $("<p>X</p>").appendTo('#top-center');
    $(this).toggleClass("unfilled filled");
  });

  $("#top-right").one("click", function () {
    $("<p>X</p>").appendTo('#top-right');
    $(this).toggleClass("unfilled filled");
  });


});