    let humanScore = 0;
    let computerScore = 0;function getComputerChoice() {
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
      getHumanChoice();
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
        console.log("Game Tie");
      } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
        console.log( youWin );
        humanScore++;
      } else if (humanChoice === "Rock" && computerChoice === "Paper") {
        console.log( youLose );
        computerScore++;
      } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
        console.log( youWin );
        humanScore++;
      } else if (humanChoice === "Paper" && computerChoice === "Rock") {
        console.log( youWin );
        humanScore++;
      } else if (humanChoice === "Paper" && computerChoice === "Scissors") {
        console.log( youLose );
        computerScore++;
      } else if (humanChoice === "Scissors" && computerChoice === "Rock") {
        console.log( youLose);
        computerScore++;
      } else {
        console.log( youWin );
        humanScore++;
      }
    }
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    
    playRound(humanSelection, computerSelection);
  }

for (let i = 0, i < 5, i++) {
  playGame();
}