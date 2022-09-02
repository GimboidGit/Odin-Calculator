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

let DisplayValue;
let OngoingSum;

let LeftOperand;
let Operator;
let RightOperand;

ClearAndReset();


//Single function for all buttons.
function ButtonClick(event)
{
    let parent = event.target.parentNode.className;
    let buttonValue = event.target.innerText;

    if (buttonValue === "C")
    {
        ClearAndReset();
        return;
    }

    if (buttonValue === "." && !DisplayValue.includes("."))
    {
        DisplayValue += ".";
        UpdateDisplay(DisplayValue);
        return;
    }

    if (Number.isInteger(Number(buttonValue)))
    {
        if (Operator === null && OngoingSum)
        {
            ClearAndReset();
            return;
        }

        DisplayValue === String(DEFAULT_VALUE)
            ? DisplayValue = buttonValue 
            : DisplayValue += buttonValue;

        UpdateDisplay(DisplayValue);
        return;
    }

    if (parent === "operators")
    {
        if (!OngoingSum)
            UpdateOperand(DisplayValue);
        
        //If we already have an operator
        //then "shortcut" to calculate/"=" button
        if (Operator !== null)
        {
            Calculate();
            Operator = buttonValue;
            return;
        }
        
        UpdateDisplay(buttonValue);
        DisplayValue = String(DEFAULT_VALUE);
        Operator = buttonValue;
        return;
    }
    
    if (buttonValue === "=")
    {
        if (Operator === null)
            return;

        Calculate();
    }
}


function Calculate()
{
    if (Operator === "÷" && DisplayValue === String(DEFAULT_VALUE))
    {
        ClearAndReset();
        UpdateDisplay("Can't Divide by 0!");
        return;
    }

    UpdateOperand(DisplayValue);
        
    let result = Operate(Operator, Number(LeftOperand), Number(RightOperand));
    UpdateDisplay(result);
    
    DisplayValue = String(DEFAULT_VALUE);

    LeftOperand = result;
    Operator = null;
    RightOperand = null;

    OngoingSum = true;
}


function ClearAndReset()
{
    DisplayValue = String(DEFAULT_VALUE);
    OngoingSum = false;

    LeftOperand = null;
    Operator = null;
    RightOperand = null;

    UpdateDisplay(DEFAULT_VALUE);
}


function UpdateDisplay(value)
{
    const displayField = document.getElementById("disp");
    displayField.setAttribute("value", value);
}


function UpdateOperand(value)
{
    LeftOperand === null
    ? LeftOperand = value
    : RightOperand = value;
}