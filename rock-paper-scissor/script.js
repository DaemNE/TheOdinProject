const CHOICES = ["rock", "paper", "scissors"]
let computerSelection = ""
let playerSelection = ""
let playerDisplay = document.querySelector(".playerWins")
let computerDisplay = document.querySelector(".computerWins")
let outcomeDisplay = document.querySelector(".outcome")
let computerWins = 0
let playerWins = 0
let maxWins = 0
let result

function getComputerSelection() {
    computerSelection = CHOICES[Math.floor(Math.random()*CHOICES.length)]
    console.log(computerSelection)
    return computerSelection
}

function startGame() {
    if (maxWins) {
        for (let i = 0 ; i < 10; i++) {
            let checkValidity = false
            while (!checkValidity) {
                let playerSelection = prompt("Choose rock, paper or scissors", "")
                if (!(playerSelection === null)){
                    playerSelection = playerSelection.toLowerCase()
                    if (playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors") {
                        getComputerSelection()
                        checkOutcome(playerSelection, computerSelection)
                        checkValidity = true
                        updateDisplay()
                    } 
                } else if (playerSelection === null){
                    i += 100;
                    resetGame()
                    break;
                }
            }
            if (playerWins == maxWins || computerWins == maxWins) {
                break;
            }
        }
    } else {
        alert("You need to pick a gamemode!")
    }
}

function resetGame() {
    computerWins = 0
    playerWins = 0
    maxWins = 0
    document.getElementById("buttonSetToOne").style.background='white'
    document.getElementById("buttonSetToThree").style.background='white'
    document.getElementById("buttonSetToFive").style.background='white'
    updateDisplay()
    outcomeDisplay.textContent = "Click Start game to start!"
}

function checkOutcome(playerChoice, computerChoice) {

    if(playerChoice === "rock") {
        if(computerChoice === "rock") {
            result = "It's a draw!"
        } else if (computerChoice === "paper"){
            result = "You lost, the computer wins!"
            computerWins++
        } else if (computerChoice === "scissors"){
            result = "You win, the computer loses!"
            playerWins++
        }
    } else if (playerChoice === "paper") {
        if(computerChoice === "paper") {
            result = "It's a draw!"
        } else if (computerChoice === "scissors"){
            result = "You lost, the computer wins!"
            computerWins++
        } else if (computerChoice === "paper"){
            result = "You win, the computer loses!"
            playerWins++
        }
        
    } else if (playerChoice === "scissors"){
        if(computerChoice === "scissors") {
            result = "It's a draw!"
        } else if (computerChoice === "rock"){
            result = "You lost, the computer wins!"
            computerWins++
        } else if (computerChoice === "paper"){
            result = "You win, the computer loses!"
            playerWins++
        }
    }
    console.log(result)
}

function setFirstToOne() {
    maxWins = 1;
    document.getElementById("buttonSetToOne").style.background='green'
    document.getElementById("buttonSetToThree").style.background='white'
    document.getElementById("buttonSetToFive").style.background='white'
}
function setFirstToThree() {
    maxWins = 3;
    document.getElementById("buttonSetToOne").style.background='white'
    document.getElementById("buttonSetToThree").style.background='green'
    document.getElementById("buttonSetToFive").style.background='white'
}
function setFirstToFive() {
    maxWins = 5;
    document.getElementById("buttonSetToOne").style.background='white'
    document.getElementById("buttonSetToThree").style.background='white'
    document.getElementById("buttonSetToFive").style.background='green'
}

function updateDisplay(){
    outcomeDisplay.textContent = result
    playerDisplay.textContent = `The player won ${playerWins} times`
    computerDisplay.textContent = `The computer won ${computerWins} times`
}
