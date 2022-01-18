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

const game = event => {
    let playerSelection = event.path[0].id;
    let playerScore = 0;
    let computerScore = 0;
    let isPlayerLose;
    


    isPlayerLose = playRound(playerSelection, computerPlay());

    if(isPlayerLose){
        computerScore++;
        console.log("You lose this round :(");
    }
    else if(!isPlayerLose) {
        playerScore++;
        console.log("You win this round!");
    }
    else {
        console.log("It's a tie!");
    }



    if(computerScore > playerScore) console.log('You lose!');
    else if(computerScore < playerScore) console.log('You win!');

}



/////////    DOM MANIPULATION   /////////
const btnRock = document.querySelector('#rock');
const btnPaper = document.querySelector('#paper');
const btnScissors = document.querySelector('#scissors');

btnRock.addEventListener('click', game);
btnPaper.addEventListener('click', game);
btnScissors.addEventListener('click', game);

// console.log(btnRock.value);