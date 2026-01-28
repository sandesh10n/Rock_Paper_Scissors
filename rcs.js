// const prompt = require("prompt-sync")({ sigint: true });

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const options = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

function getHumanChoice() {
    return prompt("Choose Rock, Paper or Scissors: ");
}

function playRound(humanSelection, computerSelection) {
    if (humanSelection === computerSelection) {
        console.log("It's a tie!");
        return;
    }

    if (
        (humanSelection === "Rock" && computerSelection === "Scissors") ||
        (humanSelection === "Paper" && computerSelection === "Rock") ||
        (humanSelection === "Scissors" && computerSelection === "Paper")
    ) {
        console.log("You win this round!");
        humanScore++;
    } else {
        console.log("Computer wins this round!");
        computerScore++;
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        console.log("Computer chose:", computerSelection);
        playRound(humanSelection, computerSelection);
    }

    console.log("\nFinal Score:");
    console.log("Human:", humanScore);
    console.log("Computer:", computerScore);
}

playGame();
