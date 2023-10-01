/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2)
{
    const sum =  parseInt(number1) +  parseInt(number2)
    return sum
}

function addNumbers()
{
    const firstNumber = document.querySelector("#add1").value
    const secondNumber = document.querySelector("#add2").value
    const sum = add(firstNumber, secondNumber)
    document.querySelector("#sum").value = sum

    console.log("FIRST NUMBER:", firstNumber)
    console.log("SECOND NUMBER:", secondNumber)
    console.log("SUM", sum)
}

document.querySelector("#addNumbers").addEventListener("click", addNumbers)

/* Function Expression - Subtract Numbers */
function Subtract (number1, number2)
{
    const difference =  parseInt(number1) -  parseInt(number2)
    return difference
}
function SubtractNumbers()
{
    const firstNumber = document.querySelector("#subtract1").value
    const secondNumber = document.querySelector("#subtract2").value
    const difference = Subtract(firstNumber, secondNumber)
    document.querySelector("#difference").value = difference

    console.log("FIRST NUMBER:", firstNumber)
    console.log("SECOND NUMBER:", secondNumber)
    console.log("difference", difference)
}
document.querySelector("#subtractNumbers").addEventListener("click", SubtractNumbers)

/* Arrow Function - Multiply Numbers */
function Multiply (number1, number2)
{
    const product =  parseInt(number1) * parseInt(number2)
    return product
}
function Multiplynumbers()
{
    const firstNumber = document.querySelector("#factor1").value
    const secondNumber = document.querySelector("#factor2").value
    const product = Multiply(firstNumber, secondNumber)
    document.querySelector("#product").value = product

    console.log("FIRST NUMBER:", firstNumber)
    console.log("SECOND NUMBER:", secondNumber)
    console.log("product", product)
}
document.querySelector("#multiplyNumbers").addEventListener("click", Multiplynumbers)

/* Open Function Use - Divide Numbers */
function Divide (number1, number2)
{
    const quotient =  parseInt(number1) / parseInt(number2)
    console.log("quotient:", quotient)
    return quotient
}
function DivideNumbers()
{
    const firstNumber = document.querySelector("#dividend").value
    const secondNumber = document.querySelector("#divisor").value
    const quotient = Divide(firstNumber, secondNumber)
    document.querySelector("#quotient").value = quotient

    console.log("FIRST NUMBER:", firstNumber)
    console.log("SECOND NUMBER:", secondNumber)
    console.log("quotient", quotient)
}
document.querySelector("#divideNumbers").addEventListener("click", DivideNumbers)

/* Decision Structure */
const currentDate = new Date();
let currentYear;
// Using the variable declared in number 1, call the built-in getFullYear() method/function and assign it to the variable declared in 2.
// Assign the current year variable to an HTML form element with an ID of year.
currentYear = currentDate.getFullYear();
document.getElementById("year").value = currentYear;

/* ARRAY METHODS - Functional Programming */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
/* Output Source Array */
document.getElementById("array").textContent = numbersArray.join(", ");
/* Output Odds Only Array */
document.querySelector('#odds').innerHTML = numbersArray.filter(number => number % 2 !== 0);
/* Output Evens Only Array */
document.querySelector('#evens').innerHTML = numbersArray.filter(number => number % 2 === 0);
/* Output Sum of Org. Array */
document.querySelector('#sumOfArray').innerHTML = numbersArray.reduce((sum, number) => sum + number);
/* Output Multiplied by 2 Array */
document.querySelector('#multiplied').innerHTML = numbersArray.map(number => number * 2);
/* Output Sum of Multiplied by 2 Array */
const doubledArray = numbersArray.map((number) => number * 2);
const sumOfDoubled = doubledArray.reduce((accumulator, currentValue) => accumulator + currentValue);
document.getElementById("sumOfMultiplied").textContent = sumOfDoubled;