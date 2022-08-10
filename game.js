var buttonColor = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern=[];

$(".btn").click(function(){
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  console.log(userClickedPattern)
});

function nextSequence(){
  var randonNumber = Math.Floor(Math.random() * 3);
  var randomChosenColor = buttonColor[randonNumber];
  gamePattern.push(randomChosenColor);
 $("#"+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

 var audio = new Audio("sounds/"+randomChosenColor+".mp3");
 audio.play();
}
