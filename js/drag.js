	<FORM NAME="Choix">
		<SELECT NAME="Liste" onChange="">
			<OPTION VALUE=" ">1
			<OPTION VALUE=" ">2
			<OPTION VALUE=" ">3
			<OPTION VALUE=" ">4
		</SELECT>
	</FORM>

var elem = {"avancer" : 1,
            "reculer" : 20,
            "tantque" : 60,
            "tourner" : 40}

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

function drag(ev) {
    ev.dataTransfer.setData("id_drag", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("id_drag");
    /*if (ev.target.id == 'saisie' || ev.target.id == 'tantque'){
        ev.target.appendChild(document.getElementById(data));
    }*/
    console.log(data);
    data = String(data);
    if (ev.target.id > 59 || ev.target.id == "saisie") {
        ev.target.appendChild(document.getElementById(data));
    };
}

function drop_delete(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("id_drag");
    var parent = document.getElementById("saisie");
    
    console.log(parent);

    var child = document.getElementById(data);
    saisie.removeChild(child);
}   