import { Operate } from "./calculator.js";

//#region Code Tests

// const body = document.querySelector("body");
// const button = document.createElement("button")
// button.textContent = "Test Calc";
// button.addEventListener("click", Tester);
// body.appendChild(button);

// function Tester()
// {
//     let res = Operate("ADD", 2, 8);
//     alert(res);
// }

//#endregion Code Tests


//#region DOM Interaction

const buttons = document.querySelectorAll("button");
buttons.forEach
    (button => button.addEventListener("click", ButtonClick));

//#endregion DOM Interaction


const DEFAULT_VALUE = 0;

let displayValue = DEFAULT_VALUE;
let currentSum = DEFAULT_VALUE;

let leftOperand = null;
let operator = null;
let rightOperand = null;

UpdateDisplay(DEFAULT_VALUE);



//Single function for all buttons.
//We'll read the button's text as a means
//of telling what the action to take is.
function ButtonClick(event)
{
    alert(event.target.innerText);
}


function UpdateDisplay(value)
{
    const displayField = document.getElementById("disp");
    displayField.setAttribute("value", value);
}