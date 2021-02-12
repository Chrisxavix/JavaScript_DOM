const parrafos = document.getElementsByTagName("p");
const primerParrafo = parrafos[0];


const parrafoEspecial = document.getElementsByName("especial");

const cabecera = document.getElementById("cabecera");


/* Creación de un elemento */
const parrafo = document.createElement("p");
const contenido = document.createTextNode("Hola Mundo!");
parrafo.appendChild(contenido);
document.body.appendChild(parrafo);
/* Creación de un elemento */


/* Eliminar un elemento */
const parrafoRemove = document.getElementById("footer");
parrafoRemove.parentNode.removeChild(parrafoRemove);
/* Eliminar un elemento */


/* console.log(cabecera); */
/* console.log(parrafoEspecial); */
/* console.log(primerParrafo); */
