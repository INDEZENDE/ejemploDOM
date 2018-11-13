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
        btn.innerHTML = "Botón"
        // Agrego el atributo name por medio de SET con cada iteración
        btn.setAttribute("name", i);
        btn.addEventListener('click', function (e) {
            let evento = e.target.name;
            evento = parseInt(evento) + 1;
            alert('Hola soy el botón' + evento);
        })
        cont.appendChild(btn)

        if (i % 2 == 0) {
            btn.setAttribute("class", "color-par")
        } else {
            btn.setAttribute("class", "color-non")
        }
    }
}

function crear() {
    var grid = document.getElementById("grid").value;
    gridNumber = parseInt(grid);
    grid = gridNumber + 1;
    document.querySelector("#container2").innerHTML = (" ")
    // Crea un cuadro por cada número de entrada
    for (i = 1; i < grid; i++) {
        let gridButton = document.createElement("button");
        gridButton.innerHTML = (i);
        gridButton.setAttribute("id", i);
        document.querySelector("#container2").appendChild(gridButton)
    }


    let formulario = `<form id="formulario" method="Post">
    <input type="text" id="jump" placeholder="¿Cuántos brincos dará la rana?" />
    <input class="button" type="button" name="enviar" value="Brincar" onclick="saltar();" /><br>
    <div id="inputs"></div>
</form>`;
    document.querySelector('#container3').innerHTML = (formulario);
}

function saltar() {
    jump=document.getElementById("jump").value;
    // console.log(gridNumber);
    // console.log(jump);

    if (jump <= gridNumber) {
        console.log("La posición es", +jump)
        document.querySelector("#container4").innerHTML = ("La posición es;", +jump)
    } else {
        let total=(jump%gridNumber)
        if(total==0)document.querySelector("#container4").innerHTML = ("La posición es;", ++gridNumber)
        else document.querySelector("#container4").innerHTML = ("La posición es;", +total)
    }




}