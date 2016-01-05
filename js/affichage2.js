function changeColor(color){
	var tab = [];
	tab["bleu"] = "blue";
	tab["jaune"] = "yellow";
    tab["orange"] = "orange";
    tab["violet"] = "purple";
    tab["blanc"] = "white";

    var c = perso;
    c.color = tab[color];
}

changeColor("jaune");