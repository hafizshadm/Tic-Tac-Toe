const playerConfigOverlayElement = document.getElementById("config-overlay");
const backDropElement = document.getElementById("backdrop");
const formElement = document.querySelector("form");

const editPlayer1BtnElement = document.getElementById("edit-player-1-btn");
const editPlayer2BtnElement = document.getElementById("edit-player-2-btn");

const cancelBtnConfig = document.getElementById("cancel-player-config");

editPlayer1BtnElement.addEventListener("click", openPlayerConfig);
editPlayer2BtnElement.addEventListener("click", openPlayerConfig);

cancelBtnConfig.addEventListener("click", closeBtnConfig);
backDropElement.addEventListener("click", closeBtnConfig);
formElement.addEventListener("submit", savePlayerConfig);
