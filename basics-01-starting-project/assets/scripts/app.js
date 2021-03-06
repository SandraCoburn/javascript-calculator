const userInput = document.getElementById("input-number");
const addBtn = document.getElementById("btn-add");
const subtractBtn = document.getElementById("btn-subtract");
const multiplyBtn = document.getElementById("btn-multiply");
const divideBtn = document.getElementById("btn-divide");

const currentResultOutput = document.getElementById("current-result");
const currentCalculationOutput = document.getElementById("current-calculation");

function outputResult(result, text) {
  currentResultOutput.textContent = result;
  currentCalculationOutput.textContent = text;
}

//Global variables
const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

//This comes from input field
function getUserNumberInput() {
  return parseInt(userInput.value);
}

//generates and writes calculating log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription); //from vendor file
}

function calculateResult(calculationType) {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  let mathOperator;
  if (calculationType === "SUBTRACT") {
    currentResult = currentResult - enteredNumber;
    mathOperator = "-";
  } else if (calculationType === "ADD") {
    currentResult += enteredNumber;
    mathOperator = "+";
  } else if (calculationType === "MULTIPLY") {
    currentResult *= enteredNumber;
    mathOperator = "*";
  } else if (calculationType === "DIVIDE") {
    currentResult /= enteredNumber;
    mathOperator = "/";
  }

  createAndWriteOutput(mathOperator, initialResult, enteredNumber);
  writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}

function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult
  };
  logEntries.push(logEntry);
}

function add() {
  calculateResult("ADD");
}

function subtract() {
  calculateResult("SUBTRACT");
}

function multiply() {
  calculateResult("MULTIPLY");
}
function devide() {
  calculateResult("DEVIDE");
  // const enteredNumber = getUserNumberInput();
  // const initialResult = currentResult;

  // currentResult = currentResult / enteredNumber;
  // createAndWriteOutput("/", initialResult, enteredNumber);
  // writeToLog("DEVIDE", initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", devide);
