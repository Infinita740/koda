console.log("== début affichage ==");
var canvas = document.getElementById("affichage");
var MAX_WIDTH=500;
var MAX_HEIGHT=500;
canvas.width=MAX_WIDTH;
canvas.height=MAX_HEIGHT;
console.log(canvas.height);
var ctx = canvas.getContext("2d");

var now,
    then = new Date().getTime(),
    delta;

var circle = {
    // Basic attributes
    x: 0,
    y: 37,
    radius: 5,
    color: "blue",
    
    // Function to draw the circle
    draw : function() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
        ctx.closePath();
        ctx.fill();
    }
};

function moveRight(){
    now = new Date().getTime();
    delta = now - then;
    // console.log(delta);
    
    ctx.clearRect(0, 0, MAX_WIDTH, MAX_HEIGHT);
    drawLevel1();
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

var calcSpeed = function(del, speed){
    return (speed * 60 * del) / 1000;
}

var animloop = function(){
    requestAnimationFrame(animloop);
    moveRight();
}
 
 var level = JSON.parse(level1);
function drawLevel1(){
    
	//fond
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(0,500);
    ctx.lineTo(500,500);
    ctx.lineTo(500,0);
    ctx.lineWidth = 1;
    ctx.fillStyle = "gray";
    ctx.fill();

    //chemin
	
    ctx.beginPath();
    ctx.moveTo(level.moveTo[0],level.moveTo[1]);
    ctx.lineTo(level.lineTo1[0],level.lineTo1[1]);
    ctx.lineTo(level.lineTo2[0],level.lineTo2[1]);
    ctx.lineTo(level.lineTo3[0],level.lineTo3[1]);
    ctx.fillStyle = level.color;
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(25,25);
    ctx.lineTo(475,25);
    ctx.lineTo(475,50);
    ctx.lineTo(25,50);
    ctx.fillStyle = "white";
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(450,25);
    ctx.lineTo(475,25);
    ctx.lineTo(475,475);
    ctx.lineTo(450,475);
    ctx.fillStyle = "white";
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(250,475);
    ctx.lineTo(250,450);
    ctx.lineTo(450,450);
    ctx.lineTo(450,475);
    ctx.fillStyle = "white";
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(250,250);
    ctx.lineTo(275,250);
    ctx.lineTo(275,475);
    ctx.lineTo(250,475);
    ctx.fillStyle = "white";
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(250,250);
    ctx.lineTo(375,250);
    ctx.lineTo(375,275);
    ctx.lineTo(250,275);
    ctx.fillStyle = "white";
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(375,250);
    ctx.lineTo(375,150);
    ctx.lineTo(350,150);
    ctx.lineTo(350,250);
    ctx.fillStyle = "white";
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(375,125);
    ctx.lineTo(125,125);
    ctx.lineTo(125,150);
    ctx.lineTo(375,150);
    ctx.fillStyle = "white";
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(125,125);
    ctx.lineTo(150,125);
    ctx.lineTo(150,350);
    ctx.lineTo(125,350);
    ctx.fillStyle = "white";
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(100,350);
    ctx.lineTo(100,400);
    ctx.lineTo(175,400);
    ctx.lineTo(175,350);
    ctx.fillStyle = "red";
    ctx.fill();
	
	//quadrillage
	var i=25;
	while(i<500){
		ctx.beginPath();
		ctx.moveTo(i,0);
		ctx.lineTo(i,500);
		ctx.lineWidth=0.75;
		ctx.strokeStyle="black";
		ctx.stroke();
		i=i+25;
	}
	var g = 25;
	while(g<500){
		ctx.beginPath();
		ctx.moveTo(0,g);
		ctx.lineTo(500,g);
		ctx.lineWidth=0.75;
		ctx.strokeStyle="black";
		ctx.stroke();
		g=g+25;
	}
}



animloop();