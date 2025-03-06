const container = document.querySelector("#container");

const operatorButtonContainer = document.createElement("div");
const operatorButton = document.createElement("button");

const digitContainer = document.createElement("div");
const digitButton = document.createElement("button");

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

container.appendChild(digitContainer);

