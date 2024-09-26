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
  }
  
  function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    
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
    console.log(humanScore);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    
    playRound(humanSelection, computerSelection);
  }

  let i = playGame();
  for (let i = 1; i < 6 ; i++) {
    
  }