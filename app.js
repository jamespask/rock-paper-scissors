// Randomly Generate COM choice
function getComputerChoice() {
  let choices = ['rock', 'paper', 'scissors'];
  // Random Number from Array length to use as index
  let rand = Math.floor(Math.random() * choices.length);
  return choices[rand];
}

// Get player Choice
function getPlayerChoice() {
  let choice = window.prompt('Enter your choice');
  choice = choice.toLowerCase();
  // console.log(choice);
  return choice;
}

let comScore = 0;
let playerScore = 0;
// Game run Function
function playRound(playerSelection, computerSelection) {
  // console.log(`Player Selection: ${playerSelection}`);
  // console.log(`COM Selection: ${computerSelection}`);
  if (playerSelection === computerSelection) {
    comScore += 1;
    playerScore += 1;
    return `It's a draw!`;
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    // console.log('rock/scissor');
    playerScore += 1;
    return `Player Wins, Rock beats Scissors`;
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    // console.log('scissor/paper');
    playerScore += 1;
    return `Player Wins, Scissors beats Paper`;
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    // console.log('paper/rock');
    playerScore += 1;
    return `Player Wins, Paper beats Rock`;
  } else if (computerSelection === 'rock' && playerSelection === 'scissors') {
    comScore += 1;
    return `Computer Wins, Rock beats Scissors`;
  } else if (computerSelection === 'scissors' && playerSelection === 'paper') {
    comScore += 1;
    return `Computer Wins, Scissors beats Paper`;
  } else if (computerSelection === 'paper' && playerSelection === 'rock') {
    comScore += 1;
    return `Computer Wins, Paper beats Rock`;
  }
}

// This calls the function which gives a new random which was causing confusion
// console.log(playRound(getPlayerChoice(), getComputerChoice()));

for (let i = 0; i < 5; i++) {
  console.log(playRound(getPlayerChoice(), getComputerChoice()));
}
if (playerScore > comScore) {
  console.log('Player Wins');
  console.log(`Final Score: Player: ${playerScore} / COM: ${comScore}`);
} else if (playerScore < comScore) {
  console.log('COM Wins');
  console.log(`Final Score: Player: ${playerScore} / COM: ${comScore}`);
} else {
  console.log(`It's a draw`);
  console.log(`Final Score: Player: ${playerScore} / COM: ${comScore}`);
}
