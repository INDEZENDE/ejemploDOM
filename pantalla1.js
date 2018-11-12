function recibir() {
    //Traigo el valor del input
    var valor = document.getElementById("texto").value;
    // Traigo el contenedor
    var cont = document.querySelector("#container");
    // Limpio el contenedor (padre)
    cont.innerHTML = "";
    // Creo un elemento de tipo p (hijo)
    var p = document.createElement("p");
    // Agrego el hijo al padre
    cont.appendChild(p);

    // comienzo la generación de botones
    for (i = 0; i < valor; i++) {
        // Crea un botón por cada iterción
        var btn = document.createElement("button");
        btn.innerHTML="Botón"
        // Agrego el atributo name por medio de SET con cada iteración
        btn.setAttribute("name", i);
        btn.addEventListener('click', function(e){
            let evento =e.target.name;
            evento=parseInt(evento)+1;
            alert('Hola soy el botón'+evento );})
        cont.appendChild(btn)

        if(i%2==0){
            btn.setAttribute("class", "color-par")
        }
        else{
            btn.setAttribute("class", "color-non")
        }
    }

}