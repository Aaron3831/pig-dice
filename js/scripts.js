
//Business logic

function Score (player, streak, bank) {
  this.player = player;
  this.streak = streak;
  this.bank = bank;
}

Score.prototype.streaking = function() {
  var rNumber = Math.floor((Math.random() * 6) + 1);
  $("#currentRoll").text(rNumber);
    if (rNumber === 1) {
      alert("Your turn is over you greedy pig!");
      return this.streak = 0;
    } else {
      this.streak = (this.streak + rNumber);
      return this.streak;
      console.log(this.streak)
  }
}

Score.prototype.banking = function () {
  this.bank = (this.streak + this.bank);
  this.streak = 0;
  if (this.bank >= 100) {
    alert("winner winner chicken dinner");
    if (true) {
      location.reload();
    }
  }
  return this.bank;
}

//UI logic

$(document).ready(function() {
  $("form#playerOne").submit(function(event){
  event.preventDefault();

    var playerOneInput = ("player one");
    oneScore = new Score(playerOneInput, 0, 0);
    $("#playeroneshow").text(oneScore.player);
    console.log(oneScore);
  });

  $("form#playerTwo").submit(function(event){
  event.preventDefault();

    var playerTwoInput = ("player two");
    twoScore = new Score(playerTwoInput, 0, 0);
    $("#playertwoshow").text(twoScore.player)
    console.log(twoScore)
  });


// Made the player name event a submit function so it doesn't run when we click the roll or hold function. That was why it was resetting everything to 0 on click

// streak

  $("#roll1").click(function(event) {
    event.preventDefault();

    var oneStreak = oneScore.streaking();
    $("#playerOneStreak").text(oneStreak);
  });

  $("#roll2").click(function(event) {
    event.preventDefault();

    var twoStreak = twoScore.streaking();
    $("#playerTwoStreak").text(twoStreak);
  });

// holding

  $("#updateTotal1").click(function(event){
    event.preventDefault();

    var oneBank = oneScore.banking();
    $("#playerOneBank").text(oneBank);
    $("#playerOneStreak").text("");
    console.log(oneBank)
  });

  $("#updateTotal2").click(function(event){
    event.preventDefault();

    var twoBank = twoScore.banking();
    $("#playerTwoBank").text(twoBank);
    $("#playerTwoStreak").text("");
    console.log(twoBank)
  });

});
