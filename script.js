


function changeColors(){
const coloursArray = [
    "#2e86c1","#7d6608","#1a5276","#0e6655",
    "#ba4a00", "#a04000","#a04000","#e6b0aa","#a93274",
    "#32a99c","#32a93b","#a2a932","#660033",
    "#330000","#336600","#00FF99",
];
const randomColors = coloursArray[Math.floor(Math.random()*coloursArray.length
)];
document.body.style.backgroundColor = randomColors;
}