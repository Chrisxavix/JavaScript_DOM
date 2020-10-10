/* ------------------ JAVASCRIPT - DOM ----------------- */
/* 
1) Introducción, line 
1) Nodos, Elementos y Selectores, line 
2) Atributos y Data-Attributes, line 
 */
/* 1) --------------- Introducción ------------------- */
/* Hacer que la PC reconozca la cadena y emita audio */
/* let texto = 'Hola Maggot, eres chido xd xd'
const hablar = (hablar) => speechSynthesis
.speak(new SpeechSynthesisUtterance(texto));
hablar(texto); */
/* Emite:
Audio */

/* Escribir en el DOM */
/* document.write('<h1>Hola <br> Mundo</h1>'); */
/* 1) --------------- Introducción ------------------- */

/* 2) ------ Nodos, Elementos y Selectores  ---------- */
/* Busca el elemento por el id */
/* console.log(document.getElementById("menu")); */

/* Recibe un parámetro válido para la búsqueda 
querySelector: Solo trae el primer elemento/selector que encuentre, como
el de búsqueda de enlace (a).
querySelectorAll: trae todos los selectores. */
/* console.log(document.querySelector('#menu'));
console.log(document.querySelectorAll('#menu li'));
console.log(document.querySelector('a'));
console.log(document.querySelectorAll('a')); 
console.log(document.querySelectorAll('a')[1]);
document.querySelectorAll('a').forEach((elem) => console.log(elem));
console.log(document.querySelector('.card'));
console.log(document.querySelectorAll('.card'));
console.log(document.querySelectorAll(".card")[2]);*/
/* 2) ------ Nodos, Elementos y Selectores  ---------- */

/* 3) ------- Atributos y Data-Attributes  ----------- */
/* document.documentElement.lang = 'en';
console.log(document.documentElement.lang, 'a ver');
document.documentElement.setAttribute('lang', 'es-EC');
console.log(document.documentElement.lang, 'a ver2'); */

/* Agrega un atributo a la clase que tiene el nombre 
.link-dom, es decir, hace que abra en una nueva pestaña */
/* const $linkDom = document.querySelector('.link-dom');
$linkDom.setAttribute("target", "blank"); */

/* Aquí cambiar el valor de (href) por un nuevo enlace */
/* const $linkDom = document.querySelector('.link-dom');
$linkDom.setAttribute("target", "blank");
$linkDom.setAttribute("href", "https://www.youtube.com"); */

/* Quitar un atributo: removeAttribute */
/* const $linkDom = document.querySelector('.link-dom');
$linkDom.setAttribute("target", "blank");
$linkDom.setAttribute("rel", "noopener");
$linkDom.setAttribute("href", "https://www.youtube.com");
// hasAttribute: comprueba que exista el atributo
console.log($linkDom.hasAttribute("rel"));
$linkDom.removeAttribute("rel");
console.log($linkDom.hasAttribute("rel")); */

/* Data-Attributes */
/* const $linkDom = document.querySelector('.link-dom');
console.log($linkDom.getAttribute('data-description'));
// el data set trae todos los atributos con inicial de data
// del template html
console.log($linkDom.dataset);
// trae un elemento
console.log($linkDom.dataset.id);
// modificar un elemento del data
$linkDom.setAttribute('data-id', 4);
console.log($linkDom.dataset.id);
$linkDom.dataset.id = 7;
console.log($linkDom.dataset.id); */
/* 3) ------- Atributos y Data-Attributes  ----------- */
