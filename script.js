function checkLeapYear() {
  const year = document.getElementById("yearInput").value.trim(); // 🟢 trim to ignore spaces
  const output = document.getElementById("output");
  const emoji = document.getElementById("emoji");
  const checkBtn = document.getElementById("checkBtn");
  const resetBtn = document.getElementById("resetBtn");

  // 🟢 Case 1: Handle empty input properly
  if (year === "") {
    output.innerText = "Please enter a year!";
    emoji.innerText = "🤔";

    // 🟢 Disable input + show reset button even for error
    document.getElementById("yearInput").disabled = true;
    checkBtn.style.display = "none";
    resetBtn.classList.add("show");
    return;
  }

  // Normal logic if year provided
  let message = "";
  let symbol = "";

  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        message = "Leap year.";
        symbol = "🎉🕺";
      } else {
        message = "Not leap year.";
        symbol = "😢";
      }
    } else {
      message = "Leap year.";
      symbol = "🎉🕺";
    }
  } else {
    message = "Not leap year.";
    symbol = "😢";
  }

  output.innerText = message;
  emoji.innerText = symbol;

  // Disable input and show reset button
  document.getElementById("yearInput").disabled = true;
  checkBtn.style.display = "none";
  resetBtn.classList.add("show");

  // 🎊 Confetti for Leap Year
  if (message === "Leap year.") {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  }
}

function resetGame() {
  const yearInput = document.getElementById("yearInput");
  const output = document.getElementById("output");
  const emoji = document.getElementById("emoji");
  const checkBtn = document.getElementById("checkBtn");
  const resetBtn = document.getElementById("resetBtn");

  // Reset values
  yearInput.value = "";
  output.innerText = "";
  emoji.innerText = "";

  // Re-enable input
  yearInput.disabled = false;

  // Hide reset button smoothly
  resetBtn.classList.remove("show");
  setTimeout(() => {
    resetBtn.style.display = "none";
    checkBtn.style.display = "inline-block";
  }, 400);

  // Focus cursor for new entry
  yearInput.focus();
}

// ✅ Allow pressing Enter to check
document.getElementById("yearInput").addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    checkLeapYear();
  }
});
