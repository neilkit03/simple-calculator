const previousTextElement = document.querySelector(".previous");
const temporaryResult = document.querySelector(".temp-result");
const currentTextElement = document.querySelector(".current");
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const equalsButton = document.querySelector(".equals");
const allClearButton = document.querySelector(".allclear");
const deleteButton = document.querySelector(".delete");

let screen1 = "";
let screen2 = "";
let result = null;
let lastOperation = "";
let haveDot = false;

numberButtons.forEach((number) => {
  number.addEventListener("click", (e) => {
    if (e.target.innerText === "." && !haveDot) {
      haveDot = true;
    } else if (e.target.innerText === "." && haveDot) {
      return;
    }
    screen2 += e.target.innerText;
    currentTextElement.innerText = screen2;
  });
});

operatorButtons.forEach((operator) => {
  operator.addEventListener("click", (e) => {
    if (!screen2) result;
    haveDot = false;
    const operationName = e.target.innerText;
    if (screen1 && screen2 && lastOperation) {
      mathOperation();
    } else {
      result = parseFloat(screen2);
    }
    clearVar(operationName);
    lastOperation = operationName;
    console.log(result);
  });
});

function clearVar(name = "") {
  screen1 += screen2 + "" + name + "";
  previousTextElement.innerText = screen1;
  currentTextElement.innerText = "";
  screen2 = "";
  temporaryResult.innerText = result;
}

function mathOperation() {
  if (lastOperation === "x") {
    result = parseFloat(result) * parseFloat(screen2);
  } else if (lastOperation === "+") {
    result = parseFloat(result) + parseFloat(screen2);
  } else if (lastOperation === "-") {
    result = parseFloat(result) - parseFloat(screen2);
  } else if (lastOperation === "/") {
    result = parseFloat(result) / parseFloat(screen2);
  }
}

equalsButton.addEventListener("click", (e) => {
  if (!screen1 || !screen2) return;
  haveDot = false;
  mathOperation();
  clearVar();
  currentTextElement.innerText = result;
  temporaryResult.innerText = "";
  screen2 = result;
  screen1 = "";
});

allClearButton.addEventListener("click", (e) => {
  previousTextElement.innerText = "0";
  currentTextElement.innerText = "0";
  screen1 = "";
  screen2 = "";
  result = "";
  temporaryResult.innerText = "0";
});

deleteButton.addEventListener("click", (e) => {
  currentTextElement.innerText = "";
  screen2 = "";
});

window.addEventListener("keydown", (e) => {
  if (
    e.key === "0" ||
    e.key === "1" ||
    e.key === "2" ||
    e.key === "3" ||
    e.key === "4" ||
    e.key === "5" ||
    e.key === "6" ||
    e.key === "7" ||
    e.key === "8" ||
    e.key === "9" ||
    e.key === "."
  ) {
    clickButton(e.key);
  } else if (e.key === "x" || e.key === "+" || e.key === "-" || e.key === "/") {
    clickOperator(e.key);
  } else if (e.key === "=") {
    clickEqual();
  }
});

function clickButton(key) {
  numberButtons.forEach((button) => {
    if (button.innerText === key) {
      button.click();
    }
  });
}

function clickOperator(key) {
  operatorButtons.forEach((button) => {
    if (button.innerText === key) {
      button.click();
    }
  });
}

function clickEqual() {
  equalsButton.click();
}
