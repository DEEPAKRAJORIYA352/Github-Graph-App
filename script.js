
const cont = document.querySelector(".container");
const colors = ["#196127","#219A3A","#EAEDF0","#C6E488","#C6E488","#78C96F"];

function randomColor(colors){
    return colors[Math.floor(Math.random()*colors.length)]
}
let square_count = 365;
for(let i=0; i<square_count; i++){
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.backgroundColor= randomColor(colors);
    cont.appendChild(square);
}



