const gameData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;
let gameIsOver = false;
const players = [
  {
    name: "",
    symbol: "X",
  },
  {
    name: "",
    symbol: "O",
  },
];

const playerConfigOverlayElement = document.getElementById("config-overlay");
const backDropElement = document.getElementById("backdrop");
const formElement = document.querySelector("form");
const playerName = document.getElementById("player-name");
const editPlayer1BtnElement = document.getElementById("edit-player-1-btn");
const editPlayer2BtnElement = document.getElementById("edit-player-2-btn");
const errorsOutputElement = document.getElementById("config-error");
const cancelBtnConfig = document.getElementById("cancel-player-config");
const startNewGameBtnElement = document.getElementById("start-game-btn");
const gameBoard = document.getElementById("active-game");
// const gameFiledElements = document.querySelectorAll("#game-board li");
const gameBoardElement = document.getElementById("game-board");
const activePlayerNameElement = document.getElementById("active-player-name");
const gameOverElement = document.getElementById("game-over");

editPlayer1BtnElement.addEventListener("click", openPlayerConfig);
editPlayer2BtnElement.addEventListener("click", openPlayerConfig);
cancelBtnConfig.addEventListener("click", closeBtnConfig);
backDropElement.addEventListener("click", closeBtnConfig);
formElement.addEventListener("submit", savePlayerConfig);
startNewGameBtnElement.addEventListener("click", startNewGame);
// for (const gameFiledElement of gameFiledElements) {
//   gameFiledElement.addEventListener("click", selectGameField);
// }
gameBoard.addEventListener("click", selectGameField);
