function appendValue(val) {
  document.getElementById('display').value += val;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function deleteLast() {
  let current = document.getElementById('display').value;
  document.getElementById('display').value = current.slice(0, -1);
}

function calculate() {
  try {
    let result = eval(document.getElementById('display').value);
    document.getElementById('display').value = result;
  } catch {
    document.getElementById('display').value = 'Error';
  }
}

// ✅ Keyboard/Numpad support
document.addEventListener("keydown", function (event) {
  const key = event.key;

  if ((key >= '0' && key <= '9') || ['+', '-', '*', '/', '.'].includes(key)) {
    appendValue(key);
  } else if (key === 'Enter') {
    event.preventDefault();
    calculate();
  } else if (key === 'Backspace') {
    deleteLast();
  } else if (key === 'Escape') {
    clearDisplay();
  }
});

// 🌙 Theme Toggle
const themeBtn = document.getElementById("toggle-theme");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    themeBtn.textContent = "☀️ Light Mode";
  } else {
    themeBtn.textContent = "🌙 Dark Mode";
  }
});

// Add calculation to history
function calculate() {
  try {
    let expr = document.getElementById("display").value;
    let result = eval(expr);
    document.getElementById("display").value = result;

    let historyItem = document.createElement("p");
    historyItem.textContent = `${expr} = ${result}`;
    document.getElementById("history").appendChild(historyItem);
  } catch {
    document.getElementById("display").value = "Error";
  }
}

// 🧹 Clear History
document.getElementById("clear-history").addEventListener("click", () => {
  document.getElementById("history").innerHTML = "";
});


