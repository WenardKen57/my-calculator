const container = document.querySelector("#container");
const digitContainer = document.createElement("div");
const digitButton = document.createElement("button");
const operationButtonContainer = document.createElement("div");
const operationButton = document.createElement("button");

operationButton.classList.toggle("operationButton");

const addOperationButton = operationButton.cloneNode(true);
addOperationButton.textContent = "+";
const subtractOperationButton = operationButton.cloneNode(true);
subtractOperationButton.textContent = "-";
const multiplyOperationButton = operationButton.cloneNode(true);
multiplyOperationButton.textContent = "x";
const divideOperationButton = operationButton.cloneNode(true);
divideOperationButton.textContent = "÷";

operationButtonContainer.appendChild(addOperationButton);
operationButtonContainer.appendChild(subtractOperationButton);
operationButtonContainer.appendChild(multiplyOperationButton);
operationButtonContainer.appendChild(divideOperationButton);

for (let i = 0; i < 10; i++) {
  digitButton.textContent = i;
  digitButton.setAttribute("id", `${i}`);
  digitContainer.appendChild(digitButton.cloneNode(true));
}

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
container.appendChild(operationButtonContainer)
container.appendChild(digitContainer);

