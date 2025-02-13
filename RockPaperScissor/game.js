function playGame(playerChoice) {
  document.getElementById("output").innerHTML = `Your choice: ${playerChoice}`;

  let choices = ["Rock", "Paper", "Scissor"];
  let computerChoice = choices[Math.floor(Math.random() * 3)];

  setTimeout(() => {
    document.getElementById("output").innerHTML += `<br>Computer choice: ${computerChoice}`;
  }, 2000);

  let result;
  if (playerChoice === computerChoice) {
    result = "It's a tie!";
  } else if (
    (playerChoice === "Rock" && computerChoice === "Scissor") ||
    (playerChoice === "Paper" && computerChoice === "Rock") ||
    (playerChoice === "Scissor" && computerChoice === "Paper")
  ) {
    result = "You win!";
  } else {
    result = "Computer wins!";
  }

  setTimeout(() => {
    document.getElementById("output").innerHTML += `<br>${result}`;
  }, 4000);
}

function clearOutput() {
  document.getElementById("output").innerHTML = "";
}
