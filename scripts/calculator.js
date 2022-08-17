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
        case "ADD":
            return Add(a, b);

        case "SUB":
            return Subtract(a, b);

        case "MULT":
            return Multiply(a, b);

        case "DIVI":
            return Divide(a, b);
    }
}

export { Operate };