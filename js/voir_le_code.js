function show_code()
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
                tab_code.push([nom_action, num_action]);
            }
            else{
                //cas du tant que :
                var select = liste[i].childNodes[1];
                //récupération de la valeur du tq :
                for(var j = 0; j < select.childElementCount; j++){
                    if(select[j].selected){
                        num_action = select[j].value;
                        tab_code.push([nom_action, num_action])
                    }
                }

                //récupération de l'intérieur du tq
                actions = liste[i].childNodes[2];
                for (var k = 0; k<actions.childNodes.length; k++){
                    nom_action = actions.childNodes[k].actionPerso;
                    var opt = actions.childNodes[k].childNodes[1];
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
                tab_code.push([nom_action, num_action]);
                }
                tab_code.push(['ftq', '/']);
            }
            
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

function gen_code(){
    var codes = JSON.parse(localStorage['tab_code']);
    var func = {
        "droite":"deplacerDroite",
        "gauche":"deplacerGauche",
        "haut":"deplacerHaut",
        "bas":"deplacerBas",
        "couleur":"changerCouleur"
    }
    var indent = false;
    var code_affichage = $("#code_js").html();
    for(var j = 0; j < codes.length; j++){

        if(codes[j][0] != "tantque" && codes[j][0] != "ftq"){
            if(indent){code_affichage+="    "};
            
            if(codes[j][0] == "couleur") {code_affichage += func[codes[j][0]] + "(\"" + codes[j][1] + "\");\n"; }
            else {code_affichage += func[codes[j][0]] + "(" + codes[j][1] + ");\n";}
        }
        if(codes[j][0] == "ftq"){
            indent = false;
            code_affichage += "}\n\n";
        }
        if(codes[j][0] == "tantque"){
            indent = true;
            code_affichage += "\nfor(var i = 0; i < " + codes[j][1] + "; i ++){\n";
        }
        
    }
    $("#code_js").html(code_affichage);
}