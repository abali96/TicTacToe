$(document).ready(function () {

(startGame = function() {

  var i = 0
  var xo = 0
  var victory
  function xoxo() {
    if (i % 2 == 0) {
      xo = "<p>X</p>";
      $("#help-text").text("O's turn");
    } else {
      xo = "<p>O</p>"
      $("#help-text").text("X's turn");
    }
    i += 1
  }

    function win() {
    victory = true

    if ( $(".left").text() === "XXX" || $(".right").text()  === "XXX" ||  $(".center").text() === "XXX") {
      $("#help-text").text("X wins!")
    } else if ($(".bottom").text() === "XXX" || $(".middle").text() === "XXX" || $(".top").text() === "XXX") {
      $("#help-text").text("X wins!")
    } else if ( $(".left").text() === "OOO" || $(".right").text()  === "OOO" ||  $(".center").text() === "OOO") {
      $("#help-text").text("O wins!")
    } else if ($(".bottom").text() === "OOO" || $(".middle").text() === "OOO" || $(".top").text() === "OOO") {
      $("#help-text").text("O wins!")
    } else if ( $("#top-left > p").text() == "X" && $("#bottom-right > p").text() == "X" && $("#middle-center > p").text() == "X" ){
      $("#help-text").text("X wins!")
    } else if ( $("#top-left > p").text() == "O" && $("#bottom-right > p").text() == "O" && $("#middle-center > p").text() == "O" ){
      $("#help-text").text("O wins!")
    } else if ( $("#bottom-left > p").text() == "X" && $("#top-right > p").text() == "X" && $("#middle-center > p").text() == "X" ){
      $("#help-text").text("X wins!")
    } else if ( $("#bottom-left > p").text() == "O" && $("#top-right > p").text() == "O" && $("#middle-center > p").text() == "O" ){
      $("#help-text").text("O wins!")
    }
    else {
      victory = false
    }
  }

  function play(id) {
    $(id).one("click", function () {
      xoxo();
      $(xo).appendTo(id);
      $(this).toggleClass("unfilled filled");
      win();
      new_game();
    });
  }

  function new_game() {
    if (victory == false) {
      console.log("Keep playing");
    } else {
      $("table").attr('id', 'game-over');
      $("td").removeClass('unfilled');
    }
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

 })();

  $('button').click(function() {
    location.reload();
  });

});