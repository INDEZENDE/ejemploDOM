function recibir() {
    var valor = document.getElementById("texto").value;
    // document.getElementById("txt").innerHTML=valor; 
    var cont = document.querySelector("#container");
    var p = document.createElement("p");
    // cont.removeChild(cont.childNodes);
    cont.appendChild(p)
    console.log(valor);


    for (i = 0; i < valor; i++) {
        // cont.removeChild(all);
        var cont = document.querySelector("#container");
        var btn = document.createElement("button");

        cont.appendChild(btn)
    }

}