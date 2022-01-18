function computerPlay() {
    let choice = Math.round(Math.random() * 2);

    return choice === 0? 'rock'
            : choice === 1? 'paper'
            : 'scissors';
}

function playRound(playerSelection, computerSelection) {
    let isPlayerLose = null;

    if( playerSelection === 'rock') {
        if( computerSelection == 'paper') isPlayerLose = true;
        else if( computerSelection == 'scissors') isPlayerLose = false;
    }
    else if( playerSelection === 'paper') {
        if(computerSelection == 'scissors') isPlayerLose = true;
        if(computerSelection == 'rock') isPlayerLose = false;
    }
    else if( playerSelection === 'scissors') {
        if(computerSelection == 'rock') isPlayerLose = true;
        if(computerSelection == 'paper') isPlayerLose = false;
    }

    return isPlayerLose;
}

function displayScore(playerScore, computerScore) {
    playerScoreHTML.innerText = playerScore;
    computerScoreHTML.innerText = computerScore;
}

function resetScore() {
    playerScoreHTML.innerText = 0;
    computerScoreHTML.innerText = 0;
}

function displayWinMessage(winner)
{
    winMsgHTML.innerText = `${winner} wins!`;
}

function game (event) {
    let playerSelection = event.path[0].id;
    let isPlayerLose;
    


    isPlayerLose = playRound(playerSelection, computerPlay());
    if(isPlayerLose){
        computerScore++;
    }
    else if(!isPlayerLose) {
        playerScore++;
    }
    
    displayScore(playerScore, computerScore);
    
    
    if(playerScore === 5){ 
        displayWinMessage('player');
        resetScore();
        return;
    } 
    else if(computerScore === 5) {
        displayWinMessage('computer');
        resetScore();
        return;
    }
}



/////////    DOM MANIPULATION   /////////
const btnRock = document.querySelector('#rock');
const btnPaper = document.querySelector('#paper');
const btnScissors = document.querySelector('#scissors');

btnRock.addEventListener('click', game);
btnPaper.addEventListener('click', game);
btnScissors.addEventListener('click', game);

let playerScore = 0;
let computerScore = 0;
const playerScoreHTML = document.querySelector('.score-player');
const computerScoreHTML = document.querySelector('.score-computer');

const winMsgHTML = document.querySelector('.win-msg');