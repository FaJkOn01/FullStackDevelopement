var button1 = document.getElementById("butoni1")
var button2 = document.getElementById("butoni2")
var button3 = document.getElementById("butoni3")
var button4 = document.getElementById("butoni4")

button1.onmouseover=function(){
    button1.style.width='150px';
    button1.style.height='150px';
    button1.style.borderRadius='50%';
    button1.setAttribute("class","circle")
}

button2.onmouseover=function(){
    button2.style.width='150px';
    button2.style.height='150px';
    button2.style.borderRadius='0';
    button2.setAttribute("class","square");
}
button3.onmouseover=function(){
    button3.style.width='250px';
    button3.style.height='100px';
    button3.style.borderRadius='0';
    button3.setAttribute("class","rectangle");
}
button4.onmouseover=function(){
    button4.style.width='0px';
    button4.style.height='0px';
    button4.style.borderBottom='100px solid #0c7a15';
    button4.style.borderLeft='50px solid transparent';
    button4.style.borderRight='50px solid transparent';
    button4.setAttribute("class","triangle")
}