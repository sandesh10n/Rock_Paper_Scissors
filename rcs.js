document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector("#container");
    const scoreDiv = document.querySelector("#score");
    const resultDiv = document.querySelector("#result");

    let humanScore = 0;
    let computerScore = 0;

    function getComputerChoice() {
        const choices = ["Rock", "Paper", "Scissors"];
        return choices[Math.floor(Math.random() * 3)];
    }

    function updateScore() {
        scoreDiv.textContent = `Score → You: ${humanScore} | Computer: ${computerScore}`;
    }

    function checkWinner() {
        if (humanScore === 5) {
            resultDiv.textContent = "🎉 You won the game!";
            disableButtons();
        } 
        if (computerScore === 5) {
            resultDiv.textContent = "💀 Computer won the game!";
            disableButtons();
        }
    }

    function disableButtons() {
        const buttons = document.querySelectorAll("button");
        buttons.forEach(btn => btn.disabled = true);
    }

    function playRound(playerSelection, computerSelection) {
        if (playerSelection === computerSelection) {
            resultDiv.textContent = "It's a tie!";
        } 
        else if (
            (playerSelection === "Rock" && computerSelection === "Scissors") ||
            (playerSelection === "Paper" && computerSelection === "Rock") ||
            (playerSelection === "Scissors" && computerSelection === "Paper")
        ) {
            humanScore++;
            resultDiv.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
        } 
        else {
            computerScore++;
            resultDiv.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
        }

        updateScore();
        checkWinner();
    }

    const choices = ["Rock", "Paper", "Scissors"];

    choices.forEach(choice => {
        const button = document.createElement("button");
        button.textContent = choice;

        button.addEventListener("click", () => {
            const computerChoice = getComputerChoice();
            playRound(choice, computerChoice);
        });

        container.appendChild(button);
    });

    updateScore(); // initial score
});