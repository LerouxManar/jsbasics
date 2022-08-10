function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber == 1) {
        return "rock";
    }
    else if (randomNumber == 2) {
        return "paper";
    }
    else if (randomNumber == 3) {
        return "scissors"
    }
  }


function playRound(playerSelection, computerSelection) {
    getComputerChoice(computerSelection);
    if((computerSelection==1) && (playerSelection=="rock")){
        return("Winner and Human are tie")
     }  if((computerSelection==2) && (playerSelection=="rock")){
        return("Winner is Computer")
     }  if((computerSelection==3) && (playerSelection=="rock")){
        return("Human is Winner")
     } else return("Yolo")
  }
  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));











// const choice = ["Rock", "Paper", "Scissors"];

// function playRound() {
//   const computerSelection = choice[Math.floor(Math.random() * choice.length)];
//   const playerSelection = prompt("Enter Rock or Paper or Scissors");
  
//   if (computerSelection === "Rock" && playerSelection === "Scissors") {
//     return "Computer wins";
//   } else if (computerSelection === "Paper" && playerSelection === "Rock") {
//     return "Player wins";
//   } else if (computerSelection === "Scissors" && playerSelection === "Paper") {
//     return "Computer wins";
//   } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
//     return "Computer wins";
//   } else if (playerSelection === "Paper" && computerSelection === "Rock") {
//     return "Player wins";
//   } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
//     return "Player wins";
//   } else {
//     return "Draw";
//   }
// }

// console.log(playRound());