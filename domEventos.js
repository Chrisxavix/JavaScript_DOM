/* ------------------ JAVASCRIPT - DOM ----------------- */
/* 
1) Eventos, line 11
2) Eventos con Parámetros y Remover Eventos, line 51
3) Flujo de Eventos (Burbuja y Captura) line 85
4) Delegación de Eventos 108
5) BOM: Métodos line 127
6) URL, Historial y Navegador line 143
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

/* 2) ---- Eventos con Parámetros y Remover Eventos ---- */
/* const $eventomultiple = document.getElementById("evento-multiple");
function saludar(name="desconocido") {
    alert(`Hola ${name}`);
}
function holaMundo() {
    alert('Hola mundo');
}
$eventomultiple.addEventListener("click", holaMundo)
$eventomultiple.addEventListener("click", (e) => {
    alert('Hola mundo múltiple.');
})
$eventomultiple.addEventListener("click", () => saludar('Chris'));
 */

/* Deshabilitar botones
const $eventoremover = document.getElementById("evento-remover");
// Función declarada 
function remover2(e) {
    alert(`Removiendo el evento de tipo ${e.type}`);
    $eventoremover.removeEventListener("dblclick", remover2);
}
// Función expresada 
const remover = (e) => {
    alert(`Removiendo el evento de tipo ${e.type}`);
    $eventoremover.removeEventListener("dblclick", remover);
    $eventoremover.disabled = true;
}
// Con función expresada
$eventoremover.addEventListener("dblclick", remover);
// Con función declarada
// $eventoremover.addEventListener("dblclick", remover2); */
/* 2) ---- Eventos con Parámetros y Remover Eventos ---- */

/* 3) ------ Flujo de Eventos (Burbuja y Captura) ------ */
/* const $diveventos = document.querySelectorAll(".eventos-flujo div");
function flujoeventos(e) {
    console.log(`hola, te saluda ${this.className}, el click fue de ${e.target.className}`);
}
$diveventos.forEach(div => {
    // Burbuja, sin el tercer parámetro o agregar false
    // De adentro hacia afuera
    // ASÍ: div.addEventListener("click", flujoeventos, false);
    // div.addEventListener("click", flujoeventos, false);
    
    // Captura, agregando true
    // De afuera hacia adentro
    // ASÍ: div.addEventListener("click", flujoeventos, true);
    // div.addEventListener("click", flujoeventos, true);

    // Que se ejecute una sola vez
    div.addEventListener("click", flujoeventos, {
        once: true
    });
}) */
/* 3) ------ Flujo de Eventos (Burbuja y Captura) ------ */

/* 4) ------------ Delegación de Eventos  ------------- */
/* function flujoeventos(e) {
    console.log(`hola, te saluda ${this}, el click fue de ${e.target.className}`);
}

document.addEventListener("click", (e) => {
    // matches busca un selector válido

    if (e.target.matches(".eventos-flujo div")) {
        flujoeventos(e);
    }
    
    if (e.target.matches(".eventos-flujo a")) {
        alert('holi')
        e.preventDefault();
    }
}); */
/* 4) ------------ Delegación de Eventos  ------------- */

/* 5) ---------------- BOM: Métodos ------------------- */
/* const $abrir = document.getElementById("abrir-ventana");
const $cerrar = document.getElementById("cerrar-ventana");
const $imprimir = document.getElementById("imprimir-ventana");
let windo;
$abrir.addEventListener("click", (e) => {
    windo = window.open("https://www.twitch.tv/duxativa");
});
$cerrar.addEventListener("click", (e) => {
    windo.close();
});
$imprimir.addEventListener("click", (e) => {
    print();
}); */
/* 5) ---------------- BOM: Métodos ------------------- */

/* 6) ---------- URL, Historial y Navegador ----------- */
/* URL */
/* console.log(location);
console.log(location.origin);
console.log(location.protocol);
console.log(location.host);
console.log(location.hostname);
console.log(location.port);
console.log(location.href);
console.log(location.hash);
console.log(location.search);
console.log(location.pathname); */

/* History */
/* console.log(history);
console.log(history.length);
console.log(history.forward(1));
console.log(history.go(2));
console.log(history.back(1)); */

/* Navegador */
/* console.log(navigator); */
/* 6) ---------- URL, Historial y Navegador ----------- */
