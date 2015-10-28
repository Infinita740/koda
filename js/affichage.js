console.log("== début affichage ==");
var canvas = document.getElementById("affichage");

var MAX_WIDTH=500;
var MAX_HEIGHT=400;

canvas.width=MAX_WIDTH;
canvas.height=MAX_HEIGHT;
console.log(canvas.height);
var ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.moveTo(0,0);
ctx.lineTo(0,MAX_HEIGHT);
ctx.lineTo(MAX_WIDTH,MAX_HEIGHT);
ctx.lineTo(MAX_WIDTH,0);
ctx.closePath(); // draws last line of the rectangle
ctx.lineWidth = 1;
ctx.stroke();

ctx.font="15px sans-serif";
ctx.fillText("Affichage", 5, 14);

var now,
    then = new Date().getTime(),
    delta;


var circle = {
    // Basic attributes
    x: 0,
    y: 10,
    radius: 5,
    color: "black",
    
    // Function to draw the circle
    draw : function() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
        ctx.closePath();
        ctx.fill();
    }
};

function moveRight() {
    now = new Date().getTime();
    delta = now - then;
    // console.log(delta);
    
    ctx.clearRect(0, 0, MAX_WIDTH, MAX_HEIGHT);
    var c = circle;
    c.draw();
    c.x += calcSpeed(delta, 5);
    
    if(c.x - c.radius > MAX_WIDTH)
    {
        console.log("redémarrage");
        c.x = -c.radius;
    }
    
    then = now;
}

var calcSpeed = function(del, speed) {
    return (speed * 60 * del) / 1000;
}

var animloop = function() {
    requestAnimationFrame(animloop);
    moveRight();
}

animloop();