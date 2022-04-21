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
                return 0;
                break;
            case "paper":
                return 0;
                break;
            case "scissors":
                return 1;
                break;
        }
    } else if (playerSelection.toLowerCase() === "paper") {
        switch (computerSelection) {
            case "rock":
                return 1;
                break;
            case "paper":
                return 0;
                break;
            case "scissors":
                return 0;
                break;
        }
    } else if (playerSelection.toLowerCase() === "scissors") {
        switch (computerSelection) {
            case "rock":
                return 0;
                break;
            case "paper":
                return 1;
                break;
            case "scissors":
                return 0;
                break;
        }
    }
}

function game() {
    let count = 0;

    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Choose rock, paper, or scissors");
        let computerSelection = computerPlay();
        count += playRound(playerSelection, computerSelection);
    }
    if (count > 2) {
        return console.log("You win! " + count + " out of 5.")
    } else {
        return console.log("You lose!" + count + " out of 5.")
    }
}

game();
