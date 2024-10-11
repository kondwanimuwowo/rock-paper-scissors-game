function getComputerChoice() {
  let result = Math.floor(Math.random() * 3);
  if (result === 0) {
    return "rock";
  } else if (result === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice(choice) {
  return choice;
}

let humanScore = 0;
let computerScore = 0;

const resultsDiv = document.querySelector("#results");
const scoreDiv = document.querySelector("#score");

function playRound(humanChoice, computerChoice) {
  let youWin = "You win: " + humanChoice + " beats " + computerChoice;
  let youLose = "Computer Wins: " + computerChoice + " beats " + humanChoice;
  
  if (humanChoice === computerChoice) {
    resultsDiv.textContent = "It's a tie! No scores given.";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") || 
    (humanChoice === "paper" && computerChoice === "rock") || 
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    resultsDiv.textContent = youWin;
    humanScore++;
  } else {
    resultsDiv.textContent = youLose;
    computerScore++;
  }
  
  scoreDiv.textContent = "Your Score: " + humanScore + "  Computer Score: " + computerScore;

  // Check for a winner
  if (humanScore === 5) {
    resultsDiv.textContent = "Congratulations! You won the game!";
  } else if (computerScore === 5) {
    resultsDiv.textContent = "Sorry mate! Computer won. Try next time!";
  }

  // Stop further rounds if a player has reached 5 points
  if (humanScore >= 5 || computerScore >= 5) {
    return;
  }
}

// Set up event listeners for the buttons
const rockChoice = document.querySelector("#rockBtn");
rockChoice.addEventListener("click", function() {
  const humanSelection = getHumanChoice("rock");
  const computerSelection = getComputerChoice(); 
  playRound(humanSelection, computerSelection);
});

const paperChoice = document.querySelector("#paperBtn");
paperChoice.addEventListener("click", function() {
  const humanSelection = getHumanChoice("paper");
  const computerSelection = getComputerChoice(); 
  playRound(humanSelection, computerSelection);
});

const scissorsChoice = document.querySelector("#scissorsBtn");
scissorsChoice.addEventListener("click", function() {
  const humanSelection = getHumanChoice("scissors");
  const computerSelection = getComputerChoice(); 
  playRound(humanSelection, computerSelection);
});
