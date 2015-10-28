console.log("== début affichage ==");
var canvas = document.getElementById("affichage");
canvas.width=500;
canvas.height=400;
console.log(canvas.height);
var ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.moveTo(0,0);
ctx.lineTo(0,400);
ctx.lineTo(500,400);
ctx.lineTo(500,0);
ctx.closePath(); // draws last line of the rectangle
ctx.lineWidth = 1;
ctx.stroke();

ctx.font="15px sans-serif";
ctx.fillText("Affichage", 5, 14);

// width="500px" height="400px"