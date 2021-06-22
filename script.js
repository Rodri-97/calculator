function add(...nums) {
    let sum = 0;
    nums.forEach((num) => sum += num );
    return sum;
}

function subtract(...nums) {
    let sum = nums[0];
    for (let i = 1; i < nums.length; i++) {
        sum -= nums[i];
    }
    return sum;
}

function multiply(...nums) {
    let sum = nums[0];
    for (let i = 1; i < nums.length; i++) {
        sum *= nums[i];
    }
    return sum;
}

function divide(...nums) {
    let sum = nums[0];
    for (let i = 1; i < nums.length; i++) {
        sum /= nums[i];
    }
    return sum;
}

function operate(operator, num1, num2) {
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
}

const displayBar = document.getElementById("display-bar");
displayBar.value = "0";

const digitButtons = document.querySelectorAll(".digit-btn");
const clearButton = document.getElementById("clear-btn");

function addDigitsEventListener() {
    digitButtons.forEach((digitButton) => {
        digitButton.addEventListener("click", () => {
            if (displayBar.value === "0") {
                displayBar.value = "";
            }
            displayBar.value += digitButton.textContent;
        });
    });
}

function addClearEventListener() {
    clearButton.addEventListener("click", () => {
        displayBar.value = "0";
    });
}

addDigitsEventListener();
addClearEventListener();