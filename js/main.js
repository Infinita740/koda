console.log("== début du programme ==");

function generer_select_droite(nb) {
	var quelquechose = document.createElement('SELECT');
	for (var i = 1; i <= 20; i++) {
		var caseVoulut = document.createElement('OPTION');
		caseVoulut.value = "" + i;
		caseVoulut.innerHTML = "" + i;
		quelquechose.appendChild(caseVoulut);
	};
	var test = document.getElementById("droite");
	test.appendChild(quelquechose);
}

function generer_select_gauche(nb) {
	var quelquechose = document.createElement('SELECT');
	for (var i = 1; i <= 20; i++) {
		var caseVoulut = document.createElement('OPTION');
		caseVoulut.value = "" + i;
		caseVoulut.innerHTML = "" + i;
		quelquechose.appendChild(caseVoulut);
	};
	var test = document.getElementById("gauche");
	test.appendChild(quelquechose);
}