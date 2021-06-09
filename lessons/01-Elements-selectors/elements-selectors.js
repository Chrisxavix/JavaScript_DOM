/* ------ Nodos, Elementos y Selectores  ---------- */

/* Por id de la etiqueta */
console.log('--------- 1 ---------');
console.log(document.getElementById('menu'));

/* Acceder por id, usar # */
console.log('--------- 2 ---------');
console.log(document.querySelector('#menu'));

/* Trae la primera etiqueta que aparezca */
console.log('--------- 3 ---------');
console.log(document.querySelector('a'));

/* Trae todas las etiquetas que aparezcan */
console.log('--------- 4 ---------');
console.log(document.querySelectorAll('a'));

/* Trae la etiqueta con la posición requerida */
console.log('--------- 5 ---------');
console.log(document.querySelectorAll('a')[1]);

/* Para acceder a una clase css */
console.log('--------- 6 ---------');
console.log(document.querySelector('.card'));

/* Para acceder a una clase css por posición */
console.log('--------- 7 ---------');
console.log(document.querySelectorAll(".card")[2]);
