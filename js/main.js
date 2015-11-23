console.log("== début du programme ==");

function generer_select_avancer(nb) {
	console.log(".");
	var quelquechose = document.createElement('SELECT');
	for (var i = 1; i <= 20; i++) {
		var caseVoulut = document.createElement('OPTION');
		caseVoulut.value = "" + i;
		caseVoulut.innerHTML = "" + i;
		quelquechose.appendChild(caseVoulut);
		console.log(caseVoulut);
	};
	var test = document.getElementById("avancer");
	test.appendChild(quelquechose);
}

function generer_select_reculer(nb) {
	console.log(".");
	var quelquechose = document.createElement('SELECT');
	for (var i = 1; i <= 20; i++) {
		var caseVoulut = document.createElement('OPTION');
		caseVoulut.value = "" + i;
		caseVoulut.innerHTML = "" + i;
		quelquechose.appendChild(caseVoulut);
		console.log(caseVoulut);
	};
	var test = document.getElementById("reculer");
	test.appendChild(quelquechose);
}