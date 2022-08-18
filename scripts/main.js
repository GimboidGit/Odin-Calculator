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

let displayValue;
let currentSum;

let leftOperand;
let operator;
let rightOperand;

ClearAndReset();


//Single function for all buttons.
//We'll read the button's text as a means
//of telling what the action to take is.
function ButtonClick(event)
{
    //alert(event.target.innerText);

    let buttonValue = event.target.innerText;

    if (buttonValue == "C")
    {
        ClearAndReset();
        return;
    }
}


function UpdateDisplay(value)
{
    const displayField = document.getElementById("disp");
    displayField.setAttribute("value", value);
}


function ClearAndReset()
{
    displayValue = DEFAULT_VALUE;
    currentSum = DEFAULT_VALUE;

    leftOperand = null;
    operator = null;
    rightOperand = null;

    UpdateDisplay(DEFAULT_VALUE);
}