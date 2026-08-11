function updateDisplay(num) {
  uperDiv.textContent = `${num}`.trim();
}

function operate(nu1, nu2, operator) {
  let n1 = Number(nu1);
  let n2 = Number(nu2);
  let result = 0;
  console.log(n1, n2, operator);
  if (operator === "+") {
    result = n1 + n2;
  } else if (operator === "-") {
    result = n1 - n2;
  } else if (operator === "*") {
    result = n1 * n2;
  } else if (operator === "/") {
    result = n1 / n2;
  }
  console.log(result);
  uperDiv.textContent = result;
}

console.log("conected");
let conter = 0;
let nu1 = "";
let nu2 = "";
let operator = "";
const main = document.querySelector("#main");

const uperDiv = document.createElement("div");
uperDiv.classList.add("display");
main.appendChild(uperDiv);

const div = document.createElement("div");
div.classList.add("btn");
main.appendChild(div);

const opDiv = document.createElement("div");
opDiv.classList.add("operatorsDiv");
div.appendChild(opDiv);

const btnDiv = document.createElement("div");
btnDiv.classList.add("btnDiv");
div.appendChild(btnDiv);

const equalDiv = document.createElement("div");
equalDiv.classList.add("equal");
div.appendChild(equalDiv);

for (let b = 0; b <= 9; b++) {
  let btnId = `${b}`;
  const buttons = document.createElement("button");
  buttons.id = btnId;
  buttons.classList.add("numbers");
  buttons.innerText = `${b}`;
  buttons.style.padding = "10px 20px";

  btnDiv.appendChild(buttons);
}

const equal = document.createElement("button");
equal.innerText = "=";
equal.style.padding = "10px 20px";
equal.id = "equal";
equalDiv.appendChild(equal);

const nullBnt = document.createElement("button");
nullBnt.innerText = " ";
nullBnt.style.padding = "10px 23px";
nullBnt.id = "erase";
div.appendChild(nullBnt);

const multiply = document.createElement("button");
multiply.innerText = "x";
multiply.style.padding = "10px 20px";
multiply.id = "multiply";
opDiv.appendChild(multiply);

const suming = document.createElement("button");
suming.innerText = "+";
suming.style.padding = "10px 20px";
suming.id = "suming";
opDiv.appendChild(suming);

const subtract = document.createElement("button");
subtract.innerText = "-";
subtract.style.padding = "10px 20px";
subtract.id = "subtract";
opDiv.appendChild(subtract);

const division = document.createElement("button");
division.innerText = "/";
division.style.padding = "10px 20px";
division.id = "division";
opDiv.appendChild(division);

const numbers = document.querySelectorAll("#main .btn .btnDiv .numbers  ");

numbers.forEach((button) => {
  button.addEventListener("click", () => {
    const numberId = button.id;

    if (operator === "") {
      nu1 += numberId;
      console.log("number 1: ", nu1);
      updateDisplay(nu1);
    } else {
      nu2 += numberId;
      console.log("number2:", nu2);
      updateDisplay(nu2);
    }
  });
});

const operatorsBtn = document.querySelectorAll("#main .operatorsDiv button");

operatorsBtn.forEach((button) => {
  button.addEventListener("click", () => {
    if (nu1 !== "") {
      if (button.id === "multiply") {
        operator = "*";
      } else if (button.id === "suming") {
        operator = "+";
      } else if (button.id === "subtract") {
        operator = "-";
      } else if (button.id === "division") {
        operator = "/";
      }
    }
    console.log(operator);
  });
});

const equalBtn = document.querySelector("#equal");
equalBtn.addEventListener("click", () => {
  operate(nu1, nu2, operator);
  nu1 = "";
  nu2 = "";
  operator = "";
});

const eraseBtn = document.querySelector("#erase");
eraseBtn.addEventListener("click", () => {
  console.clear;
  nu1 = "";
  nu2 = "";
  operator = "";
  operate(nu1, nu2, operator);
});
