function Add(a, b)
{
    return a + b;
}

function Subtract(a, b)
{
    return a - b;
}

function Multiply(a, b)
{
    return a * b;
}

function Divide(a, b)
{
    return a / b;
}

function Operate(operation, a, b)
{
    switch (operation)
    {
        case "+":
            return Add(a, b);

        case "-":
            return Subtract(a, b);

        case "x":
            return Multiply(a, b);

        case "÷":
            return Divide(a, b);
    }
}

export { Operate };