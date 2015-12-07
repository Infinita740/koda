function save_level(){
    if(typeof(Storage) !== undefined) 
    {
        localStorage['chosen_level'] = chosen_level;
        var nodes = $("#saisie").html();
        console.log(nodes);
        var nodes_json = JSON.stringify(nodes);
        console.log(nodes_json);
        localStorage.setItem('saisie', nodes_json);
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
            var x = JSON.parse(localStorage['saisie']);
            $("#saisie").html(x);
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
        /*if(chosen_level == win){
             localStorage['level_termine','score'] = chosen_level, score[1];
        var nodes = $("#level_termine", "#score").html();
        console.log(nodes);
        var nodes_json = JSON.stringify(nodes);
        console.log(nodes_json);
        localStorage.setItem('level_termine','score', nodes_json);*/
        //alert("Mémorisation effectuée");
        resultat[lvl] = score;

        var resultat_JSON = JSON.stringify(resultat);
        localStorage['resultat'] = resultat_JSON;
       
    } 
    else 
    {
        alert("localStorage n'est pas supporté");
    }

}

function chargement_score(){
    if(typeof(Storage) !== undefined) 
    {
        resultat = JSON.parse(localStorage['resultat']);
       
    } 
    else 
    {
        alert("localStorage n'est pas supporté");
    }

}