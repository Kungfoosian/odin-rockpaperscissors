function computerPlay() {
    let choice = Math.round(Math.random() * 2);

    return choice === 0? 'rock'
            : choice === 1? 'paper'
            : 'scissors';
}

function checkValid(input, validChoices) {
    input = input.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    input = input.trim();
    input = input.toLowerCase();

    for(let i = 0; i < validChoices.length; i++) {
        if(input === validChoices[i]) return input;
    }

    return null;
}

function getPlayerChoice(){
    return prompt('Make a selection (Rock, Paper, Scissors):');
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

function game(rounds = 1) {
    const VALID_CHOICES = ['rock', 'paper', 'scissors'];
    let playerSelection = '';
    let playerScore = 0;
    let computerScore = 0;
    let isPlayerLose;
    
    for(let i = 0; i < rounds; i++) {
        do {
            playerSelection = getPlayerChoice();
        }
        while(!checkValid(playerSelection,VALID_CHOICES));

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
    }


    if(computerScore > playerScore) console.log('You lose!');
    else if(computerScore < playerScore) console.log('You win!');
    else console.log("It's a tie!");
}

