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

var perso = {
    // Basic attributes
    x: 0,
    y: 37,
    old_x:0,
    old_y:37,
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
    drawLevel(1);
    var c = perso;
    c.draw();

    c.x += calcSpeed(delta, 5);
    
    then = now;
    if(c.x - c.old_x >= 24)
    {
        c.old_x = c.x;
        console.log("+1 case");
        return 1;
    }

    return 0;
}

var calcSpeed = function(del, speed){
    return (speed * 60 * del) / 1000;
}

var count=0;

var animloop = function(){
    if (count < 8) {
        count+=moveRight();
    }
    else{
        stop_anim();
    }
    requestAnimationFrame(animloop);
}


var stop_anim = function(){
    ctx.clearRect(0, 0, MAX_WIDTH, MAX_HEIGHT);
    drawLevel(1);
    var c = perso;
    c.draw();
}


function drawLevel(lvl){
    
    //choix du niveau ici
    if (lvl==1) {var level = level1;};

	//fond
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(0,MAX_WIDTH);
    ctx.lineTo(MAX_HEIGHT,MAX_WIDTH);
    ctx.lineTo(MAX_HEIGHT,0);
    ctx.lineWidth = 1;
    ctx.fillStyle = "gray";
    ctx.fill();

    //chemin, début et fin
    for (var i=0; i < level.length; i++) {
        ctx.beginPath();
        var item = level[i];
        ctx.moveTo(item.moveTo[0],item.moveTo[1]);
        ctx.lineTo(item.lineTo1[0],item.lineTo1[1]);
        ctx.lineTo(item.lineTo2[0],item.lineTo2[1]);
        ctx.lineTo(item.lineTo3[0],item.lineTo3[1]);
        ctx.fillStyle = item.color;
        ctx.fill();
    };
	
	//quadrillage
	var i=25;
	while(i<MAX_WIDTH){
		ctx.beginPath();
		ctx.moveTo(i,0);
		ctx.lineTo(i,MAX_HEIGHT);
		ctx.lineWidth=0.75;
		ctx.strokeStyle="black";
		ctx.stroke();
		i=i+25;
	}
	var g = 25;
	while(g<MAX_HEIGHT){
		ctx.beginPath();
		ctx.moveTo(0,g);
		ctx.lineTo(MAX_WIDTH,g);
		ctx.lineWidth=0.75;
		ctx.strokeStyle="black";
		ctx.stroke();
		g=g+25;
	}
}

animloop();