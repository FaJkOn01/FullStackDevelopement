for (i = 0; i <10; i++){
    console.log(i)
}

var names = ['Lis','Hamdi','Yll','Mal','Fron']
var x;

for(x of names){
    console.log(x)
}

console.log(names)
/*
var names = []
var input = document.getElementById("nameInput")
var button = document.getElementById("showButton")
var text = document.getElementById("text")
if(button){
    button.onclick = function(){
        text.innerHTML =input.value;
    }
    names.push(input.value);
}
*/

var names = [];

var input = document.getElementById("nameInput");
var button = document.getElementById("showButton");
var text = document.getElementById("text");

if (button) {
    button.onclick = function () {
        names.push(input.value);
        
        text.innerHTML = "";

        for (var i = 0; i < names.length; i++) {
            text.innerHTML += names[i] + "<br>";
        }

        input.value = "";
    };
}
