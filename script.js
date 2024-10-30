const choices = document.querySelectorAll('.choice');
const resultText = document.getElementById('result-text');
const playerScoreEl = document.getElementById('player-score');
const computerScoreEl = document.getElementById('computer-score');

let playerScore = 0;
let computerScore = 0;

const choicesArray = ['rock', 'paper', 'scissors'];

choices.forEach(choice => {
    choice.addEventListener('click', () => {
        const playerChoice = choice.id;
        const computerChoice = getComputerChoice();
        const winner = getWinner(playerChoice, computerChoice);
        showResult(winner, playerChoice, computerChoice);
        updateScore(winner);
    });
});

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choicesArray.length);
    return choicesArray[randomIndex];
}

function getWinner(player, computer) {
    if (player === computer) {
        return 'draw';
    } else if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')
    ) {
        return 'player';
    } else {
        return 'computer';
    }
}

function showResult(winner, playerChoice, computerChoice) {
    if (winner === 'draw') {
        resultText.textContent = `It's a draw! You both chose ${playerChoice}.`;
    } else if (winner === 'player') {
        resultText.textContent = `You win! ${playerChoice} beats ${computerChoice}.`;
    } else {
        resultText.textContent = `You lose! ${computerChoice} beats ${playerChoice}.`;
    }
}

function updateScore(winner) {
    if (winner === 'player') {
        playerScore++;
        playerScoreEl.textContent = playerScore;
    } else if (winner === 'computer') {
        computerScore++;
        computerScoreEl.textContent = computerScore;
    }
}
