let startTime = null;

const passwordInput = document.getElementById("password");

passwordInput.addEventListener("keydown", (e) => {
  if (startTime === null) {
    startTime = new Date(); // start time on first key
  }
});

document.getElementById("submitBtn").addEventListener("click", () => {
  const endTime = new Date();
  const typedText = passwordInput.value.trim();
  const wordCount = typedText.length / 5; // assume 5 characters = 1 word

  let wpm = 0;
  if (startTime && typedText.length > 0) {
    const timeDiff = (endTime - startTime) / 1000 / 60; // minutes
    wpm = wordCount / timeDiff;
  }

  const resultText = document.getElementById("result");

  if (wpm > 40) {
    resultText.textContent = "Password incorrect";
    resultText.style.color = "red";
  } else {
    resultText.textContent = "Login successful";
    resultText.style.color = "green";
  }

  // Reset for next attempt
  startTime = null;
});
