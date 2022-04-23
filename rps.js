const roundResult = document.querySelector('#round-result');
const buttons = document.querySelectorAll('button');
const playerWins = document.querySelector('#player-wins');
const computerWins = document.querySelector('#computer-wins');
const draws = document.querySelector('#draws');

let playerCount = 0;
let computerCount = 0;
let drawsCount = 0;

playerWins.textContent = playerCount;
draws.textContent = drawsCount;
computerWins.textContent = computerCount;


function computerPlay() {
    x = Math.floor(Math.random() * 10);
    
    switch(x) {
        case 0:
        case 1:
        case 2:
        case 3:
            return "rock";
            break;
        case 4:
        case 5:
        case 6:
            return "paper";
            break;
        case 7:
        case 8:
        case 9:
            return "scissors";
            break;
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === "rock") {
        switch(computerSelection) {
            case "rock":
                roundResult.textContent = "Draw!";
                drawsCount++;
                draws.textContent = drawsCount;
                break;
            case "paper":
                roundResult.textContent = "Paper beats rock, you lose!";
                computerCount++;
                computerWins.textContent = computerCount;
                break;
            case "scissors":
                roundResult.textContent = "Rock beats scissors, you win!";
                playerCount++;
                playerWins.textContent = playerCount;
                break;
        }
    } else if (playerSelection.toLowerCase() === "paper") {
        switch (computerSelection) {
            case "rock":
                roundResult.textContent = "Paper beats rock, you win!";
                playerCount++;
                playerWins.textContent = playerCount;
                break;
            case "paper":
                roundResult.textContent = "Draw!";
                drawsCount++;
                draws.textContent = drawsCount;
                break;
            case "scissors":
                roundResult.textContent = "Scissors beat paper, you lose!";
                computerCount++;
                computerWins.textContent = computerCount;
                break;
        }
    } else if (playerSelection.toLowerCase() === "scissors") {
        switch (computerSelection) {
            case "rock":
                roundResult.textContent = "Rock beats scissors, you lose!";
                playerCount++;
                computerWins.textContent = playerCount;
                break;
            case "paper":
                roundResult.textContent = "Scissors beats paper, you win!";
                computerCount++;
                playerWins.textContent = computerCount;
                break;
            case "scissors":
                roundResult.textContent = "Draw!";
                drawsCount++;
                draws.textContent = drawsCount;
                break;
        }
    }
}

// function game() {
//     let count = 0;

//     for (let i = 0; i < 5; i++) {
//         let playerSelection = prompt("Choose rock, paper, or scissors");
//         let computerSelection = computerPlay();
//         count += playRound(playerSelection, computerSelection);
//     }
//     if (count > 2) {
//         return console.log("You win! " + count + " out of 5.")
//     } else {
//         return console.log("You lose!" + count + " out of 5.")
//     }
// }

// game();


buttons.forEach((button) => {
  button.addEventListener('click', () => {
    playRound(button.id, computerPlay());

    if (playerCount == 5) {
        computerCount = 0;
        playerCount = 0;
        return console.log("You win!")

    } else if (computerCount == 5){
        computerCount = 0;
        playerCount = 0;
        return console.log("You lose!")
    }
  });
});
