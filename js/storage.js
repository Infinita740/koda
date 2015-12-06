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