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

function disableButtons() {
    btnRock.disabled = true;
    btnScissors.disabled = true;
    btnPaper.disabled = true;
    btnRock.classList.add('disabled');
    btnPaper.classList.add('disabled');
    btnScissors.classList.add('disabled');
}

function enableButtons() {
    btnRock.disabled = false;
    btnScissors.disabled = false;
    btnPaper.disabled = false;
    btnRock.classList.remove('disabled');
    btnPaper.classList.remove('disabled');
    btnScissors.classList.remove('disabled');
}

function resetGame() {
    resetScore();
    enableButtons();
    someoneWon = false;
    winMsgHTML.innerText = '';
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
    
    
    if(someoneWon) resetGame();
    else if(playerScore === 5){ 
        displayWinMessage('player');
        disableButtons();
        someoneWon=true;
    } 
    else if(computerScore === 5) {
        displayWinMessage('computer');
        disableButtons();
        someoneWon=true;
    }
}



/////////    DOM MANIPULATION   /////////
const btnRock = document.querySelector('#rock');
const btnPaper = document.querySelector('#paper');
const btnScissors = document.querySelector('#scissors');
const btnReset = document.querySelector('#restart');

let playerSelection;

const playerScoreHTML = document.querySelector('.score-player');
let playerScore = 0;
const computerScoreHTML = document.querySelector('.score-computer');
let computerScore = 0;

const winMsgHTML = document.querySelector('.win-msg');

let someoneWon = false;

resetGame();

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

btnReset.addEventListener('click', () => {
    resetGame();
})

