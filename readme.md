# Guessing Game

Welcome to the Guessing Game! This is a simple web-based guessing game where the player tries to guess a randomly generated number between 1 and 100.

## How to Play

1. Open `index.html` in your web browser.
2. Enter your guess in the provided input field.
3. Click the "Submit Guess" button to see if you guessed correctly.
4. You have a limited number of attempts to guess the correct number.

## Project Structure

- **index.html:** The main HTML file containing the structure of the webpage.
- **styles.css:** The CSS file for styling the webpage.
- **script.js:** The JavaScript file containing the game logic and functionality.

## Game Parameters

- **Lower Limit:** 1
- **Upper Limit:** 100
- **Attempts:** 5

## Utility Functions

### `generateRandomNumber(lowerLimit, upperLimit)`

Generates a random number within the specified range.

### `checkGuess(secretNumber, guess)`

Checks if the user's guess is correct, too low, or too high.

### `displayResult(result)`

Displays the result of the user's guess on the webpage.

### `submitGuess()`

Handles the submission of the user's guess, updates the result display, and provides feedback to the user.

## Game Logic

The game initializes with a random secret number between the defined lower and upper limits. The player's attempts are limited, and the game provides feedback after each guess. The game ends when the player correctly guesses the number or runs out of attempts.

## Getting Started

Simply open `index.html` in a web browser to start playing the Guessing Game.
