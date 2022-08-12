var buttonColor = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern=[];

var started = false;

var level = 0;

$(document).keypress(function() {
  if (!started) {

    // The h1 title starts out saying "Press A Key to Start", when the game has started, change this to say "Level 0".
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

$(".btn").click(function(){
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);
});

function nextSequence(){

  level++;

  $("#level-title").text("Level " + level);

  var randonNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColor[randonNumber];
  gamePattern.push(randomChosenColor);

 $("#" + randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
 playSound(randomChosenColor);
}

function playSound(name){
  var audio = new Audio("sounds/"+name+".mp3");
  audio.play();
}

function animatePress(currentColour){
  $("#" + currentColour).addClass("pressed");

  setTimeout(function(){
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}
