function save_level(){
    if(typeof(Storage) !== "undefined") 
    {
        localStorage['chosen_level'] = chosen_level;
        alert("Mémorisation effectuée");
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
            alert(localStorage['chosen_level']);
        }
    }
    else 
    {
        alert("localStorage n'est pas supporté");
    }
}