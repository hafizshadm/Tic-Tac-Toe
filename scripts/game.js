function startNewGame() {
  if (players[0].name === "" || players[1].name === "") {
    alert("Please set player names for both players!");
    return;
  }
  gameBoard.style.display = "block";
}

function switchPlayer() {
  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
}

function selectGameField(event) {
  event.target.textContent = players[activePlayer].symbol;
  event.target.classList.add("disabled");
  switchPlayer();
}
