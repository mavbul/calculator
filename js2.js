console.log('test');

let displayValue = '0'; 
let displayBuffer = null; 
let number1Buffer = null;
let number1 = null;
let number2Buffer = null;
let number2 = null;
let operatorBuffer = null;
let operator = null;
let start_new_enter = true;
let valueLower;
let valueLowerBuffer;
let result;


const displayElem = document.getElementById('display_id');
const lowerButtonsElem = document.querySelector('.lowerButtons'); 
const topButtonsElem = document.querySelector('.topButtons');

function add(number_1, number_2) {
    return +number_1 + +number_2; 
}

function subtract(number_1, number_2) {
    return +number_1 - +number_2;
}

function multiply(number_1, number_2) {
    return +number_1*+number_2;
}

function divide(number_1, number_2) {
    return +number_1/+number_2; 
}

function operate(operator, number_1, number_2) {
    switch (operator) {
        case '+':
            return add(number_1, number_2);
            break;
        case '-':
            return subtract(number_1, number_2);
            break;    
        case '*':
            return multiply(number_1, number_2);
            break; 
        case '/':
            return divide(number_1, number_2);
            break;         
    }
}

function displayContent(str) {
    displayBuffer = displayValue;
    if (!start_new_enter) {
        if (displayValue == '0' && str == '0') {
            return displayValue;
        }
        if (displayValue == '0' && str !== '.') {
            displayValue = str;
            return displayValue;
        }
        if (str == '.' && displayValue.includes('.')) {
            return displayValue;
        }
        displayValue = displayValue + str;
        return displayValue;
    } else {
        if (str == '.') {
            displayValue = '0' + str;
        } else {
            displayValue = str;
        }
        start_new_enter = false;
        return displayValue;
    }
}

function display(content) {
    displayElem.innerHTML = content;
}

function valueLowerInit(value) {
    valueLowerBuffer = valueLower;
    valueLower = value; 
}

function number1Init(value) {
    number1Buffer = number1;
    number1 = value;
}

function number2Init(value) {
    number2Buffer = number2;
    number2 = value;
}

function operatorInit(value) {
    operatorBuffer = operator;
    operator = value;
}

function lowerButtonsElemHandler(event) {
    valueLowerInit(event.target.dataset.value);
    if (!valueLower) return;
    if (valueLower == '+' || valueLower == '-' || valueLower == '*' || valueLower == '/' || valueLower == '=') {
        if (valueLower == valueLowerBuffer) return;
        if (!number1) { 
            if (valueLower = '=') return;
            number1Init(displayValue);
            console.log(number1);
            start_new_enter = true; 
            if (valueLower != '=') operatorInit(valueLower);
            return;
        } 

        if (true) {
            number2Init(displayValue);
            result = operate(operator, number1, number2);
            if (valueLower != '=') operatorInit(valueLower);
            displayValue = result;
            display(displayValue);
            start_new_enter = true;
            number1Init(displayValue);
            return;
        }

    } 


    displayValue = displayContent(valueLower); 
    console.log(displayBuffer);
    display(displayValue);
}

function topButtonsElemHandler(event) {
    let value = event.target.dataset.value;
    if (!value) return;
}

lowerButtonsElem.addEventListener('click', lowerButtonsElemHandler);
topButtonsElem.addEventListener('click', topButtonsElemHandler); 

display(displayValue);