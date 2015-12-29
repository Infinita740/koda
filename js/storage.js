function save_level(){
    if(typeof(Storage) !== undefined) 
    {
        //code de test pour la sauvegarde (= lvl 1 réussi)
        enregistrement_score(1, 10);
        enregistrement_score(2, 5);

        /*var nodes = $("#saisie").html();
        console.log(nodes);
        var nodes_json = JSON.stringify(nodes);
        console.log(nodes_json);
        localStorage.setItem('saisie', nodes_json);*/
        //alert("Mémorisation effectuée");
    } 

    else 
    {
        alert("localStorage n'est pas supporté");
    }
}

//défini le niveau actuel :
function set_level(lvl){
    chosen_level = lvl;
    localStorage['chosen_level'] = chosen_level;
}

function get_level(){
    if(typeof(Storage) !== undefined) 
    {
        if(localStorage['chosen_level']!= undefined)
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
        //localStorage['chosen_level'] = chosen_level;
        //var nodes = $("#saisie").html();
        //console.log(nodes);
        //var nodes_json = JSON.stringify(nodes);
        //console.log(nodes_json);
        //localStorage.removeItem('saisie', nodes_json);
        //alert("Mémorisation effectuée");

        //localStorage.removeItem('resultat');
        for (var i = 1; i <= 2; i++) { //TO DO : remplacer par des variables globales
            enregistrement_score(i, 0);
        };
    } 

    else 
    {
        alert("localStorage n'est pas supporté");
    }

}

var resultat = [];
resultat[1] = 0;
resultat[2] = 0;


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

        //TODO : finir cette partie
        for (var i = 1; i < resultat.length; i++) {
            //console.log("faire le changement d'image si le score est supérieur à 0");
            var img = document.getElementById("lvl"+i);
            if (resultat[i]) {
                //changement de la couleur de l'image si le score est positif
                img.src = img_path + i + "rondv.png";
            }
            else
            {
                img.src = img_path + i + "rond.png";
            }
        };
        get_level();
    } 
    else 
    {
        //ne pas charger si pas de score enregistré ou localstorage non supporté.
    }

}

//chargement du score automatique au chargement de la page
chargement_score();