var num1 = document.getElementById("number1")
var num2 = document.getElementById("number2")
var button_add = document.getElementById("add")
var button_subtract = document.getElementById("subtract")
var button_multiply = document.getElementById("multiply")
var button_divide = document.getElementById("divide")
var result = document.getElementById("result")

button_add.onclick = function(){
    button_add.setAttribute("class", "button")
    result.innerHTML = parseInt(num1.value) + parseInt(num2.value)
}
button_subtract.onclick = function(){
    button_subtract.setAttribute("class", "button")
    result.innerHTML = parseInt(num1.value) - parseInt(num2.value)
}
button_multiply.onclick = function(){
    button_multiply.setAttribute("class", "button")
    result.innerHTML = parseInt(num1.value) * parseInt(num2.value)
}
button_divide.onclick = function(){
    button_divide.setAttribute("class", "button")
    result.innerHTML = parseInt(num1.value) / parseInt(num2.value)
}
button_divide.setAttribute("class", "button")