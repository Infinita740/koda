function voir_le_code()
{
    var tab_code = [];
    var liste = document.getElementById("saisie").childNodes;

    var nom_action;
    var num_action;

    for (var i = 0; i < liste.length; i++) 
    {
        if (liste[i].nodeName=="LI") 
        {
            nom_action = liste[i].actionPerso;

            var opt = liste[i].childNodes[1];

            if (nom_action != "tantque") 
            {
                for (var j = 0; j < opt.length; j++) 
                {
                    if (opt[j].selected) 
                    {
                        //récupération de la valeur sélectionnée
                        if (nom_action != "couleur") 
                        {
                            num_action = parseInt(opt[j].value);
                        }
                        else
                        {
                            num_action = opt[j].value;
                        }
                    };
                };
            }
            console.log(nom_action, num_action);
            tab_code.push([num_action, nom_action]);
        }

    }
    if(typeof(Storage) !== undefined) 
            {
                localStorage['tab_code']= JSON.stringify(tab_code);
            } 
            else 
            {
                alert("localStorage n'est pas supporté");
            }
}
