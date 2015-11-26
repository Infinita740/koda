var elem = {"droite" : 1,
            "gauche" : 20,
            "tantque" : 60,
            "haut" : 40,
            "tantque" : 80};

function allowDrop(ev) {
    ev.preventDefault();
}

function drag_clone(ev) {
    ev.dataTransfer.setData("id_drag", elem[ev.target.id]);
    
    var item = document.getElementById(ev.target.id);
    clone = item.cloneNode(true);
    clone.id=elem[ev.target.id];
    
    clone.ondragstart = drag;
    //clone.addEventListener("dragstart", drag, false);

    elem[ev.target.id]+=1;

    document.getElementById("invisible").appendChild(clone);
}

function drag(ev){
    ev.dataTransfer.setData("id_drag", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("id_drag");
    console.log(data);
    data = String(data);

    //valeur hardcodée à changer
    if (ev.target.id > 100 || ev.target.id == "saisie") {
        ev.target.appendChild(document.getElementById(data));
    };
    
}

function drop_delete(ev){
    ev.preventDefault();
    var data = ev.dataTransfer.getData("id_drag");
    var parent = document.getElementById("saisie");
    
    console.log(parent);

    var child = document.getElementById(data);
    saisie.removeChild(child);
}   