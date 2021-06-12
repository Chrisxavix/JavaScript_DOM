/* ------- Creando Elementos y Fragmentos ---------- */

/* Crear un tarjeta nueva. OPCION 1 */
console.log('--------- 1 ---------');
// Buscamos en dónde queremos agregar, en este caso en cards, por lo que seleccionamos la clase css .cards con querySelector
const $cards = document.querySelector(".cards");
// Creamos las etiquetas con createElement
const $figure = document.createElement("figure");
const $img = document.createElement("img");
const $figcaption = document.createElement("figcaption");
// Creamos un texto con createTextNode
const $figcaptionText = document.createTextNode("Animals");
// Agregamos los atributos dentro de la etiqueta creada imagen
$img.setAttribute("src","https://placeimg.com/100/100/animals");
$img.setAttribute("alt", "Animals");
// Agregamos la clase css card
$figure.classList.add("card");
// Dentro del figcaption agregamos el texto
$figcaption.appendChild($figcaptionText);
// Dentro de la figura agreagamos la imagen y el figcaption que contiene el texto
$figure.appendChild($img);
$figure.appendChild($figcaption);
// Dentro de la sección de cards agregamos la nueva card
$cards.appendChild($figure);

/* Crear un tarjeta nueva. OPCION 2 */
console.log('--------- 2 ---------');
// Buscamos en dónde queremos agregar, en este caso en cards, por lo que seleccionamos la clase css .cards con querySelector
const $cardsOp2 = document.querySelector(".cards");
// Creamos las etiquetas con createElement
const $figureOp2 = document.createElement("figure");
// Agregamos sentencias html que será leído con innerHTML
$figureOp2.innerHTML = `<img src='https://placeimg.com/100/100/tech' alt='Tech'> <figcaption>Tech</figcaption>`;
// Agregamos la clase css 
$figureOp2.classList.add("card");
$cards.appendChild($figureOp2);

/* Agregando un script en el head */
console.log('--------- 3 ---------');
// Buscamos en dónde queremos agregar el script
const $head = document.head;
// Creamos el script
const $scriptAdd = document.createElement("script");
// Agregamos atributos
$scriptAdd.id = 'idScript';
$scriptAdd.src = 'test.js';
$scriptAdd.innerText= 'test';
// Agregamos el script
$head.appendChild($scriptAdd);

/* Agregando un script en un orden específico en el head */
console.log('--------- 4 ---------');
// Buscamos en dónde queremos agregar el script
const $headV2 = document.head;
// Quiero que el script esté en la posición 2
// Nos colocamos en la posición 1 de los hijos de head
const $beforeAdd = $head.children[1];
// Creamos el script
const $scriptAddV2 = document.createElement("script");
// Agregamos atributos
$scriptAddV2.id = 'idScript';
$scriptAddV2.src = 'test.js';
$scriptAddV2.innerText= 'test';
// Agregamos el script de acuerdo a la posición que queremos que tome
$head.insertBefore($scriptAddV2, $beforeAdd);

/* Crendo una lista en el DOM de acuerdo a un array */
console.log('--------- 5 ---------');
const estaciones = ["Primavera", "Otoño", "Invierno", "Verano"];
// Selecionamos en donde agregar a partir del id en el template
const $sectionEstaciones = document.getElementById('lista-estaciones');
// Creamos la etiqueta
const $ul = document.createElement("ul");
// Agregamos la etiqueta dentro del id encontrado
$sectionEstaciones.appendChild($ul);
// Recorremos el array
estaciones.forEach(elemnt => {
    // Cada elemnt es un item del array -> Primavera", "Otoño", "Invierno", "Verano
    // Por cada item creamos una etiqueta li
    const $li = document.createElement('li');
    // A cada li le asignamos el valor del array con textContent -> Primavera", "Otoño", "Invierno", "Verano
    $li.textContent = elemnt;
    // Dentro de la etiqueta ul vamos agregando un li 
    $ul.appendChild($li);
});

/* Fragmento */
/* Al crear etiquetas en el DOM se hace de acuerdo al código de insercción, es decir, uno a uno, cuando son pocos items no hay problema. Pero cuando son demasidos items al hacer insercciones uno a uno la aplicación va a ser lenta, por lo que se hace uso de fragmentos, ya que en una insercción agrega todos los items */
console.log('--------- 5 ---------');
const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
// Selecionamos en donde agregar a partir del id en el template
const $sectionMeses = document.getElementById('lista-meses');
// Creamos la etiqueta
const $ulFr = document.createElement("ul");
// Creamos el fragmento
const $fragment = document.createDocumentFragment();
// Agregamos la etiqueta dentro del id encontrado
$sectionMeses.appendChild($ulFr);
// Recorremos el array
meses.forEach(elemnt => {
    // Por cada item creamos una etiqueta li
    const $liFr = document.createElement("li");
    // A cada li le asignamos el valor del array con textContent -> "Enero", "Febrero", "Marzo",...
    $liFr.textContent = elemnt;
    // Agregamos todos los items al fragmento
    $fragment.appendChild($liFr);
});
// En una sola insercción agregamos todos los items
$ulFr.appendChild($fragment);
