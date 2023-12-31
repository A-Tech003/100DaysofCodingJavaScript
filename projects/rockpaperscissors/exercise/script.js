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

let totalScore = {playerScore : 0, computerScore: 0}

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
  const resultDiv = document.getElementById('result');
  const handsDiv = document.getElementById('hands');
  const playerScoreDiv = document.getElementById('player-score');
  const computerScoreDiv = document.getElementById('computer-score');

  if (score == -1){
    resultDiv.innerHTML = '<h2>You lose!</h2>';
  }else if (score == 0){
    resultDiv.innerHTML = "<h2>It's a tie!</h2>";
  }else{
    resultDiv.innerHTML = '<h2>You win!</h2>'
  }

  handsDiv.innerText = `👱‍♂️ ${playerChoice} vs 🤖 ${computerChoice}`;
  playerScoreDiv.innerText = `Your Score: ${totalScore['playerScore']}`
  computerScoreDiv.innerText = `Computer Score: ${totalScore['computerScore']}`
}

// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {
  const computerChoice = getComputerChoice();
  const score = getResult(playerChoice, computerChoice);
  totalScore['playerScore'] += score;
  // totalScore['computerScore'] += score;
  // console.log({score})
  // console.log({totalScore})

  showResult(score, playerChoice, computerChoice);
  
}


// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
  // use querySelector to select all RPS Buttons
  const rpsButtons = document.querySelectorAll('.rpsButton')

  rpsButtons.forEach((rpsButton) => {
    rpsButton.onclick = () => onClickRPS(rpsButton.value);
  })
 

  // Add a click listener to the end game button that runs the endGame() function on click
  const enddGame = document.getElementById('endGameButton');

  enddGame.onclick = () => endGame(totalScore)
  
}

// ** endGame function clears all the text on the DOM **
function endGame(totalScore) {
  totalScore['playerScore'] = 0;
  totalScore['computerScore'] = 0;

  const resultDiv = document.getElementById('result');
  const handsDiv = document.getElementById('hands');
  const playerScoreDiv = document.getElementById('player-score');

  resultDiv.innerHTML = '';
  handsDiv.innerText = '';
  playerScoreDiv.innerText = '';
}

playGame()