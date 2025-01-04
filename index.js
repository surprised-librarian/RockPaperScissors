//Create function that randomly returns rock, paper, or scissors

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        console.log('rock');
        return 'rock';
    } else if (randomNumber === 1) {
        console.log('paper');
        return 'paper';
    } else {
        console.log('scissors');
        return 'scissors';
}
}

//Create a function that returns the user's choice

function getUserChoice() {
    userChoice = prompt('Choose rock, paper, or scissors').toLowerCase();
    console.log(userChoice);
    return userChoice;
}

//Declare score variables
let humanScore = 0;
let computerScore = 0;

//Create a function that determines the winner

function determineWinner(userChoice, computerChoiceResult) {
    if (userChoice === computerChoiceResult) {
        document.getElementById('result').innerHTML = 'It is a tie!';
    } else if (userChoice === 'rock') {
        if (computerChoiceResult === 'paper') {
            computerScore++;
            document.getElementById('result').innerHTML = 'Computer wins!';
            document.getElementById('computerScore').innerHTML = computerScore;
        } else {
            humanScore++;
            document.getElementById('result').innerHTML = 'You win!';
            document.getElementById('humanScore').innerHTML = humanScore;
        }
    } else if (userChoice === 'paper') {
        if (computerChoiceResult === 'scissors') {
            computerScore++;
            document.getElementById('result').innerHTML = 'Computer wins!';
            document.getElementById('computerScore').innerHTML = computerScore;
        } else {
            humanScore++;
            document.getElementById('result').innerHTML = 'You win!';
            document.getElementById('humanScore').innerHTML = humanScore;
        }
    }
}

function playRound() {
    let userChoice = getUserChoice();
    let computerChoice = getComputerChoice();
    determineWinner(userChoice, computerChoice);
}

function startOver() {
    humanScore = 0;
    computerScore = 0;
    document.getElementById('humanScore').innerHTML = humanScore;
    document.getElementById('computerScore').innerHTML = computerScore;
    document.getElementById('result').innerHTML = '';
}