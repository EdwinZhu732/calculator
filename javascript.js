function add(a, b){
    return a + b;
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

let num1 = "";
let num2 = "";
let operator = "";
let displayValue = "";
const display = document.querySelector(".display");
const numbers = document.querySelectorAll(".number");
const equals = document.querySelector(".equals");
const clear = document.querySelector("#clear");

numbers.forEach((num) => {
    num.addEventListener('click', () => {
        displayValue += num.textContent;
        updateDisplay();
        
    });
});

clear.addEventListener('click', () => {
    displayValue = "";
    updateDisplay(displayValue);
});


function updateDisplay(){
    display.textContent = displayValue;
}