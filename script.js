function getComputerChoice() {
const choices = ["Rock", "Paper", "Scissors"];
const randomNumber = Math.floor(Math.random() *choices.length)
return choices[randomNumber]
} 

playerSelection = prompt(`Rock, Paper, or Scissors?`).toLowerCase()
computerSelection = getComputerChoice().toLowerCase()

if(playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "paper" && computerSelection == "rock" || playerSelection == "scissors" && computerSelection == "paper") {
    alert(`player Chose ${playerSelection} and computer chose ${computerSelection} you win!!`)
} else if(playerSelection == "scissors" && computerSelection == "rock" || playerSelection == "rock" && computerSelection == "paper" || playerSelection == "paper" && computerSelection == "scissors") {
    alert(`player Chose ${playerSelection} and computer chose ${computerSelection} you lose!!`)
} else if (playerSelection == computerSelection) {
    alert(`player Chose ${playerSelection} and computer chose ${computerSelection} It's a tie!!`)
} else {
  alert(`invalid input please type Rock, paper or scissors,`)
}