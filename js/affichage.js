console.log("== début affichage ==");
var canvas = document.getElementById("affichage");
var MAX_WIDTH=500;
var MAX_HEIGHT=500;
canvas.width=MAX_WIDTH;
canvas.height=MAX_HEIGHT;
console.log(canvas.height);
var ctx = canvas.getContext("2d");
var chosen_level = 2;


var perso = {
    // Basic attributes
    x: 0,
    y: 37,
    inc_x:0,
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
    drawLevel(chosen_level);
    var c = perso;
    c.draw();

    c.x += 3;
    c.inc_x+=3;
    testCollision();
    
    if(c.inc_x >= 25)
    {
        c.inc_x = 0;
        return 1;
    }

    return 0;
}

function testCollision(){
    var test = ctx.getImageData(perso.x, perso.y, 25, 25);

    for (var i = 0; i >= 25*25; i++) {
        if(test.data[i] == 128)
        {
            alert();
            break;
        }
    };
}

function moveLeft(){
    drawLevel(chosen_level);
    var c = perso;
    c.draw();

    c.x -= 3;
    c.inc_x+=3;
    
    if(c.inc_x >= 25)
    {
        c.inc_x = 0;
        return 1;
    }

    return 0;
}

var count=0;
var step=0;
var deplacements = [
{
    "droite":3
},
{
    "gauche":2
},
{
    "droite":8
},
]

var animloop = function(){
    if (count < deplacements.length) {
        if (deplacements[count].droite != undefined) {
            deplacements[count].droite-=moveRight();
            if (deplacements[count].droite<=0) {
                count+=1;
            }
        }

        else if (deplacements[count].gauche != undefined) {
            deplacements[count].gauche-=moveLeft();
            if (deplacements[count].gauche==0) {
                count+=1;
            }

        }
        
    }
    else{
        stop_anim();
    }
    requestAnimationFrame(animloop);
}


var stop_anim = function(){
    drawLevel(chosen_level);
    var c = perso;
    c.draw();
    clearInterval();
    //requestAnimationFrame(stop_anim);
}


function drawLevel(lvl){
    
    //choix du niveau ici
    if (lvl==1) {var level = level1;};
    if (lvl==2) {var level = level2;};

	//fond
    ctx.clearRect(0, 0, MAX_WIDTH, MAX_HEIGHT);
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

function reset_affichage(){
    count=0;
    step=0;

    //TODO : générer ce tableau automatiquement
    deplacements = [
    {
        "droite":3
    },
    {
        "gauche":2
    },
    {
        "droite":8
    },
    ]
    drawLevel(chosen_level);

    perso.x=0;
    perso.y=37;
}

function generer_deplacements()
{
    deplacements = [];
}

reset_affichage();
