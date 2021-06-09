/* ------------------ JAVASCRIPT - DOM ----------------- */
/* 
3) Atributos y Data-Attributes, line 46
4) Estilos y Variables CSS, line 87
5) Clases CSS, line 102
6) Texto y HTML, line 111
7) Recorriendo el DOM, line 121
8) Creando Elementos y Fragmentos, line 144
9) Templates HTML, line 212
*/

/* 3) ------- Atributos y Data-Attributes  ----------- */
/* Cambia en el template los valores */
/* document.documentElement.lang = 'en';
console.log(document.documentElement.lang, 'a ver');
/* o usando setAttribute */
/* document.documentElement.setAttribute('lang', 'es-EC');
console.log(document.documentElement.lang, 'a ver2'); */

/* Traer el atributo tal cual se marcó en el html */
/* console.log(document.querySelector(".link-dom").getAttribute("href")); */

/* Agrega un atributo a la clase que tiene el nombre 
.link-dom, es decir, hace que abra en una nueva pestaña */
/* const $linkDom = document.querySelector('.link-dom');
$linkDom.setAttribute("target", "_blank");
$linkDom.setAttribute("id", "test");
 */
/* Aquí cambiar el valor de (href) por un nuevo enlace */
/* const $linkDom = document.querySelector('.link-dom');
$linkDom.setAttribute("target", "blank");
$linkDom.setAttribute("href", "https://www.youtube.com"); */

/* Quitar un atributo: removeAttribute */
/* const $linkDom = document.querySelector('.link-dom');
$linkDom.setAttribute("target", "blank");
$linkDom.setAttribute("rel", "noopener");
$linkDom.setAttribute("href", "https://www.youtube.com");
// hasAttribute: comprueba que exista el atributo, tiene que dar true en la consola
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

/* 4) --------- Estilos y Variables CSS   ------------ */
/* const $linkDom = document.querySelector('.link-dom');
console.log($linkDom.style); */

/* Poner estilos a un atributo */
/* $linkDom.style.setProperty("font-size", "4rem") */
/* o con */
/* $linkDom.style.textDecoration = "none"; */

/* Cambiar el fondo al body */
/* const $body = document.querySelector("#body")
$body.setAttribute("style", "background-color: blue;"); */
/* Cambiar el fondo al body */

/* const $html = document.documentElement;
const $body = document.body;
//Acceder a las variables
let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color")
let varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color")
console.log($html);
console.log($body);
console.log(varDarkColor);
console.log(varYellowColor);
//Cambiar fondo a la página desde las variable en HTML
$body.style.backgroundColor = varDarkColor;
$body.style.color = varYellowColor; */
/* 4) --------- Estilos y Variables CSS   ------------ */

/* 5) ---------------- Clases CSS -------------------- */
/* const $card = document.querySelector(".card");
$card.classList.add("rotate-45");
$card.classList.add("opacity-80", "sepia");
$card.classList.replace("rotate-45", "rotate-135");
$card.classList.remove("opacity-80", "sepia");
$card.classList.toggle("opacity-80", "sepia"); */

/* Para agregar el efecto a todos se hace con un ForEach */
/* const $card = document.querySelectorAll(".card");
$card.forEach(elem => {
    elem.classList.add("rotate-45");
}) */
/* 5) ---------------- Clases CSS -------------------- */

/* 6) --------------- Texto y HTML -------------------- */
/* Reemplazar el texto que tiene el html con (innerHTML) */
/* const $whatisDOM = document.getElementById("que-es");
let text = "<p> EL Dom es <br> parte de la Interfaz.</p>" +
"<p>El diseño va en css.</p>"; */
// $whatisDOM.innerText = text; //Agrega el texto tal cual lo escribimos, como notaciones html
// $whatisDOM.innerHTML = text; // Agrega el texto respetando etiquetas de html
// $whatisDOM.textContent = text; // Agrega el texto en linea seguida, no respeta etiquetas html
// $whatisDOM.outerHTML = text; // Elimina el menú de p, y cada parrafo toma posición, mejora la semántica
/* 6) --------------- Texto y HTML -------------------- */

/* 7) ------------ Recorriendo el DOM ----------------- */
/* Enfocado a las etiquetas de html */
/* const $cards = document.querySelector(".cards");
console.log($cards);
// Accede a los hijos
console.log($cards.children);
// Accede a un hijo
console.log($cards.children[2]);
// Acceder al primero o último elemento
// Con esos dos, toma el espacio como text
console.log($cards.firstChild);
console.log($cards.lastChild);
// Sin el espacio que existe 
console.log($cards.firstElementChild);
console.log($cards.lastElementChild);
// Ya no dentro de los elemntos de .card, sino las
// etiquetas que anteceden o van después 
console.log($cards.previousElementSibling);
console.log($cards.nextElementSibling);
// Métodos cercanos
console.log($cards.children[3].closest("section")); */
/* 7) ------------ Recorriendo el DOM ----------------- */

