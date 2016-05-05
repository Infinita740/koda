$(function  () {
            //axtivation de la bibliothèque jquery sortable
            $("#saisie").sortable(
            { group:'connected-group',
            onDrop:function($item, container, _super, event)
                {
                    if(container.target[0].id=="trash"){
                        vider_corbeille(); //si on déplace un élément sur la corbeille on la vide
                    }
                    if(parseInt($item[0].id) >= 100 && container.target[0].className=="inner"){
                        logErreur("tantque");
                        $item[0].remove(); //suppression des items tanque déplacés dans d'autres boucles car les boucles imbriquées ne sont pas prises en charge
                    }
                    _super($item, container);
                }
        });

            $("#trash").sortable(
            {
                group:'connected-group',
            })
        });