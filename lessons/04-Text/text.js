
/* --------------- Texto y HTML -------------------- */

/* textContent: Agrega el texto tal cual lo escribimos */
console.log('--------- 1 ---------');
const $txt01 = document.getElementById("text01");
const num1 = 124;
let testText01 = `<p>EL Dom es <br> parte de la Interfaz. ${num1} espacios</p> <p>Hola</p> `;
$txt01.textContent = testText01;

/* innerHTML: Agrega el texto respetando etiquetas de html */
/* Dentro del id identificado agrega los párrafos */
console.log('--------- 2 ---------');
const num2 = 124;
const $txt02 = document.getElementById("text02");
let testText02 = `<p>EL Dom es <br> parte de la Interfaz. ${num2} espacios</p> <p>Hola</p> `;
$txt02.innerHTML = testText02;

/* outerHTML: Elimina el contenedor con el id y reemplaza */
console.log('--------- 3 ---------');
const $txt03 = document.getElementById("text03");
const num3 = 124;
let testText03 = `<p>EL Dom es <br> parte de la Interfaz. ${num3} espacios</p> <p>Hola</p> `;
$txt03.outerHTML = testText03;