const playRound = function(playerSelection, computerSelection) {

    if (playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "paper" && computerSelection == "rock" || playerSelection == "scissors" && computerSelection == "paper") {
        return document.querySelector(".headingTwo").textContent = `You Chose ${playerSelection} and computer chose ${computerSelection} you win!!`;
    } else if(playerSelection == "scissors" && computerSelection == "rock" || playerSelection == "rock" && computerSelection == "paper" || playerSelection == "paper" && computerSelection == "scissors") {
        return document.querySelector(".headingTwo").textContent = `player Chose ${playerSelection} and computer chose ${computerSelection} you lose!!`
    } else if (playerSelection == computerSelection) {
        return document.querySelector(".headingTwo").textContent = `player Chose ${playerSelection} and computer chose ${computerSelection} It's a tie!!`
    // } else {
    //   return  `invalid input please type Rock, paper or scissors,`
    }

}


function getComputerChoice() {
const choices = ["Rock", "Paper", "Scissors"];
const randomNumber = Math.floor(Math.random() *choices.length) // math floor reduces the number to a whole number lowest possible. math random generates a value from 0 to 1. choices.length measures the index of the array
return choices[randomNumber] // return value to the function
} 


document.querySelector("#rockObj").addEventListener('click', function(){
     playRound("rock", computerSelection)
})
let playerSelection;

// playerSelection = prompt(`Rock, Paper, or Scissors?`).toLowerCase()
computerSelection = getComputerChoice().toLowerCase()
console.log(playRound(playerSelection, computerSelection))


 


for( let i = 0; i <= 5; i++){
    playRound(playerSelection, computerSelection)
}
 console.log(playRound(playerSelection, computerSelection))
 





