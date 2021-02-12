//information needed
//What info do I need from the  user?
//What options does the user have?

const readlineSync = require("readline-sync");

//stored User info
var firstNum = parseInt(readlineSync.question('Enter first number: '));
var operation = readlineSync.question('Enter +, -, *, or /: ');
var secondNum = parseInt(readlineSync.question('Enter second number: '));

//create a function for each operation
function sum(num1, num2) {
    return firstNum + secondNum
}
function sub(num1, num2) {
    return num1 - num2
}
function div(num1, num2) {
    return num1 / num2
}
function mult(num1, num2) {
    return num1 * num2
}
//logs the outcome based on the var operation
if (operation === "+") {
    console.log("The result is " + sum(firstNum, secondNum))
} else if (operation === '-') {
    console.log("The result is " + sub(firstNum, secondNum))
} else if (operation === '*') {
    console.log("The result is " + mult(firstNum, secondNum))
} else if (operation === '/') {
    console.log("The result is " + div(firstNum, secondNum))
}