function getComputerChoice() {
  let result = (Math.floor(Math.random() * 3));
  if (result === 0) {
    return "rock";
  } else if(result === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  let choice = prompt("Kindly enter your choice: Rock, Paper or Scissors").trim().toLowerCase();
  if (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
    alert("Your entry was invalid. Kindly enter Rock, Paper, or Scissors");
    choice = getHumanChoice();
  }
  return choice;
}

let humanScore = 0;
let computerScore = 0;

function playGame() {
  function playRound(humanChoice, computerChoice) {
    let youWin = "You win: " + humanChoice + " beats " + computerChoice;
    let youLose = "Computer Wins: " + computerChoice + " beats " + humanChoice;
    
    if (humanChoice === computerChoice) {
      console.log("It's a game tie");
      console.log("No Scores given");
    } else if (humanChoice === "rock" && computerChoice === "scissors" || 
      humanChoice === "paper" && computerChoice === "rock" || 
      humanChoice === "scissors" && computerChoice === "paper") {
        console.log(youWin);
        humanScore ++;
      } else {
        console.log(youLose);
        computerScore ++;
      }
  }
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();  
  playRound(humanSelection, computerSelection);
}

for (let i = 0; i < 5; i++) {
  playGame();
  console.log("Your Score: " + humanScore);
  console.log("Computer Score " + computerScore);
}