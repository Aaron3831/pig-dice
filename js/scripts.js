//Business logic

function Score (player, streak, bank) {
  this.player = player;
  this.streak = streak;
  this.bank = bank;
}

Score.prototype.streaking = function () {
    var rNumber = Math.floor((Math.random() * 6) + 1);
    console.log(rNumber);
    $("#currentRoll").text(rNumber)
    if (rNumber === 1) {
      alert("Your turn is over you greedy pig!");
      return this.streak = 0;
    }
    else {
      this.streak = (this.streak + rNumber);
      return this.streak;
    }
}

Score.prototype.banking = function () {
  this.bank = (this.streak + this.bank);
  this.streak = 0;
  if (this.bank >= 100) {
    alert("winner winner chicken dinner")
    if (true) {
    location.reload();
    }
  }
  return this.bank;
};

//UI logic

$(document).ready(function() {
  $("form#playerOne").click(function(event){
  event.preventDefault();

    var playerOneInput = ("playerone");
    oneScore = new Score(playerOneInput, 0, 0);
    $("#playeroneshow").text(oneScore.player);
    console.log(playerOneInput);
  });

  $("form#playerTwo").click(function(event){
  event.preventDefault();

    var playerTwoInput = ("player two");
    twoScore = new Score(playerTwoInput, 0, 0);
    $("#playertwoshow").text(twoScore.player)
    console.log(oneScore)
  });
});






  // // var add = function(userTurn, runningTotal) {
  // //   return userTurn += runningTotal;
  // //   console.log(add)
  // };
