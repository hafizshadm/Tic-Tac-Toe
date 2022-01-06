function openPlayerConfig() {
  playerConfigOverlayElement.style.display = "block";
  backDropElement.style.display = "block";
}

function closeBtnConfig() {
  playerConfigOverlayElement.style.display = "none";
  backDropElement.style.display = "none";
}

function savePlayerConfig(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const enteredPlayerName = formData.get("playername").trim();
  console.log(enteredPlayerName);
}
