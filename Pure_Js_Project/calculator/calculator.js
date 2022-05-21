const textArea = document.getElementById("textArea");

function insert(num) {
  textArea.value = textArea.value + num;
}

function equal() {
  let exp = textArea.value;
  if (exp) {
    textArea.value = eval(exp);
  }
}

function backspace() {
  let exp = textArea.value;
  textArea.value = exp.substring(0, exp.length - 1);
}

function clr() {
  textArea.value = " ";
}

//Factorial find
function fact() {
  let factNumber = Number(textArea.value);
  let factValue = 1;

  for (i = 1; i <= factNumber; i++) {
    factValue = factValue * i;
  }

  textArea.value = factValue;
}

//Square root

function sqrtValue() {
  let value = textArea.value;
  textArea.value = Math.sqrt(value);
}

//Power
function powValue() {
  let value = textArea.value;
  textArea.value = Math.pow(value, 2);
}

//Cube
function cubValue() {
  let value = textArea.value;
  textArea.value = Math.pow(value, 3);
}

//Sin
function sine() {
  let value = textArea.value;
  textArea.value = Math.sin(value);
}

//Cos
function cosine() {
  let value = textArea.value;
  textArea.value = Math.cos(value);
}

//Tan
function tange() {
  let value = textArea.value;
  textArea.value = Math.tan(value);
}

//Cosec
function answer() {
  textArea.value = "Ans";
}

//Percentage
function percentage() {
  let expense = prompt("Total Expenses :");
  let income = prompt("Total Income:");

  const result = eval((expense / income) * 100);

  alert(`Your Expense Percentage is :' ${result}`);
}
