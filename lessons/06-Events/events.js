/* 1) --------------------- Eventos -------------------- */

/* Como atributo del html con:
<button onclick="saludar()">Evento con atributo html</button> */
console.log('--------- 1 ---------');
function saludarMundo() {
    console.log('Hi World');
    console.log(event);
}

/* Por id de la etiqueta, OPCIÓN 1 */
console.log('--------- 2 ---------');
const $eventoSemantico = document.getElementById("evento-semantico");
// Declaración de la función a ejecutarse al ser llamada
function saludarSemantico() {
    console.log('Hi Semántico');
    console.log(event);
}
// Llamar la función sin los paréntesis.
$eventoSemantico.onclick = saludarSemantico;

/* Por id de la etiqueta, OPCIÓN 2 */
console.log('--------- 3 ---------');
const $eventoSemanticoV2 = document.getElementById("evento-semantico-v2");
/* Asignando el evento click */
$eventoSemanticoV2.onclick = function(e) {
    console.log('Hi Semántico Two');
    console.log(e);
}

/* Ejecutar funciones múltiples */
console.log('--------- 4 ---------');
const $eventoMultiple = document.getElementById("evento-multiple");
function saludar() {
    console.log('Hi Multiple');
    console.log(event);
}
function despedir() {
    console.log('Bye Multiple');
    console.log(event);
}
// Toma varias funciones, usar sin el paréntesis
$eventoMultiple.addEventListener("click", saludar)
$eventoMultiple.addEventListener("click", despedir)
$eventoMultiple.addEventListener("click", (e) => {
    console.log('Multiple');
    console.log(e);
    console.log(e.type);
    console.log(e.target);
});

/* Función con parámetros */
console.log('--------- 5 ---------');
const $eventoMultipleParam = document.getElementById("evento-multiple-v2");
function saludarMultiple(name="desconocido") {
    console.log(`Hola ${name}`);
}
function holaMundoMultiple() {
    console.log(`Hola mundo`);
}
$eventoMultipleParam.addEventListener("click", holaMundoMultiple)
$eventoMultipleParam.addEventListener("click", () => saludarMultiple('Chris'));

/* Deshabilitar botón al hacer doble click */
console.log('--------- 6 ---------');
const $eventoRemover = document.getElementById("evento-remover");
function remover(e) {
    console.log(`Deshabilitar botón con el evento de tipo ${e.type}`);
    $eventoRemover.removeEventListener("dblclick", remover);
    $eventoRemover.disabled = true;
}
$eventoRemover.addEventListener("dblclick", remover);
