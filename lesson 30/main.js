var mosha = 16


if (mosha>=18){
    console.log("You can vote")
}
else{
    console.log("You cannot vote")
}

var input = document.getElementById("input_id")
var text = document.getElementById("text_id")
var button = document.getElementById("button_id")
button.onclick = function(){
    text.innerHTML =input.value;
}

var age = document.getElementById("mosha")
var text_a = document.getElementById("text")
var buttoni_m = document.getElementById("button_mosha")


buttoni_m.onclick = function(){
    if (age.value>18){
        text_a.innerHTML = "You can vote"
    }
    else if(age.value==18){
        text_a.innerHTML = "You can vote, congrats on your first time voting!!"
    }
    else{
        text_a.innerHTML = "You cannot vote"
    }
}

var num1 = document.getElementById("num1")
var num2 = document.getElementById("num2")
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
