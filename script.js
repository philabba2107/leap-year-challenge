function checkLeapYear() {
  const year = document.getElementById("yearInput").value;
  const output = document.getElementById("output");
  const emoji = document.getElementById("emoji");
  const checkBtn = document.getElementById("checkBtn");
  const resetBtn = document.getElementById("resetBtn");

  if (year === "") {
    output.innerText = "Please enter a year!";
    emoji.innerText = "🤔";
    return;
  }

  let message = "";
  let symbol = "";

  // Leap year logic
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
  resetBtn.style.display = "inline-block";
}

function resetGame() {
  const yearInput = document.getElementById("yearInput");
  const output = document.getElementById("output");
  const emoji = document.getElementById("emoji");
  const checkBtn = document.getElementById("checkBtn");
  const resetBtn = document.getElementById("resetBtn");

  yearInput.value = "";
  output.innerText = "";
  emoji.innerText = "";

  yearInput.disabled = false;
  checkBtn.style.display = "inline-block";
  resetBtn.style.display = "none";

  yearInput.focus();
}