/* 8) ------- Creando Elementos y Fragmentos ---------- */
/* Crear un tarjeta nueva. */
/* OPCION 1 */
/* const $figure = document.createElement("figure");
const $img = document.createElement("img");
const $figcaption = document.createElement("figcaption");
const $figcaptionText = document.createTextNode("Animals");
const $cards = document.querySelector(".cards");

$img.setAttribute("src","https://placeimg.com/200/200/animals");
$img.setAttribute("alt", "Animals");
// Agrega la clase card del CSS
$figure.classList.add("card");
$figcaption.appendChild($img);
$figcaption.appendChild($figcaptionText);
$figure.appendChild($img);
$figure.appendChild($figcaption);
$cards.appendChild($figure); */

/* OPCION 2, recomendado */
/* const $figure2 = document.createElement("figure");
const $cards = document.querySelector(".cards");

$figure2.innerHTML = "<img src='https://placeimg.com/200/200/animals' alt='Animals'>" + 
"<figcaption>Animals</figcaption>";  
$figure2.classList.add("card");
$cards.appendChild($figure2); */

/* const estaciones = ["Primavera", "Otoño", "Invierno", "Verano"];
const $ul = document.createElement("ul");

document.write("<h2> Estaciones del Año </h2>");
document.body.appendChild($ul);
estaciones.forEach(elemnt => {
    const $li = document.createElement('li');
    $li.textContent = elemnt;
    $ul.appendChild($li)
}) */

/* Fragmento: El recomendado a hacer  */
/* const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
];
const $ul = document.createElement("ul");
const $fragment = document.createDocumentFragment();

meses.forEach(elemnt => {
    const $li = document.createElement("li");
    $li.textContent = elemnt;
    $fragment.appendChild($li);
})

document.write("<h2> Meses del Año </h2>");
$ul.appendChild($fragment);
document.body.appendChild($ul); */
/* 8) ------- Creando Elementos y Fragmentos ---------- */

/* 9) ------------- Templates HTML -------------------- */
/* const $card = document.querySelector(".cards");
// con content entra al contenido
const $template = document.getElementById("template-card").content;
const $fragment = document.createDocumentFragment();

const cardContent = [
    {
        title: "Tecnología",
        img:"https://placeimg.com/200/200/tech"
    },
    {
        title: "Animales",
        img:"https://placeimg.com/200/200/animals"
    },
    {
        title: "Arquitectura",
        img:"https://placeimg.com/200/200/arch"
    },
    {
        title: "Gente",
        img:"https://placeimg.com/200/200/people"
    },
    {
        title: "Naturaleza",
        img:"https://placeimg.com/200/200/nature"
    }
];
cardContent.forEach(elemnt => {
    $template.querySelector("img").setAttribute("src", elemnt.img);
    $template.querySelector("img").setAttribute("alt", elemnt.tittle);
    $template.querySelector("figcaption").textContent = elemnt.title;
    
    // Clonación
    let $clone = document.importNode($template, true);
    $fragment.appendChild($clone);
})

$card.appendChild($fragment); */
/* 9) ------------- Templates HTML -------------------- */

/* 10) ------------- Insertar elementos -------------------- */
/* Agregar un span a un título */
/* const $title = document.getElementById("title")
$title.innerHTML = "DOM - <span>Crear e insertar elementos.</span>" */

/* Con este método se sobrecarga y consume mucho recursos */
/* const $days = ["Lunes", "Martes", "Miercoles"];
const $daysList = document.getElementById("daysList")
const $daysSelect = document.getElementById("daysSelect");


$days.forEach(element => {
    $daysList.innerHTML += `<li>${element}</li>`
    console.log(element);
})

$days.forEach(element => {
    $daysSelect.innerHTML += `<option value="${element}">${element}</option>`
    console.log(element);
}) */

/* Haciendo con fragmentos */
/* const $days = ["Lunes", "Martes", "Miercoles"];
const $daysList = document.getElementById("daysList")
const $daysListArray = document.querySelectorAll("daysList")
const $daysSelect = document.getElementById("daysSelect");
const $fragment = document.createDocumentFragment();
const $fragment2 = document.createDocumentFragment();

$days.forEach(element => {
    const $itemList = document.createElement('li')
    $itemList.textContent = element;
    $fragment.appendChild($itemList);
})
// Agregamos el fragmento
$daysList.appendChild($fragment)

$days.forEach(element => {
    const $itemList2 = document.createElement('option')
    $itemList2.textContent = element;
    $fragment2.appendChild($itemList2);
})
// Agregamos el fragmento
$daysSelect.appendChild($fragment2) */
/* 10) ------------- Insertar elementos -------------------- */
