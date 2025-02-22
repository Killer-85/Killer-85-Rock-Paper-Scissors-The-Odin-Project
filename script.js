let playerScore = 0;
let computerScore = 0;
const maxRounds = 5;
let roundsPlayed = 0;

const playerScoreDisplay = document.getElementById('player-score');
const computerScoreDisplay = document.getElementById('computer-score');
const resultDisplay = document.getElementById('result');
const finalResultDisplay = document.getElementById('final-result');

const choices = document.querySelectorAll(".choices button");

function getComputerChoice(){
  let choice = ["Rock","Paper","Scissors"];
  let randomNum = Math.floor(Math.random() * 3);
  return choice[randomNum];
}

function playRound(playerChoice){
  if(roundsPlayed >= maxRounds)
    return

  const computerChoice = getComputerChoice();
  let result = "";

  if(playerChoice === computerChoice){
    result = `It's a draw! Both chose ${playerChoice}.`
  }
  else if(
    (playerChoice === "Rock" && computerChoice === "Scissors") || 
    (playerChoice === "Scissors" && computerChoice === "Paper") || 
    (playerChoice === "Paper" && computerChoice === "Rock")){
    playerScore++;
    result = `You win! ${playerChoice} beats ${computerChoice}.`
  }
  else{
    computerScore++;
    result = `You lose! ${computerChoice} beats ${playerChoice}`
  }

  playerScoreDisplay.textContent = playerScore;
  computerScoreDisplay.textContent = computerScore;
  resultDisplay.textContent = result;

  roundsPlayed++;

  if(roundsPlayed === maxRounds){
    endGame();
  }
}

function endGame(){
  let finalResult = '';
  if(playerScore > computerScore){
    finalResult = "Congratulations! You win the game!"
  }
  else if(computerScore > playerScore){
    finalResult = "Sorry! Computer wins the game!"
  }
  else{
    finalResult = "It's a tie!"
  }
  finalResultDisplay.textContent = finalResult;
}

choices.forEach((button) => {
  button.addEventListener("click",() => {
    playRound(button.textContent);
  });
});
