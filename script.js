var sec = 60;
var timer;
var userscore = {}
function scoreCheck(currentScore) {
  if (!highScoreList || !highScoreList.length){
    highScoreList.push(currentScore)
  }
  else{
  for (var i = 0; i < highScoreList.length; i++) {
    if (currentScore.time > highScoreList[i].time) {
      highScoreList.splice(i, 0, currentScore);
      return
    }
  }
}
}