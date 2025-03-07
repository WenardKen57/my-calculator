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
const equalOperationButton = document.createElement("button")
const clearOperationButton = document.createElement("button");

clearOperationButton.classList.toggle("clearButton");
equalOperationButton.classList.toggle("equalButton");

addOperationButton.textContent = "+";
subtractOperationButton.textContent = "-";
multiplyOperationButton.textContent = "x";
divideOperationButton.textContent = "/";
equalOperationButton.textContent = "Equal";
clearOperationButton.textContent = "Clear";

const operation = [[], [], []];
let iOperand = 0; // Dictates what operand we're operating
let result = undefined;

function displayResult() {
  iOperand = 0;
  switch (operation[1]) {
    case "+":
      result = operation[0] + operation[2];
      // right operand becomes the result so calculation can continue after the first operation
      operation[0] = result;  
      operation[2] = 0;
      display.textContent = result;
      console.log(operation);
      break;

    case "-":
      result = operation[0] - operation[2];
      // right operand becomes the result so calculation can continue after the first operation
      operation[0] = result;  
      operation[2] = 0;
      display.textContent = result;
      console.log(operation);
      
      break;

    case "x":
      result = operation[0] * operation[2];
      // right operand becomes the result so calculation can continue after the first operation
      operation[0] = result;  
      operation[2] = 0;
      display.textContent = result;
      console.log(operation);
      break;

    case "/":
      result = operation[0] / operation[2];
      // right operand becomes the result so calculation can continue after the first operation
      operation[0] = result;  
      operation[2] = 0;
      display.textContent = result;
      console.log(operation);
      break;

    default:
      break;
  }
}

function displayOperation() {
  display.textContent = operation[iOperand];
}

digitContainer.addEventListener("click", (event) => {
  let target = event.target;

  switch (target.className) {
    case "digitButton":
      operation[iOperand] = parseInt(operation[iOperand] + target.innerHTML);
      displayOperation();
      console.log(operation);
      break;

    default:
      break;
  }
})

operationButtonContainer.addEventListener("click", (event) => {
  let target = event.target;

  switch (target.className) {
    case "operationButton":
      iOperand = 2;
      operation[1] = target.innerHTML;
      display.textContent = target.innerHTML;
      console.log(operation);
      break;

    case "clearButton":
      operation.splice(0, operation.length);
      operation[0] = 0;
      operation[1] = '';
      operation[2] = 0;
      iOperand = 0;
      display.textContent = '';
      console.log(operation);
      break;

    case "equalButton":
      displayResult();

    default:
      break;
  }
});

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

