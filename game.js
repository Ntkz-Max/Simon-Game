var buttonColor = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern=[];

$(".btn").click(function(){
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
});

function nextSequence(){
  var randonNumber = Math.Floor(Math.random() * 3);
  var randomChosenColor = buttonColor[randonNumber];
  gamePattern.push(randomChosenColor);
 $("#"+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
 playSound(randomChosenColor);


}

function playSound(name){
  var audio = new Audio("sounds/"+name+".mp3");
  audio.play();
}

function animatePress(currentColour){
  $("."+currentColour).addclass("pressed");

  setTimeout(function(){
    $("."+currentColour).removeclass("pressed");
  }, 100);
}
