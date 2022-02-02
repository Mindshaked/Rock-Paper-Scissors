const arr = ["rock", "paper", "scissors"];



function computerPlay(){
    let numberSelection = Math.random() * 3;
    let computerChoice = arr [Math.floor(numberSelection)];
    return computerChoice;

}

/*function playerSelectionRock(){
    let playerChoice = "rock";
    console.log("rock");
    return playerChoice;

}
function playerSelectionPaper(){
    let playerChoice = "paper";
    console.log("paper");
    return playerChoice;

}
function playerSelectionScissors(){
    let playerChoice = "scissors";
    console.log("scissors");
    return playerChoice;

}
*/


let playerWins = 0;
let computerWins = 0;

// Result markers
let playerResultMarker = document.getElementById("playerResult")

let computerResultMarker = document.getElementById("computerResult");
console.log(computerResultMarker);

function playRound(playerChoice, computerChoice){
    
    if (playerChoice == computerChoice){
        console.log("tie");
    

    } else if (playerChoice == "rock" && computerChoice == "paper"){
        computerWins++;
        computerResultMarker.textContent++;
        console.log("Computer Wins!");
        return computerWins;

    } else if (playerChoice == "rock" && computerChoice == "scissors"){
        playerWins++;
        playerResultMarker.textContent++;
        console.log("You win!");
        return playerWins;
        

    } else if (playerChoice == "paper" && computerChoice == "rock"){
        playerWins++;
        playerResultMarker.textContent++;
        console.log("You win!");
        return playerWins;
        
    } else if (playerChoice == "paper" && computerChoice == "scissors"){
        computerWins++;
        computerResultMarker.textContent++;
        console.log("Computer wins!");
        return computerWins;
        
    } else if (playerChoice == "scissors" && computerChoice == "paper"){
        playerWins++;
        playerResultMarker.textContent++;
        console.log("You win!");
        return playerWins;
                
    } else if (playerChoice == "scissors" && computerChoice == "rock"){
        computerWins++;
        computerResultMarker.textContent++;
        console.log("Computer wins!");
        return computerWins;
    }


}



/*function playFullGame (){
    for (let rounds = 0; rounds < 6; rounds++){
    let computerChoice = computerPlay();
    let playerChoice = playerSelection();
    playRound(playerChoice, computerChoice);
    console.log(rounds);
    console.log("Computer: " + computerWins + "  Player: " + playerWins);
    }
} 

*/

//linkear los resultados a las variables.

let buttons = document.querySelectorAll('.buttonChoices');

buttons.forEach((button) => {
    button.addEventListener('click', function(e) {
        if (e.target.id == "rockButton"){
            let playerChoice = "rock";
            let computerChoice = computerPlay();
            let winner = playRound(playerChoice,computerChoice);
            console.log(winner, computerWins, playerWins);
            return winner;
        } else if (e.target.id == "paperButton"){
            let playerChoice = "paper";
            let computerChoice = computerPlay();
            let winner = playRound(playerChoice,computerChoice);
            console.log(winner, computerWins, playerWins);
            return winner;
        } else if (e.target.id == "scissorsButton"){
            let playerChoice = "scissors";
            let computerChoice = computerPlay();
            let winner = playRound(playerChoice,computerChoice);
            console.log(winner, computerWins, playerWins);
            return winner;
        } 

    });
});


//button to rest the game
function resetGame(){
    playerWins = 0;
    computerWins = 0;
    
}
let resetButton = document.querySelector('.reset');

resetButton.addEventListener('click', function(e) {
    resetGame();;
    computerResultMarker.textContent = "0";
    playerResultMarker.textContent = "0";

    console.log(playerWins,computerWins);
});



if (playerWins == 5){
    console.log("Player wins the game");
} else if (computerWins == 5){
    console.log("Computer wins the game");
}




//console.log(computerWins + playerWins)

//playFullGame ()

