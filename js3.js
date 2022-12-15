console.log('test');

let displayValue = '0'; 
let number_1_global;
let number_1_global_flag = false;
let number_2_global; 
let number_2_global_flag = false; 
let operator_global;
let operator_global_flag = false; 
let start_new_enter = false; 
let result_global;
let result_global_flag = false;
let twoTimesOperatorPressed = true;

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
    value = String(content);
    if (value.length <= 10) {
        displayElem.innerHTML = value;
    } else {
        let str = value.slice(0, 10);
        displayElem.innerHTML = str;
    }
}

//console.log(lowerButtonsElem);

function lowerButtonsElemHandler(event) {

    let value = event.target.dataset.value;
    
    if (!value) return;
    
    if (value == '+' || value == '-' || value == '*' || value == '/' || value == '=') {

        if (!number_1_global_flag) {
            number_1_global = displayValue;
            number_1_global_flag = true;  
            start_new_enter = true; 
            if (value != '=') {
                operator_global = value;
            }
            twoTimesOperatorPressed = true;
            return;
        }

        if (!number_2_global_flag  && !twoTimesOperatorPressed) {
            number_2_global = displayValue;
            number_2_global_flag = true; 
            result_global = operate(operator_global, number_1_global, number_2_global);
            result_global_flag = true;
            displayValue = result_global;
            number_1_global = result_global;
            start_new_enter = true; 
            if (value != '=') {
                operator_global = value;            
            }
            twoTimesOperatorPressed = true;
            display(displayValue);
            return;
        }

        if (value != '=') {
            operator_global = value;            
        }
        return;
    } 

  /*  if (value == '=') {
        if (!number_1_global_flag) return;
        if (!result_global_flag) {
            number_2_global = displayValue;
            number_2_global_flag = false;
            console.log(number_2_global);
            number_2_global_flag = true; 
            result_global = operate(operator_global, number_1_global, number_2_global);
            result_global_flag = true;
            displayValue = result_global;
            display(displayValue);
            number_1_global = result_global;
            start_new_enter = true; 
            return;
        } else {
            result_global = operate(operator_global, number_1_global, number_2_global);
            result_global_flag = true;
            number_2_global_flag = false;
            displayValue = result_global;
            display(displayValue);
            number_1_global = result_global;
            start_new_enter = true; 
            twoTimesOperatorPressed = false;
            return;
        }
    }
    */
    display(displayContent(value));
    number_2_global_flag = false;
    result_global_flag = false;
    twoTimesOperatorPressed = false;
}

function topButtonsElemHandler(event) {
    let value = event.target.dataset.value;
    if (!value) return;
    console.log(value);

    if (value == 'Clear') {
        displayValue = '0'; 
        number_1_global_flag = false;
        number_2_global_flag = false; 
        operator_global_flag = false; 
        start_new_enter = false; 
        twoTimesOperatorPressed = true;
        display(displayValue);
    }
}

lowerButtonsElem.addEventListener('click', lowerButtonsElemHandler);
topButtonsElem.addEventListener('click', topButtonsElemHandler); 

display(displayValue);