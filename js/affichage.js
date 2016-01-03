console.log("== début affichage ==");
var canvas = document.getElementById("affichage");
var MAX_WIDTH=500;
var MAX_HEIGHT=500;
canvas.width=MAX_WIDTH;
canvas.height=MAX_HEIGHT;
var ctx = canvas.getContext("2d");

var chosen_level = 1;

var perso = {
    // Basic attributes
    x: 25,
    y: 37,
    inc_x:0,
    inc_y:0,
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

    c.x += 1;
    if(testCollision()){
        c.x-=1;
    }

    c.inc_x+=1;
    
    
    if(c.inc_x >= 25)
    {
        c.inc_x = 0;
        return 1;
    }

    return 0;
}

function moveLeft(){
    drawLevel(chosen_level);
    var c = perso;
    c.draw();

    c.x -= 1;

    if(testCollision()){
        c.x+=1;
    }

    c.inc_x+=1;
    
    if(c.inc_x >= 25)
    {
        c.inc_x = 0;
        return 1;
    }

    return 0;
}

function moveUp(){
    drawLevel(chosen_level);
    var c = perso;
    c.draw();

    c.y -= 1;
    c.inc_y+=1;
    
    if(c.inc_y >= 25)
    {
        c.inc_y = 0;
        return 1;
    }

    return 0;
}

function moveDown(){
    drawLevel(chosen_level);
    var c = perso;
    c.draw();

    c.y += 1;
    c.inc_y+=1;
    
    if(c.inc_y >= 25)
    {
        c.inc_y = 0;
        return 1;
    }

    return 0;
}

function testCollision(){
    var test2 = ctx.getImageData(perso.x + 6, perso.y, 1, 1);

    return false;
    //return !isWhite(test2) && !isGreen(test2) && !isBorder(test2);
}

function collision2(direction){

    //collision à droite :
    if (direction == "d") {
        //pixel du centre de la case suivante (à droite)
        var couleur = ctx.getImageData(perso.x + 13, perso.y, 1, 1);
        if (isWhite(couleur) || isBorder(couleur)) {
            console.log("case blanche");
            return false;
        }
        if(isRed(couleur)){
            logErreur("victoire");
            //on avance d'une case de +
            deplacements = [];
            count = 0;
            deplacements[0] = new Deplacement("droite", 1);
            return false;
        }
        console.log(couleur);
        logErreur("collision");
        //TO DO : ajouter un message d'information dans la partie prévue à cet effet.
        return true; //si ce n'est pas une case blanche (ou une bordure) : collision
    };

    //collision à gauche
    if (direction == "g") {
        //pixel du centre de la case précédente (à gauche)
        var couleur = ctx.getImageData(perso.x - 13, perso.y, 1, 1);
        if (isWhite(couleur) || isBorder(couleur)) {
            console.log("case blanche");
            return false;
        }
        if(isRed(couleur)){
            logErreur("victoire");
            //on avance d'une case de +
            deplacements = [];
            count = 0;
            deplacements[0] = new Deplacement("gauche", 1);
            return false;
        }
        logErreur("collision");
        //TO DO : ajouter un message d'information dans la partie prévue à cet effet.
        return true; //si ce n'est pas une case blanche (ou une bordure) : collision
    };

    //collision à gauche
    if (direction == "h") {
        //pixel du centre de la case précédente (à gauche)
        var couleur = ctx.getImageData(perso.x, perso.y - 13, 1, 1);
        if (isWhite(couleur) || isBorder(couleur)) {
            console.log("case blanche");
            return false;
        }
        if(isRed(couleur)){
            logErreur("victoire");
            //on avance d'une case de +
            deplacements = [];
            count = 0;
            deplacements[0] = new Deplacement("haut", 1);
            return false;
        }
        logErreur("collision");
        //TO DO : ajouter un message d'information dans la partie prévue à cet effet.
        return true; //si ce n'est pas une case blanche (ou une bordure) : collision
    };

    //collision à gauche
    if (direction == "b") {
        //pixel du centre de la case précédente (à gauche)
        var couleur = ctx.getImageData(perso.x, perso.y + 13, 1, 1);
        if (isWhite(couleur) || isBorder(couleur)) {
            console.log("case blanche");
            return false;
        }
        if(isRed(couleur)){
            logErreur("victoire");
            //on avance d'une case de +
            deplacements = [];
            count = 0;
            deplacements[0] = new Deplacement("bas", 1);
            return false;
        }
        logErreur("collision");
        //TO DO : ajouter un message d'information dans la partie prévue à cet effet.
        return true; //si ce n'est pas une case blanche (ou une bordure) : collision
    };
}

