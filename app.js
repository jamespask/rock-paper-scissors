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
  console.log(choice);
  return choice;
}

// Game run Function
function playRound(playerSelection, computerSelection) {
  // console.log(`Player Selection: ${playerSelection}`);
  // console.log(`COM Selection: ${computerSelection}`);
  if (playerSelection === computerSelection) {
    return `It's a draw!`;
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    // console.log('rock/scissor');
    return `Player Wins`;
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    // console.log('scissor/paper');
    return `Player Wins`;
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    // console.log('paper/rock');
    return `Player Wins`;
  } else {
    return `Computer Wins`;
  }
}

console.log(playRound(getPlayerChoice(), getComputerChoice()));
