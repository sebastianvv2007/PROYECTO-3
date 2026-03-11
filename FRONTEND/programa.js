const boton = document.getElementById("btnMostrar");
const lista = document.getElementById("listaParaderos");

boton.addEventListener("click", mostrarParaderos);

function mostrarParaderos(){

    const paraderos = [
        "Paradero Calle 13",
        "Paradero San Victorino",
        "Paradero Carrera 10",
        "Paradero Avenida Caracas",
        "Paradero Plaza España"
    ];

    lista.innerHTML = "";

    paraderos.forEach(function(paradero){

        const elemento = document.createElement("div");
        elemento.className = "paradero";
        elemento.textContent = paradero;

        lista.appendChild(elemento);
    });
}