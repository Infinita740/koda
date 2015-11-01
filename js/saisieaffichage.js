console.log("== début affichage ==");
var canvas = document.getElementById("saisieaffichage");
var MAX_WIDTH=550;
var MAX_HEIGHT=490;
canvas.width=MAX_WIDTH;
canvas.height=MAX_HEIGHT;
console.log(canvas.height);
var ctx = canvas.getContext("2d");