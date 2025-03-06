const container = document.querySelector("#container");
const display = document.createElement("div");
const buttonContainer = document.createElement("div");
const digitContainer = document.createElement("div");
const digitButton = document.createElement("button");
const operationButtonContainer = document.createElement("div");
const operationButton = document.createElement("button");

display.classList.toggle("display");
buttonContainer.classList.toggle("buttonContainer");
digitContainer.classList.toggle("digitContainer");
operationButtonContainer.classList.toggle("operationContainer");
digitButton.classList.toggle("digitButton");
operationButton.classList.toggle("operationButton");

const addOperationButton = operationButton.cloneNode(true);
const subtractOperationButton = operationButton.cloneNode(true);
const multiplyOperationButton = operationButton.cloneNode(true);
const divideOperationButton = operationButton.cloneNode(true);
const equalOperationButton = operationButton.cloneNode(true);
const clearOperationButton = operationButton.cloneNode(true);

display.textContent = "000";
addOperationButton.textContent = "+";
subtractOperationButton.textContent = "-";
multiplyOperationButton.textContent = "x";
divideOperationButton.textContent = "÷";
equalOperationButton.textContent = "=";
clearOperationButton.textContent = "Clear";

let x, y, operator;

function add(x, y) {
  return (x + y);
}

function subtract(x, y) {
  return (x - y);
}

function multiply(x, y) {
  return (x * y);
}

function divide(x, y) {
  return (x / y);
}

function operate(operator, x, y) {

}

for (let i = 0; i < 10; i++) {
  digitButton.textContent = i;
  digitButton.setAttribute("id", `${i}`);
  digitContainer.appendChild(digitButton.cloneNode(true));
}

operationButtonContainer.appendChild(addOperationButton);
operationButtonContainer.appendChild(subtractOperationButton);
operationButtonContainer.appendChild(multiplyOperationButton);
operationButtonContainer.appendChild(divideOperationButton);
operationButtonContainer.appendChild(equalOperationButton);
operationButtonContainer.appendChild(clearOperationButton);

buttonContainer.appendChild(operationButtonContainer);
buttonContainer.appendChild(digitContainer);

container.appendChild(display);
container.appendChild(buttonContainer);

