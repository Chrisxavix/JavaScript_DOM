/* ------- Atributos  ----------- */
/* Modificar atributos de las etiquetas */

/* Visualizar el valor de un atributo con el punto (.) */
console.log('--------- 1 ---------');
document.documentElement.lang = 'en';
console.log(document.documentElement.lang);

/* Visualizar el valor de un atributo con getAttribute */
console.log('--------- 2 ---------');
console.log(document.documentElement.getAttribute('lang'));

/* Cambiar valor con setAttribute */
console.log('--------- 3 ---------');
document.documentElement.setAttribute('lang', 'es-EC');
console.log(document.documentElement.lang);

/* Traer el valor declarado del atributo de una clase css */
console.log('--------- 4 ---------');
console.log(document.querySelector(".link-dom").getAttribute("href"));

/* Agregar atributos a la clase que tiene el nombre .link-dom */
console.log('--------- 5 ---------');
const $linkDom = document.querySelector('.link-dom');
$linkDom.setAttribute("target", "blank");
$linkDom.setAttribute("id", "test");
$linkDom.setAttribute("href", "https://www.youtube.com");
$linkDom.setAttribute("rel", "noopener");
$linkDom.setAttribute('style', 'color: red;');

/* Agregar atributos con el punto */
console.log('--------- 6 ---------');
const $inputDom = document.getElementById('name')
$inputDom.id = 'idChange';

/* Comprobar que exista el atributo */
console.log('--------- 7 ---------');
const $linkDomV2 = document.querySelector('.link-dom');
console.log($linkDomV2.hasAttribute("rel"));

/* Quitar un atributo con removeAttribute y comprobar que no exista */
console.log('--------- 8 ---------');
const $linkDomV3 = document.querySelector('.link-dom');
$linkDomV3.removeAttribute("rel");
console.log($linkDomV3.hasAttribute("rel"));
