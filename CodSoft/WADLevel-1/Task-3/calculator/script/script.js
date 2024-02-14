const display = document.getElementById("display");
let currentNumber = "";
let operator = "";
let previousNumber = "";

function appendNumber(number) {
  currentNumber += number;
  display.value = currentNumber;
}

function appendOperator(op) {
  operator = op;
  previousNumber = currentNumber;
  currentNumber = "";
}

function clearDisplay() {
  currentNumber = "";
  operator = "";
  previousNumber = "";
  display.value = "";
}

function calculate() {
  try {
    if (operator === "") {
      return;
    }
    const result = eval(previousNumber + operator + currentNumber);
    display.value = result;
    currentNumber = result.toString();
    operator = "";
    previousNumber = "";
  } catch (error) {
    display.value = "Error";
    currentNumber = "";
    operator = "";
    previousNumber = "";
  }
}


document.addEventListener("keydown", (event) => {
  const key = event.key;
  if (key.match(/\d+/)) {
      appendNumber(key);
  } else if (key === "-" ) {
      appendOperator('-');
  } else if (key === "+") {
      appendOperator('+');
    x=1;
  } else if (key === "*") {
      appendOperator('*');
  } else if (key === "/") {
      appendOperator('/');
  } else if (key === "Enter") {
      calculate();
  } else if (key === "c") {
      clearDisplay();
  }
});
