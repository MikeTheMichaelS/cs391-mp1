function calculate(operator) {
    var firstValue = document.getElementById("first-value").value;
    var secondValue = document.getElementById("second-value").value;
    var result = 0;
    switch (operator) {
        case "add":
            result = Number(firstValue) + Number(secondValue);
            break;
        case "subtract":
            result = Number(firstValue) - Number(secondValue);
            break;
        case "multiply":
            result = Number(firstValue) * Number(secondValue);
            break;
        case "divide":
            result = Number(firstValue) / Number(secondValue);
            break;
        case "power":
            result = 1;
            for (let i = 0; i < Number(secondValue); i++) {
                result *= Number(firstValue);
            }
            break;
    }
    let resultStr = `<p>Result: ${result}</p>`;
    if (result < 0) {
        // Make it red if the result is negative.
        document.getElementById("result").style.color = "red";
    } else {
        document.getElementById("result").style.color = "black";
    }

    document.getElementById("result").innerHTML = "Result: " + result;

}

function addition() {
    calculate("add");
}

function subtract() {
    calculate("subtract");
}

function multiply() {
    calculate("multiply");
}

function divide() {
    calculate("divide");
}

function power() {
    calculate("power");
}

function cls() {
    document.getElementById("first-value").value = "";
    document.getElementById("second-value").value = "";
    document.getElementById("result").innerHTML = "";
}