function save_level(){
    if(typeof(Storage) !== undefined) 
    {
        localStorage['chosen_level'] = chosen_level;

        //code de test pour la sauvegarde (= lvl 1 réussi)
        resultat[1] = 10;
        resultat[2] = 5;
        var resultat_JSON = JSON.stringify(resultat);
        localStorage['resultat'] = resultat_JSON;
        console.log("victoire niv 1 sauvegardée !");

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

function get_level(){
    if(typeof(Storage) !== undefined) 
    {
        if(localStorage['chosen_level']!= undefined)
        {
            //alert(localStorage['chosen_level']);
            //var x = JSON.parse(localStorage['saisie']);
            //$("#saisie").html(x);
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
        localStorage['chosen_level'] = chosen_level;
        var nodes = $("#saisie").html();
        console.log(nodes);
        var nodes_json = JSON.stringify(nodes);
        console.log(nodes_json);
        localStorage.removeItem('saisie', nodes_json);
        //alert("Mémorisation effectuée");
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
            if (resultat[i]) {
                //changement de la couleur de l'image si le score est positif
                var img = document.getElementById("lvl"+i);
                img.src = img_path + i + "rondv.png";
            }
        };
       
    } 
    else 
    {
        //ne pas charger si pas de score enregistré ou localstorage non supporté.
    }

}

//chargement du score automatique au chargement de la page
chargement_score();