function add(a, b){
    return Number(a) + Number(b);
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
    //Need to add divide by zero case
}

function operate (operator, num1, num2){
    if (operator == "+"){
        return add(num1, num2);
    }
    else if (operator == "-"){
        return subtract(num1, num2);
    }
    else if (operator == "*"){
        return multiply(num1, num2);
    }
    else if (operator == "/"){
        return divide(num1, num2);
    }
}

function updateDisplay(){
    display.textContent = displayValue;
}

let num1 = "";
let num2 = "";
let operator = "";
let displayValue = "";
const display = document.querySelector(".display");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator")
const equals = document.querySelector("#equals");
const clear = document.querySelector("#clear");
const positive = document.querySelector('#positive');

numbers.forEach((num) => {
    num.addEventListener('click', () => {
        if (!operator){
            num1 += num.textContent;
            displayValue = num1;
            updateDisplay();
        }
        else{
            num2 += num.textContent;
            displayValue = num2;
            updateDisplay();
        }
    });
});

operators.forEach((op) => {
    op.addEventListener('click', () => {
        if (!operator){
            operator = op.getAttribute('id');
        }
        else{
            if (!num2){
                operator = op.getAttribute('id');
            }
            else{
                num1 = operate(operator, num1, num2);
                displayValue = num1;
                updateDisplay();
                operator = op.getAttribute('id');
                num2 = "";
            }
        }
    });
});

equals.addEventListener('click', () => {
    if (num1 && num2 && operator){
        if (num2 == 0 && operator == "/"){
            num1 = "";
            num2 = "";
            operator = "";
            displayValue = "";
            display.textContent = "ERROR";
        }
        else{
            num1 = operate(operator, num1, num2);
            displayValue = num1;
            updateDisplay();
            num2 = "";
            operator = "";
        }
    }
});

clear.addEventListener('click', () => {
    num1 = "";
    num2 = "";
    operator = "";
    displayValue = "";
    updateDisplay();
});

positive.addEventListener('click', () => {
    if (!operator){
        num1 = num1 * -1;
        displayValue = num1;
        updateDisplay();
    }
    else{
        num2 = num2 * -1;
        displayValue = num2;
        updateDisplay();
    }
});
