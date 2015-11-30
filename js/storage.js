function levelCounter(){
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