function isBorder (imgData) {
    return imgData.data[0] == 159 && imgData.data[1] == 159 && imgData.data[2] == 159;
}

function isGreen (imgData) {
    return imgData.data[0] == 0 && imgData.data[1] == 128 && imgData.data[2] == 0;
}

function isWhite(imgData){
    return imgData.data[0] == 255 && imgData.data[1] == 255 && imgData.data[2] == 255;
}

function isRed(imgData){
    return imgData.data[1] == 0 && imgData.data[2] == 0 && imgData.data[3] == 255;
}

var lvl_termine = false;

function logErreur(err){
    if (err == "collision") {
        var html = $("#erreurs").html();
        html = html + "<br><strong>[collision]</strong> collision du perso avec un mur !";
        $("#erreurs").html(html);
    };
    if (err == "victoire" && !lvl_termine) {
        var html = $("#erreurs").html();
        html = html + "<br><br><strong>[victoire]</strong> le niveau est terminé !";
        $("#erreurs").html(html);
        enregistrement_score(chosen_level, 10);
        lvl_termine = true;
    };
}

var step = 0;

var animloop = function(){
    if (count < deplacements.length) {
        if (deplacements[count].couleur != undefined) {
            changeColor(deplacements[count].couleur);
            count++;
        };
        if (deplacements[count].droite != undefined) {
            //si collision : arrêter les déplacements dans cette direction
            if(collision2("d")){
                deplacements[count].droite = -1;
            }
            else{
                step = moveRight();
                if(step != 0){
                    deplacements[count].droite-=step;
                    step = 0;
                }
            }
            if (deplacements[count].droite<=0) {
                count+=1;
            }
        }

        if (deplacements[count].gauche != undefined) {
            //si collision : arrêter les déplacements dans cette direction
            if(collision2("g")){
                deplacements[count].gauche = -1;
            }
            else{
                step = moveLeft();
                if(step != 0){
                    deplacements[count].gauche-=step;
                    step = 0;
                }
            }
            if (deplacements[count].gauche<=0) {
                count+=1;
            }
        }

        if (deplacements[count].haut != undefined) {
            //si collision : arrêter les déplacements dans cette direction
            if(collision2("h")){
                deplacements[count].haut = -1;
            }
            else{
                step = moveUp();
                if(step != 0){
                    deplacements[count].haut-=step;
                    step = 0;
                }
            }
            if (deplacements[count].haut<=0) {
                count+=1;
            }
        }

        if (deplacements[count].bas != undefined) {
			//si collision : arrêter les déplacements dans cette direction
            if(collision2("b")){
                deplacements[count].bas = -1;
            }
            else{
                step = moveDown();
                if(step != 0){
                    deplacements[count].bas-=step;
                    step = 0;
                }
            }
            if (deplacements[count].bas<=0) {
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

    generer_deplacements();
    drawLevel(chosen_level);

    perso.x=12;
    perso.y=37;
    //effacement de la fenêtre des erreurs
    $("#erreurs").html("Ici vous trouverez vos erreurs :");
    lvl_termine = false;
    changeColor("Bleu")
}

function Deplacement(direction, nombre){
    if (direction=="droite") {
        this.droite = nombre;
    };
    if (direction=="gauche") {
        this.gauche = nombre;
    };
    if (direction=="haut") {
        this.haut = nombre;
    };
    if (direction=="bas") {
        this.bas = nombre;
    };
    if (direction=="couleur") {
        this.couleur = nombre;
    };
}

function generer_deplacements()
{
    deplacements = [];
    var liste = document.getElementById("saisie").childNodes;

    var nom_action;
    var num_action;

    for (var i = 0; i < liste.length; i++) {
        if (liste[i].nodeName=="DIV") {
            nom_action = liste[i].actionPerso;

            var opt = liste[i].childNodes[1];
            for (var j = 0; j < opt.length; j++) {
                if (opt[j].selected) {
                    //console.log(opt[j].value); //récupération de la valeur sélectionnée
                    if (nom_action != "couleur") {
                        num_action = parseInt(opt[j].value);
                    }
                    else{
                        num_action = opt[j].value;
                    }
                };
            };
            //ajout du déplacement au tableau
            console.log("deplacement : " + nom_action + " / " + num_action);
            var d = new Deplacement(nom_action, num_action);
            deplacements.push(d);
        };
    };
}

function changeColor(color){
    var tab = [];
    tab["Bleu"] = "blue";
    tab["Jaune"] = "yellow";
    tab["Orange"] = "orange";
    tab["Violet"] = "purple";
    tab["Blanc"] = "white";

    var c = perso;
    c.color = tab[color];
}

reset_affichage();

for (var i = 0; i < 6; i++) {
    animloop();
};