$(document).ready(function () {

  var xo = "<p>O</p>";
  var i = 0;

  function xoxo() {
    if (i % 2 == 0) {
      xo = "<p style='color: white;'>X</p>";
      $("#help-text").text("O's turn");
    } else {
      xo = "<p style='color: white;'>O</p>"
      $("#help-text").text("X's turn");
    }
    console.log(i);
    i++

  }

  function win() {
    victory = true;
    if ( $(".left").text() === "XXX" || $(".right").text()  === "XXX" ||  $(".center").text() === "XXX") {
      $("#help-text").text("X wins!");
      victory = true;
    } else if ($(".bottom").text() === "XXX" || $(".middle").text() === "XXX" || $(".top").text() === "XXX") {
      $("#help-text").text("X wins!")
    } else if ($(".left").text() === "OOO" || $(".right").text()  === "OOO" ||  $(".center").text() === "OOO") {
      $("#help-text").text("O wins!")
    } else if ($(".bottom").text() === "OOO" || $(".middle").text() === "OOO" || $(".top").text() === "OOO") {
      $("#help-text").text("O wins!")
    } else if ( $("#top-left > p").text() === "X" && $("#bottom-right > p").text() === "X" && $("#middle-center > p").text() === "X" ){
      $("#help-text").text("X wins!")
    } else if ( $("#top-left > p").text() === "O" && $("#bottom-right > p").text() === "O" && $("#middle-center > p").text() === "O" ){
      $("#help-text").text("O wins!")
    } else if ( $("#bottom-left > p").text() === "X" && $("#top-right > p").text() === "X" && $("#middle-center > p").text() === "X" ){
      $("#help-text").text("X wins!")
    } else if ( $("#bottom-left > p").text() === "O" && $("#top-right > p").text() === "O" && $("#middle-center > p").text() === "O" ){
      $("#help-text").text("O wins!")
    } else {
      victory = false;
    }
  }

  function play(id) {
    $(id).on("click", function () {
      if ($(id).find("p").text() === "") {
        xoxo();
        $(xo).appendTo(id);
      } else {
        $(id).off();
      }
      console.log(xo);
      win();
      new_game();
      if (victory) {
        $("td").off("click");
      }
    });
  }

  function new_game() {
    if (victory == false) {
      console.log("Keep playing");
    }
  }

  function restart() {
    i = 0;
    $("p").empty().remove();
    xo = "<p style='color: white;'>Begin!</p>";
    $("#help-text").text("Begin!");
  }

  play("#top-left");
  play("#top-center");
  play("#top-right");
  play("#middle-left");
  play("#middle-center");
  play("#middle-right");
  play("#bottom-left");
  play("#bottom-center");
  play("#bottom-right");


  $('button').click(function() {
    restart();
  });
});