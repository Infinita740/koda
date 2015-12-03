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

function generer_select_haut(nb) {
	var quelquechose = document.createElement('SELECT');
	for (var i = 1; i <= 20; i++) {
		var caseVoulut = document.createElement('OPTION');
		caseVoulut.value = "" + i;
		caseVoulut.innerHTML = "" + i;
		quelquechose.appendChild(caseVoulut);
	};
	var test = document.getElementById("haut");
	test.appendChild(quelquechose);
}

function generer_select_bas(nb) {
	var quelquechose = document.createElement('SELECT');
	for (var i = 1; i <= 20; i++) {
		var caseVoulut = document.createElement('OPTION');
		caseVoulut.value = "" + i;
		caseVoulut.innerHTML = "" + i;
		quelquechose.appendChild(caseVoulut);
	};
	var test = document.getElementById("bas");
	test.appendChild(quelquechose);
}

function generer_select_color(nb) {
	var myArray = ['Bleu', 'Jaune', 'Orange', 'Violet', 'Blanc'];
	var quelquechose = document.createElement('SELECT');
	for (var i = 0; i < myArray.length; i++) {
		var caseVoulut = document.createElement('OPTION');
		caseVoulut.value = myArray[i];
		caseVoulut.innerHTML = myArray[i];
		quelquechose.appendChild(caseVoulut);
	};
	var test = document.getElementById("color");
	test.appendChild(quelquechose);
}

generer_select_droite(20);
generer_select_gauche(20);
generer_select_haut(20);
generer_select_bas(20);
generer_select_color(5);