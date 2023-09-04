let computerScore = 0
let playerScore = 0
document.querySelector("#pScore").textContent = playerScore
document.querySelector("#cScore").textContent = computerScore

const playRound = (playerSelection, computerSelection) => {
    if (playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "paper" && computerSelection == "rock" || playerSelection == "scissors" && computerSelection == "paper") {
        document.querySelector("#pScore").textContent = playerScore += 1
        document.querySelector(".headingTwo").textContent = `You Chose ${playerSelection} and computer chose ${computerSelection} you win!!`;
        
    } else if (playerSelection == "scissors" && computerSelection == "rock" || playerSelection == "rock" && computerSelection == "paper" || playerSelection == "paper" && computerSelection == "scissors") {
        document.querySelector("#cScore").textContent = computerScore += 1
        document.querySelector(".headingTwo").textContent = `player Chose ${playerSelection} and computer chose ${computerSelection} you lose!!`;
    } else if (playerSelection == computerSelection) { 
        document.querySelector(".headingTwo").textContent = `player Chose ${playerSelection} and computer chose ${computerSelection} It's a tie!!`;
    } else "error"
};

function getComputerChoice() {
const choices = ["Rock", "Paper", "Scissors"];
const randomNumber = Math.floor((Math.random() * choices.length)) // math floor reduces the number to a whole number lowest possible. math random generates a value from 0 to 1. choices.length measures the index of the array
return choices[randomNumber] // return value to the function
} 

document.querySelector("#rockObj").addEventListener('click', function(){
    let computerSelection = getComputerChoice().toLowerCase() // generates a random choice
     playRound("rock", computerSelection)
     checkWin()
})

document.querySelector("#paperObj").addEventListener('click', function(){
    let computerSelection = getComputerChoice().toLowerCase()
    playRound("paper", computerSelection)
    checkWin()
})

document.querySelector("#scissorsObj").addEventListener('click', function(){
    let computerSelection = getComputerChoice().toLowerCase()
    playRound("scissors", computerSelection)
    checkWin()
})




 const checkWin = function(){
if(playerScore == 5){
         document.querySelector(".headingTwo").textContent = `You Won the Game :)`
         document.querySelector("#pScore").textContent = playerScore = 0
         document.querySelector("#cScore").textContent = computerScore = 0
        
 } else if(computerScore == 5){
         document.querySelector(".headingTwo").textContent = `You Lost the Game :(`
         document.querySelector("#pScore").textContent = playerScore = 0
         document.querySelector("#cScore").textContent = computerScore = 0
} 
} 