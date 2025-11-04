function checkLeapYear() {
  const year = document.getElementById("yearInput").value;
  const output = document.getElementById("output");
  const emoji = document.getElementById("emoji");

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
}
