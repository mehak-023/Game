var randomNumber = Math.floor(Math.random() * 25) + 1;

function checkGuess() {
  var userGuess = document.getElementById("userGuess").value;
  var message = "";

  if (userGuess == randomNumber) {
    message = "Congratulations! You guessed the correct number!";
  } else if (userGuess > randomNumber) {
    message = "Too high! Try again.";
  } else {
    message = "Too low! Try again.";
  }

  document.getElementById("message").innerHTML = message;
}
