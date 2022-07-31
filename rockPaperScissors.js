
//let humanPlayer 
//let computerPlayer

function computerPlayer() {
    
    let computerPlayer = Math.floor(Math.random()*3)
    if(computerPlayer == 0){
        console.log("Computer Selected Paper")
    } else if (computerPlayer == 1){
        console.log("Computer Selected Rock")
    } else if(computerPlayer==2) {
        console.log("Computer Selected Scissors")
    }
}
computerPlayer()

function humanPlayer(){
    let humanPlayer = prompt("Select Rock, Paper or Scissors")
}



