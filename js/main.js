console.log("== début du programme ==");

function generer_select_avancer(nb) {
	var quelquechose = document.createElement('SELECT');
	for (var i = 1; i <= 20; i++) {
		var caseVoulut = document.createElement('OPTION');
		caseVoulut.value = "" + i;
		caseVoulut.innerHTML = "" + i;
		quelquechose.appendChild(caseVoulut);
	};
	var test = document.getElementById("avancer");
	test.appendChild(quelquechose);
}

function generer_select_reculer(nb) {
	var quelquechose = document.createElement('SELECT');
	for (var i = 1; i <= 20; i++) {
		var caseVoulut = document.createElement('OPTION');
		caseVoulut.value = "" + i;
		caseVoulut.innerHTML = "" + i;
		quelquechose.appendChild(caseVoulut);
	};
	var test = document.getElementById("reculer");
	test.appendChild(quelquechose);
}