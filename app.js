// Randomly Generate COM choice
function getComputerChoice() {
  let choices = ['Rock', 'Paper', 'Scissors'];
  // Random Number from Array length to use as index
  let rand = Math.floor(Math.random() * choices.length);
  return choices[rand];
}

console.log(getComputerChoice());

// Game run Function
// Case insensitive input
// Params (COM Choice, Player Choice)
//
