function computerPlay() {
    let choice = Math.round(Math.random() * 3);

    return choice === 0? 'Rock'
            : choice === 1? 'Paper'
            : 'Scissors';
}

function check(input) {

}

function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay();

    do {
        playerSelection = prompt('Make your choice:');
    }
    while (check(playerSelection))
    {

    }
}

