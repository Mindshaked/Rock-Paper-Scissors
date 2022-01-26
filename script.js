
const arr = ["rock", "paper", "scissors"];



function computerPlay(){
    let numberSelection = Math.random() * 3;
    let computerChoice = arr [Math.floor(numberSelection)];
    return computerChoice;

}

function playerSelection(){
    let playerInput = prompt("What do you choose, rock, paper or scissors?");
    let playerChoice = playerInput.toLowerCase();
        if (! arr[playerChoice]){
            console.log("Use on of these terms: rock, paper or scissors")
            playerSelection();
        }
    return playerChoice;

}



let playerWins = 0;
let computerWins = 0;


function playRound(playerChoice, computerSelection){
    
    if (playerSelection == computerSelection){
        console.log("tie");
    

    } else if (playerSelection == "rock" && computerSelection == "paper"){
        computerWins++;
        console.log("Computer Wins!");
        return computerWins;

    } else if (playerSelection == "rock" && computerSelection == "scissors"){
        playerWins++;
        console.log("You win!");
        return playerWins;
        

    } else if (playerSelection == "paper" && computerSelection == "rock"){
        playerWins++;
        console.log("You win!");
        return playerWins;
        
    } else if (playerSelection == "paper" && computerSelection == "scissors"){
        computerWins++;
        console.log("Computer wins!");
        return computerWins;
        
    }
        


}

function playFullGame (){
    for (let rounds = 0; rounds < 6; rounds++){
    computerPlay();
    playerSelection();
    playRound(playerChoice, computerChoice);
    console.log(playerChoice, computerChoice);
    }
}



playFullGame ()

console.log(playRound(playerWins, computerWins))
