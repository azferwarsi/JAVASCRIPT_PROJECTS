

  let timeLeft = 300; // 5 minutes in seconds
const timeDisplay = document.getElementById("time");

const timer = setInterval(() => {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;

  timeDisplay.textContent = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;

  if (timeLeft === 0) {
    clearInterval(timer);
    checkAnswers();
  }

  timeLeft--;
}, 1000);

function checkAnswers() {
  clearInterval(timer);

  const answers = {
    q1: "b",
    q2: "b",
    q3: "b",
    q4: "b",
    q5: "a"
  };

  let score = 0;
  let total = Object.keys(answers).length;

  for (let key in answers) {
    const selected = document.querySelector(`input[name="${key}"]:checked`);
    if (selected && selected.value === answers[key]) {
      score++;
    }
  }

  const playerName = document.getElementById("player-name").value.trim();

  if (playerName === "") {
    alert("Please enter your name before submitting the quiz.");
    return;
  }

  document.getElementById("result").textContent = `Player: ${playerName} | Score: ${score} out of ${total}`;
}
