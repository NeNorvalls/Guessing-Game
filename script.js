// Define Game Parameters
const lowerLimit = 1;
const upperLimit = 100;
let attempts = 5;

// Define Utility Functions
function generateRandomNumber(lowerLimit, upperLimit) {
  return Math.floor(Math.random() * (upperLimit - lowerLimit + 1)) + lowerLimit;
}

function checkGuess(secretNumber, guess) {
  if (guess === secretNumber) {
    return "correct";
  } else if (guess < secretNumber) {
    return "too low";
  } else {
    return "too high";
  }
}

function displayResult(result) {
  const resultElement = document.getElementById("result");
  resultElement.textContent = `Result: ${result}`;
}

function submitGuess() {
  const userGuess = parseInt(document.getElementById("guessInput").value);
  const result = checkGuess(secretNumber, userGuess);
  displayResult(result);

  if (result === "correct") {
    alert("Congratulations! You guessed the correct number.");
  } else {
    attempts--;
    alert(`Attempts left: ${attempts}`);
    if (attempts === 0) {
      alert(
        `Sorry, you've run out of attempts. The correct number was ${secretNumber}.`
      );
    }
  }
}

// Game Logic
const secretNumber = generateRandomNumber(lowerLimit, upperLimit);

// Start the Game guessing game app
document.addEventListener("DOMContentLoaded", function () {});
