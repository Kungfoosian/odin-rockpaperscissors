function computerPlay() {
    let choice = Math.round(Math.random() * 2);

    return choice === 0? 'rock'
            : choice === 1? 'paper'
            : 'scissors';
}

function playRound(playerSelection, computerSelection) {
    if( playerSelection === 'rock') {
        if( computerSelection == 'paper') return 'computer';
        else if( computerSelection == 'scissors') return 'player';
    }
    else if( playerSelection === 'paper') {
        if(computerSelection == 'scissors') return 'computer';
        if(computerSelection == 'rock') return 'player';
    }
    else if( playerSelection === 'scissors') {
        if(computerSelection == 'rock') return 'computer';
        if(computerSelection == 'paper') return 'player';
    }

    return 'tie';
}

function displayScore(playerScore, computerScore) {
    playerScoreHTML.innerText = playerScore;
    computerScoreHTML.innerText = computerScore;
}

function resetScore() {
    playerScore = 0;
    computerScore = 0;
    playerScoreHTML.innerText = playerScore;
    computerScoreHTML.innerText = computerScore;
}

function resetGame() {
    resetScore();
    // winMsgHTML.innerText = 'NO WINNERS';
}

function displayWinMessage(winner)
{
    winMsgHTML.innerText = `${winner} wins!`;
}

function game (event) {
    let computerSelection = computerPlay();

    let roundResult = playRound(playerSelection, computerSelection);
    if(roundResult === 'computer'){
        computerScore++;
    }
    else if(roundResult === 'player') {
        playerScore++;
    }
    
    displayScore(playerScore, computerScore);
    
    
    if(playerScore === 5){ 
        displayWinMessage('player');
        resetGame();
    } 
    else if(computerScore === 5) {
        displayWinMessage('computer');
        resetGame();
    }
}



/////////    DOM MANIPULATION   /////////
const btnRock = document.querySelector('#rock');
const btnPaper = document.querySelector('#paper');
const btnScissors = document.querySelector('#scissors');

let playerSelection;
let playerScore = 0;
let computerScore = 0;
const playerScoreHTML = document.querySelector('.score-player');
const computerScoreHTML = document.querySelector('.score-computer');

const winMsgHTML = document.querySelector('.win-msg');


btnRock.addEventListener('click', () => {
    playerSelection = btnRock.value;
    game();
})
btnPaper.addEventListener('click', () => {
    playerSelection = btnPaper.value;
    game();
})
btnScissors.addEventListener('click', () => {
    playerSelection = btnScissors.value;
    game();
})

