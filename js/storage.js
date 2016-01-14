//défini le niveau actuel :
function set_level(lvl){
    chosen_level = lvl;
    localStorage['chosen_level'] = chosen_level;
    indication(chosen_level);
    drawLevel(chosen_level);
}

function get_level(){
    if(typeof(Storage) !== undefined) 
    {
        if(localStorage['chosen_level'] != undefined)
        {
            set_level(localStorage['chosen_level']);
        }
    }
    else 
    {
        alert("localStorage n'est pas supporté");
    }
}

function reset_level(){
    if(typeof(Storage) !== undefined) 
    {
        for (var i = 1; i < resultat.length; i++) {
            enregistrement_score(i, 0);
        };
    }

    else 
    {
        alert("localStorage n'est pas supporté");
    }

}

var resultat = [];
for (var i = 1; i <= 5; i++) {
  resultat[i] = 0;
}


function enregistrement_score(lvl, score){
    if(typeof(Storage) !== undefined) 
    {
        resultat[lvl] = score;

        var resultat_JSON = JSON.stringify(resultat);
        localStorage['resultat'] = resultat_JSON;
        chargement_score();
    } 
    else 
    {
        alert("localStorage n'est pas supporté, il sera impossible de sauvegarder la progression");
    }

}

var img = document.getElementById("lvl1");
var img_path = img.src.slice(0,-9);

function chargement_score(){
    if(typeof(Storage) !== undefined && localStorage['resultat'] != undefined) 
    {
        resultat = JSON.parse(localStorage['resultat']);

        for (var i = 1; i < resultat.length; i++) {
            var img = document.getElementById("lvl"+i);
            if (resultat[i]) {
                //changement de la couleur de l'image si le score est positif
                img.src = img_path + i + "vrond.png";
            }
            else
            {
                img.src = img_path + i + "rond.png";
            }
        };
    } 
    else 
    {
        //ne pas charger si pas de score enregistré ou localstorage non supporté.
    }
    get_level();

}

//chargement du score au chargement de la page
chargement_score();