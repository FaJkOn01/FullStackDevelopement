function printName(){
    var teksti = document.getElementById("text")

    teksti.innerHTML = "John"
    setTimeout(function(){teksti.innerHTML += " Doe<br>"}, 3000)

    teksti.innerHTML += "Smith<br>";
}

printName();

var colors = ["red", "green", "yellow", "orange", "purple"]

function changeBgColor(){
    document.querySelector('body').style.background = colors[Math.floor(Math.random() * colors.length)]
}
setInterval(changeBgColor, 2000);





/*
function printName(){
    document.write("John")
    document.write("<br>")
    setTimeout(function(){document.write("Doe")}, 3000)
    document.write('Smith')
}

printName();
*/