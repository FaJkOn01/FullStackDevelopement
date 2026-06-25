var rrethi = document.getElementById("circle");
var ngjyrat = ["black", "red", "yellow", "blue"];

let index = 0;

function shfaqRrethin(){
    rrethi.style.left = "300px";
    rrethi.style.top = "200px";
    rrethi.style.backgroundColor = ngjyrat[index];
    rrethi.style.display = "block";

    index = (index+1) % ngjyrat.length;

    setTimeout()(
        rrethi.style.display = "none"
    ), 1000;

    
}

setInterval(shfaqRrethin, 2000);

