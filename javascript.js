function add(a, b){
    return "" + (Number(a) + Number(b));
}

function subtract(a, b){
    return "" + (Number(a) - Number(b))
}

function multiply(a, b){
    return "" + (Number(a) * Number(b))
}

function divide(a, b){
    return "" + (Number(a) / Number(b))
    //Need to add divide by zero case
}

function remainder(a, b){
    return "" + (Number(a) % Number(b))
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
    else if (operator == "%"){
        return remainder(num1, num2);
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
const undo = document.querySelector('#Undo');
const decimal = document.querySelector('#decimal');

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
                if (num2 == 0 && operator == "/"){
                    clearAll();
                    display.textContent = "ERROR";
                }
                else{
                    num1 = operate(operator, num1, num2);
                    displayValue = num1;
                    updateDisplay();
                    operator = op.getAttribute('id');
                    num2 = "";
                }
            }
        }
    });
});

equals.addEventListener('click', () => {
    if (num1 && num2 && operator){
        if (num2 == 0 && operator == "/"){
            clearAll();
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

clear.addEventListener('click', clearAll);

function clearAll(){
    num1 = "";
    num2 = "";
    operator = "";
    displayValue = "";
    updateDisplay();
}

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

undo.addEventListener('click', () =>{
    if (!operator && num1){
        num1 = num1.slice(0, -1);
        displayValue = num1;
        updateDisplay();
    }
    else if (operator && num2){
        num2 = num2.slice(0, -1);
        displayValue = num2;
        updateDisplay();
    }
});

decimal.addEventListener('click', () => {
    if (!operator && num1 && num1.indexOf(".") == -1){
        
        num1 += ".";
        displayValue = num1;
        updateDisplay();
    }
    else if (operator && num2 && num2.indexOf(".") == -1){
        num2 += ".";
        displayValue = num2;
        updateDisplay();
    }
});