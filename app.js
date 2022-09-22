let num1 = 2
let num2 = 5
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2


let result = document.getElementById("result-el")
function add() {
    let sum = num1 + num2
    result.textContent = "Sum: " + sum
}

function mul() {
    let pro = num1 * num2
    result.textContent = "Product: " + pro
}
function diff() {
    let difference = num1 - num2
    result.textContent = "Difference: " + difference
} 
function div() {
    let division = num1 / num2
    result.textContent = "Quotient: " + division
}