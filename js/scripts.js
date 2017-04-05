var randomNumber = function(){

  var diceArray = [1,2,3,4,5,6];
  var rNumber = diceArray[Math.floor(Math.random() * diceArray.length)];
  return rNumber;
}


$(function(){
  $("#form-one").submit(function(event){
    event.preventDefault();

    var userTurn = randomNumber();
    if (userTurn === 1)
    {
      alert("Your turn is over you greedy pig!")
    }
    console.log(userTurn)

    // var turnTotal += 0 + userTurn;


  });
})
