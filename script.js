var firstNumber = 0
var secondNumber = 0
var operation = ""

// ---> ---> Operators clicking functions
function opetators() {
    firstNumber = parseFloat(document.getElementById("textBox").value)
    document.getElementById("textBox").value = ""
}

function plusOperator() {
    operation = "+"
}
function minusOperator() {
    operation = "-"
}
function divisionOperator() {
    operation = "/"
}
function multiplicationOperator() {
    operation = "*"
}

// ---> Show ouput
function equalSign() {
    secondNumber = parseFloat(document.getElementById("textBox").value)
    document.getElementById("textBox").value = ""
    switch (operation) {
        case "+":
            document.getElementById("textBox").value = firstNumber + secondNumber
            break;
        case "-":
            document.getElementById("textBox").value = firstNumber - secondNumber
            break;
        case "/":
            document.getElementById("textBox").value = firstNumber / secondNumber
            break;
        case "*":
            document.getElementById("textBox").value = firstNumber * secondNumber
            break;
    }
}

// ---> Clear function
function clearing() {
    document.getElementById("textBox").value = ""
}

// ---> Delete function
function deleting() {
    document.getElementById("textBox").value = document.getElementById("textBox").value.toString().slice(0,-1)
}

// ---> Dot for float numbers
function period() {
    document.getElementById("textBox").value += "."
}