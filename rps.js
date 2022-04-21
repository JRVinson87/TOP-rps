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
                return "Draw!";
                break;
            case "paper":
                return "You lose! Paper beats rock.";
                break;
            case "scissors":
                return "You win! Rock beats scissors."
                break;
        }
    } else if (playerSelection.toLowerCase() === "paper") {
        switch (computerSelection) {
            case "rock":
                return "You win! Paper beats rock.";
                break;
            case "paper":
                return "Draw";
                break;
            case "scissors":
                return "You lose! Scissors beats paper."
                break;
        }
    } else if (playerSelection.toLowerCase() === "scissors") {
        switch (computerSelection) {
            case "rock":
                return "You lose! Rock beats scissors.";
                break;
            case "paper":
                return "You win! Scissors beats paper.";
                break;
            case "scissors":
                return "Draw!"
                break;
        }
    }
}

let playerSelection = "SCIssors";
let computerSelection = computerPlay();
console.log(computerSelection);

console.log(playRound(playerSelection, computerSelection));