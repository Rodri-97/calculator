function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(operator, sum, newNum) {
    switch(operator) {
        case "+":
            sum = add(sum, newNum);
            break;
        case "-":
            sum = subtract(sum, newNum);
            break;
        case "*":
            sum = multiply(sum, newNum);
            break;
        case "/":
            sum = divide(sum, newNum);
            break;
    }
    sum = Number(sum.toFixed(6));
    return sum;
}

const displayBar = document.getElementById("display-bar");
displayBar.value = "0";

const clearButton = document.getElementById("clear-btn");
const digitButtons = document.querySelectorAll(".digit-btn");
const operatorButtons = document.querySelectorAll(".operator-btn");
const equalsButton = document.getElementById("equals-btn");

let numbers = [];
let operators = [];

function clear() {
    displayBar.value = "0";
    numbers = [];
    operators = [];
}

clearButton.addEventListener("click", () => {
    clear();
});

digitButtons.forEach((digitButton) => {
    digitButton.addEventListener("click", () => {
        const result = getResult(numbers, operators);
        if (displayBar.value === "0" || displayBar.value === String(result) || displayBar.value === "You suck.") {
            displayBar.value = "";
        }
        displayBar.value += digitButton.textContent;
    });
});

operatorButtons.forEach((operatorButton) => {
    operatorButton.addEventListener("click", () => {
        const operator = operatorButton.textContent;
        const newNumber = Number(displayBar.value);
        operators.push(operator);
        numbers.push(newNumber);
        const result = getResult(numbers, operators);
        displayBar.value = String(result);
    });
});

function getResult(numbers, operators) {
    let result = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (operators[i - 1] === "/" && numbers[i] === 0) {
            clear();
            return "You suck.";
        }
        result = operate(operators[i - 1], result, numbers[i]);
    }
    return result;
}

// ---- Test getResult() function ----
//const numbers = [5, 6, 7, 8];
//const operators = ["+", "-", "*"];
//getResult(numbers, operators);
// 5 + 6 = 11 --> 11 - 7 = 4 --> 4 * 8 = 32

equalsButton.addEventListener("click", () => {
    const lastNumber = Number(displayBar.value);
    numbers.push(lastNumber);
    const result = getResult(numbers, operators);
    displayBar.value = String(result);
});