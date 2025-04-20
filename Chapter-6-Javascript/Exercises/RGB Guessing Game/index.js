// Select DOM elements
const rgbValue = document.getElementById("rgbValue");
const optionsContainer = document.getElementById("options");
const resultText = document.getElementById("result");
const scoreDisplay = document.getElementById("score");
const playAgainBtn = document.getElementById("playAgain");

let score = 0;
let lives = 3;
let correctColor = "";

// Generate a random RGB string
function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

// Start a new round
function generateGame() {
  optionsContainer.innerHTML = "";
  resultText.textContent = "";
  playAgainBtn.style.display = "none";

  correctColor = getRandomColor();
  rgbValue.textContent = correctColor;

  // Insert correct answer in random position
  const correctIndex = Math.floor(Math.random() * 3);
  for (let i = 0; i < 3; i++) {
    const colorOption = document.createElement("div");
    colorOption.style.backgroundColor = i === correctIndex ? correctColor : getRandomColor();
    colorOption.addEventListener("click", () => handleChoice(colorOption.style.backgroundColor));
    optionsContainer.appendChild(colorOption);
  }
}

// Handle user's guess
function handleChoice(selectedColor) {
  if (selectedColor === correctColor) {
    resultText.textContent = "Correct!";
    resultText.style.color = "green";
    score++;
  } else {
    resultText.textContent = "Wrong!";
    resultText.style.color = "red";
    lives--;
  }

  scoreDisplay.textContent = `Score: ${score} | Lives: ${lives}`;

  if (lives > 0) {
    setTimeout(generateGame, 1000);
  } else {
    resultText.textContent = `Game Over! Final Score: ${score}`;
    resultText.style.color = "black";
    playAgainBtn.style.display = "inline-block";
  }
}

// Restart the game
playAgainBtn.addEventListener("click", () => {
  score = 0;
  lives = 3;
  scoreDisplay.textContent = `Score: ${score} | Lives: ${lives}`;
  generateGame();
});

generateGame(); // Initial game
