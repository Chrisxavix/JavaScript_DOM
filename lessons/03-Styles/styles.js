/* 4) --------- Estilos y Variables CSS   ------------ */

/* Lista de escritura camelCase para agregar estilos */
console.log('--------- 1 ---------');
const $domListStyle = document.querySelector('.link-dom');
console.log($domListStyle.style);

/* Con style.setProperty apuntando a la clase con querySelector */
console.log('--------- 2 ---------');
const $linkDom = document.querySelector('.link-dom');
$linkDom.style.setProperty("font-size", "25px");
$linkDom.style.setProperty("color", "brown");

/* Con style apuntando a la clase con querySelector */
console.log('--------- 3 ---------');
const $linkTest = document.querySelector('.link-test');
$linkTest.style.textDecoration = "none";
$linkTest.style.color = "rgb(204, 216, 35)";
$linkTest.style.fontWeight = "bold";
$linkTest.style.fontSize = "30px";

/* setAttribute apuntando al id con querySelector */
console.log('--------- 4 ---------');
const $paragraph = document.querySelector("#que-es")
$paragraph.setAttribute("style", "background-color: blue;");

/* Acceder a las variables desde la hoja de estilos */
console.log('--------- 5 ---------');
// Las variables están en la hoja de estilos declarado en el html, por lo que se declara una variable
const $html = document.documentElement;
const $variables = document.getElementById('variables');
let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");
let varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");
// Asignamos las variables
$variables.style.backgroundColor = varDarkColor;
$variables.style.color = varYellowColor;

/* Modificar más clases css a una clase que ya contiene css */
console.log('--------- 5 ---------');
const $card = document.querySelector(".card");
// Agregando una clase
console.log('--------- 5.1 ---------');
$card.classList.add("rotate-45");
// Agregando dos clases más
console.log('--------- 5.2 ---------');
$card.classList.add("opacity-80", "sepia");
// Reemplaza una clase por otra
console.log('--------- 5.3 ---------');
$card.classList.replace("rotate-45", "rotate-135");
// Eliminar una clase o más
console.log('--------- 5.4 ---------');
$card.classList.remove("opacity-80", "sepia");
// Con el toggle verifica si tiene la clase, si la tiene la elimina y si no la tiene la agrega
console.log('--------- 5.5 ---------');
$card.classList.toggle("opacity-80");
$card.classList.toggle("sepia");
// Para agregar una clase a todos se hace con un forEach
console.log('--------- 5.6 ---------');
const $cardFor = document.querySelectorAll(".card");
$cardFor.forEach(elem => {
    elem.classList.add("rotate-45");
});
