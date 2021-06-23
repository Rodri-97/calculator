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
    return sum;
}

/* function operate(operator, num1, num2) {
    let sum = 0;
    switch(operator) {
        case "+":
            sum = add(num1, num2);
            break;
        case "-":
            sum = subtract(num1, num2);
            break;
        case "*":
            sum = multiply(num1, num2);
            break;
        case "/":
            sum = divide(num1, num2);
            break;
    }
    return sum;
} */

const displayBar = document.getElementById("display-bar");
displayBar.value = "0";

const clearButton = document.getElementById("clear-btn");
const digitButtons = document.querySelectorAll(".digit-btn");
const operatorButtons = document.querySelectorAll(".operator-btn");
const equalsButton = document.getElementById("equals-btn");
let sum = 0;

clearButton.addEventListener("click", () => {
    displayBar.value = "0";
});

digitButtons.forEach((digitButton) => {
    digitButton.addEventListener("click", () => {
        if (displayBar.value === "0") {
            displayBar.value = "";
        }
        displayBar.value += digitButton.textContent;
    });
});