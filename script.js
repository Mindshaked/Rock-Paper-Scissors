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


function playRound(playerChoice, computerChoice){
    
    if (playerChoice == computerChoice){
        console.log("tie");
    

    } else if (playerChoice == "rock" && computerChoice == "paper"){
        computerWins++;
        console.log("Computer Wins!");
        return computerWins;

    } else if (playerChoice == "rock" && computerChoice == "scissors"){
        playerWins++;
        console.log("You win!");
        return playerWins;
        

    } else if (playerChoice == "paper" && computerChoice == "rock"){
        playerWins++;
        console.log("You win!");
        return playerWins;
        
    } else if (playerChoice == "paper" && computerChoice == "scissors"){
        computerWins++;
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

let buttons = document.querySelectorAll('.buttonChoices');

buttons.forEach((button) => {
    button.addEventListener('click', function(e) {
        if (e.target.id == "rockButton"){
            let playerChoice = "rock";
            let computerChoice = "";
            computerPlay();
            playRound(playerChoice,computerChoice);
        } else if (e.target.id == "paperButton"){
            let playerChoice = "paper";
            let computerChoice = "";
            computerPlay();
            playRound(playerChoice,computerChoice);
        } else if (e.target.id == "scissorsButton"){
            let playerChoice = "scissors";
            let computerChoice = "";
            computerPlay();
            playRound(playerChoice,computerChoice);
        }
    });
});



/*playerSelection.addEventListener("click", function() => {
    if (buttonChoices.class == rockButton) {
        let playerChoice = "rock"; 
        computerPlay(); 
        playRound();
}   else if (button.id == paperButton){
        let playerChoice = "paper";
        computerPlay();
        playRound();
}   else if (button.id == scissorsButton){
        let playerChoice = "scissors";
        computerPlay();
        playRound();
}
});

//playFullGame ()

*/
