$(document).ready(function () {

  var win_count_x = 0
  var win_count_o = 0
  var xo = "<p>O</p>";
  var i = 0;

  function xoxo() {
    if (i % 2 == 0) {
      xo = "<p class='entry' style='color: white;'>X</p>";
      $("#help-text").text("O's turn");
    } else {
      xo = "<p class='entry' style='color: white;'>O</p>"
      $("#help-text").text("X's turn");
    }
    i++
  }

  function win() {
    victory = true;
    if ( $(".left").text() === "XXX" || $(".right").text()  === "XXX" ||  $(".center").text() === "XXX") {
      $("#help-text").text("X wins!");
      win_count_x += 1
    } else if ($(".bottom").text() === "XXX" || $(".middle").text() === "XXX" || $(".top").text() === "XXX") {
      $("#help-text").text("X wins!")
      win_count_x += 1
    } else if ($(".left").text() === "OOO" || $(".right").text()  === "OOO" ||  $(".center").text() === "OOO") {
      $("#help-text").text("O wins!")
      win_count_o += 1
    } else if ($(".bottom").text() === "OOO" || $(".middle").text() === "OOO" || $(".top").text() === "OOO") {
      $("#help-text").text("O wins!")
      win_count_o += 1
    } else if ( $("#top-left > p").text() === "X" && $("#bottom-right > p").text() === "X" && $("#middle-center > p").text() === "X" ){
      $("#help-text").text("X wins!")
      win_count_x += 1
    } else if ( $("#top-left > p").text() === "O" && $("#bottom-right > p").text() === "O" && $("#middle-center > p").text() === "O" ){
      $("#help-text").text("O wins!")
      win_count_o += 1
    } else if ( $("#bottom-left > p").text() === "X" && $("#top-right > p").text() === "X" && $("#middle-center > p").text() === "X" ){
      $("#help-text").text("X wins!")
      win_count_x += 1
    } else if ( $("#bottom-left > p").text() === "O" && $("#top-right > p").text() === "O" && $("#middle-center > p").text() === "O" ){
      $("#help-text").text("O wins!")
      win_count_o += 1
    } else if ($("td").find("p").text().length === 9){
      $("#help-text").text("It's a tie!");
    } else {
      victory = false;
    }
  }

  function play() {
    $('td').on("click", function () {
      if ($(this).find("p").text() === "") {
        xoxo();
        $(xo).appendTo($(this));
        $(this).removeClass("hover");
      } else {
        $(this).off("click");
      }
      win();
      if (victory) {
        $("td").off("click");
        $("td").removeClass("hover");
        $("#win_count_x").text(win_count_x)
        $("#win_count_o").text(win_count_o)
      }
    });
  }

  function restart() {
    i = 0;
    $(".entry").empty().remove();
    xo = "<p style='color: white;'>Begin!</p>";
    $("#help-text").text("Begin!");
    $("td").addClass("hover");
    play();
  }

  play();

  $('button').click(function() {
    restart();
  });
});