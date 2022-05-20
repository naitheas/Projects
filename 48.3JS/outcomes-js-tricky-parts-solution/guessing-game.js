

// Write a function called guessingGame which returns a function 
// that allows you to guess a random whole number between 0 and 99

// Every time you create a new game, it should select a new random number,
//  and keep it secret from the player.

function guessingGame() {
  const ANSWER = Math.floor(Math.random() * 100);
  let isOver = false;
  let numGuesses = 0;
// Once the game has started, you can guess the number
  return function guess(num) {
    if (isOver) return "The game is over, you already won!";
    numGuesses++;
    // The game should tell you whether your guess is too high, too low, or correct.
    if (num === ANSWER) {
      isOver = true;
      const guess = numGuesses === 1 ? "guess" : "guesses";
      // After a correct guess, the game ends
      return `You win! You found ${num} in ${numGuesses} ${guess}.`;
    }
    if (num < ANSWER) return `${num} is too low!`;
    if (num > ANSWER) return `${num} is too high!`;
  };
}

module.exports = { guessingGame };
