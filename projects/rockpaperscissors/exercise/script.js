/*
  Rock Paper Scissors 🚀🔥
  Concepts covered in this project
    👉 For loops
    👉 Dom Manipulation
    👉 Variables
    👉 Conditionals (if else if)
    👉 Template Literals
    👉 Event Listeners
    👉 Higher order Function (Math.random())
*/

// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
// getComputerChoice() 👉 'Rock'
// getComputerChoice() 👉 'Scissors'



function getComputerChoice() {
  // declaring the games option
  let gameOptions = ["rock", "paper", "scissors"];

  const randomPick = Math.floor(Math.random() * gameOptions.length)
  const finalPick = gameOptions[randomPick];
  return finalPick;
}

// ** getResult compares playerChoice & computerChoice and returns the score accordingly **
// human wins - getResult('Rock', 'Scissors') 👉 1
// human loses - getResult('Scissors', 'Rock') 👉 -1
// human draws - getResult('Rock', 'Rock') 👉 0
function getResult(playerChoice, computerChoice) {
  // return the result of score based on if you won, drew, or lost
  let score;
  
  // All situations where human draws, set `score` to 0
  if (playerChoice == computerChoice){
    score = 0;
  }else if(playerChoice == 'rock' && computerChoice == 'scissors'){
    score = 1;
  }else if(playerChoice == 'paper' && computerChoice == 'rock'){
    score = 1;
  }else if(playerChoice == 'scissors' && computerChoice == 'paper'){
    score = 1;
  }else{
    score = -1;
  }

  // return score
  return score;
}

// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(score, playerChoice, computerChoice) {
  // Hint: on a score of -1
  // You should do result.innerText = 'You Lose!'
  // Don't forget to grab the div with the 'result' id!
}

// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {
  console.log({playerChoice});
  const computerChoice = getComputerChoice();
  console.log({computerChoice});
  const score = getResult(playerChoice, computerChoice);
  console.log({score})
  
}


// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
  // use querySelector to select all RPS Buttons
  const rpsButtons = document.querySelectorAll('.rpsButton')

  rpsButtons.forEach((rpsButton) => {
    rpsButton.onclick = () => onClickRPS(rpsButton.value);
  })
 

  // Add a click listener to the end game button that runs the endGame() function on click
  
}

// ** endGame function clears all the text on the DOM **
function endGame() {
  
}

playGame()