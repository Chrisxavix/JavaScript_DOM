/* ------------------ JAVASCRIPT - DOM ----------------- */
/* 
1) Eventos, line 
2) Nodos, Elementos y Selectores, line 
3) Atributos y Data-Attributes, line
4) Estilos y Variables CSS 
5) Clases CSS 
6) Texto y HTML
7) Recorriendo el DOM
8) Creando Elementos y Fragmentos
9) Templates HTML
*/

/* 1) --------------------- Eventos -------------------- */
/* Como atributo del html
<button onclick="saludar()">Evento con atributo html</button> */
/* function saludar() {
    alert('Hola mundo');
    console.log(event);
} */

/* Como manejador de eventos, se iguala a la función, pero
sin los paréntesis.
La abreviatura de evento es (e).
Solo toma una función. */
/* const $eventosemantico = document.getElementById("evento-semantico");
function saludar() {
    alert('Hola mundo');
    console.log(event);
}
$eventosemantico.onclick = saludar;
$eventosemantico.onclick = function(e) {
    alert('Hola mundo semántico');
    console.log(e);
} */

/* Manejadores múltiples.
Ejecuta varias funciones.
Sin paréntesis la función.*/
/* const $eventomultiple = document.getElementById("evento-multiple");
function saludar() {
    alert('Hola mundo');
    console.log(event);
}
$eventomultiple.addEventListener("click", saludar)
$eventomultiple.addEventListener("click", (e) => {
    alert('Hola mundo múltiple.');
    console.log(e);
    console.log(e.type);
    console.log(e.target);
}) */
/* 1) --------------------- Eventos -------------------- */
