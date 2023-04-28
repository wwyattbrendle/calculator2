//array to store values for first and second number
const values = ["0", "0"];

//creating an object to hold all potential booleans
const checker = {
    operatorSelected: false,
    isAddition: false,
    isSubtraction: false,
    isMultiplication: false,
    isDivision: false,
    hasDecimal: false
}

//create element for the screen to grab visual feedback from what is pressed
const display = document.getElementById("display");
display.textContent = values[0];

const typeNumber = function(number) {
    let string = values[0];
    if(checker.operatorSelected) {
        string = values[1];
    }
    if(string === "0") {
        string = number.toString();
    } else {
        string += number.toString();
    }
    if(checker.operatorSelected) {
        values[1] = string;
        display.textContent = values[1];
    } else {
        values[0] = string;
        display.textContent = values[0];
    }
}

//create an array for all number buttons to add the same event listener to them
const numbersArray = [
    document.getElementById("zero"),
    document.getElementById("one"),
    document.getElementById("two"),
    document.getElementById("three"),
    document.getElementById("four"),
    document.getElementById("five"),
    document.getElementById("six"),
    document.getElementById("seven"),
    document.getElementById("eight"),
    document.getElementById("nine")
]

//add event listeners
numbersArray.forEach(function(element) {
    let position = numbersArray.indexOf(element);
    element.addEventListener("click", function() {
        return typeNumber(position);
    });
});

//create operate function
const operate = function(x, y) {
    let result;
    x = parseFloat(x);
    y = parseFloat(y);
    if(checker.isAddition) {
        result = x + y;
        checker.isAddition = false;
    } else if (checker.isSubtraction) {
        result = x - y;
        checker.isSubtraction = false;
    } else if (checker.isMultiplication) {
        result = x * y;
        checker.isMultiplication = false;
    } else {
        result = x / y;
        checker.isDivision = false;
    }
    checker.operatorSelected = false;
    values[0] = result.toString();
    values[1] = "0";
    display.textContent = values[0];
}

//create object to store operator
const operator = {
    add: document.getElementById("addition"),
    subtract: document.getElementById("subtraction"),
    multiply: document.getElementById("multiplication"),
    divide: document.getElementById("division"),
    equal: document.getElementById("equal")
}

//add event listeners
operator.add.addEventListener("click", function() {
    if(checker.operatorSelected) {
        operate(values[0], values[1]);
    }
    checker.operatorSelected = true;
    checker.isAddition = true;
    display.textContent = values[0];
});

operator.subtract.addEventListener("click", function() {
    if(checker.operatorSelected) {
        operate(values[0], values[1]);
    }
    checker.operatorSelected = true;
    checker.isSubtraction = true;
    display.textContent = values[0];
});

operator.multiply.addEventListener("click", function() {
    if(checker.operatorSelected) {
        operate(values[0], values[1]);
    }
    checker.operatorSelected = true;
    checker.isMultiplication = true;
    display.textContent = values[0];
});

operator.divide.addEventListener("click", function() {
    if(checker.operatorSelected) {
        operate(values[0], values[1]);
    }
    checker.operatorSelected = true;
    checker.isDivision = true;
    display.textContent = values[0];
});

operator.equal.addEventListener("click", function() {
    if(checker.operatorSelected) {
        operate(values[0], values[1]);
    }
    checker.operatorSelected = false;
});

//create object to store the other miscellaneous buttons
const miscButtons = {
    decimal: document.getElementById("decimal"),
    clear: document.getElementById("clear-button"),
    delete: document.getElementById("back-button")
}

//add event listeners to these as well
miscButtons.decimal.addEventListener("click", function() {
    if(!checker.hasDecimal) {
        let string = values[0];
        if(checker.operatorSelected) {
            string = values[1];
        }
        string += ".";
        if(checker.operatorSelected) {
            values[1] = string;
            display.textContent = values[1];
        } else {
            values[0] = string;
            display.textContent = values[0];
        }
        checker.hasDecimal = true;
    }
});

miscButtons.delete.addEventListener("click", function(){
    let string = values[0];
    if(checker.operatorSelected) {
        string = values[1];
    }
    string = string.slice(0, -1);
    if(checker.operatorSelected) {
        values[1] = string;
        display.textContent = values[1]
    }
    values[0] = string;
    display.textContent = values[0];
});

miscButtons.clear.addEventListener("click", function() {
    checker.operatorSelected = false;
    checker.isAddition = false;
    checker.isSubtraction = false;
    checker.isDivision = false;
    checker.isMultiplication = false;
    values[0] = "0";
    values[1] = "0";
    display.textContent = values[0];
});