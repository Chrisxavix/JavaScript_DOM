
/* for (i=1;i<10;i++){ 
    document.write("<br><b>La tabla del " + i + ":</b><br>") 
    for (j=1;j<10;j++) { 
       document.write(i + " x " + j + ": ") 
       document.write(i*j) 
       document.write("<br>") 
    } 
} */

/* chris = (a, b) => {
    let result;
    result = a + b;
    return console.log('La suma es: ' + result);
} */

function test(a, b) {
    /* let result;
    let type = parseInt(prompt('1 o 2'));
    if (type === 1) {
        result = a + b;
        return console.log('La suma es: ' + result);
    } else {
        result = a * b;
        return console.log('La multi es: ' + result);
    } */
}

function escribirBienvenida(nombre,colorTexto){
    document.write("<FONT color='" + colorTexto + "'>")
    document.write("<H1>Hola " + nombre + "</H1>")
    document.write("</FONT>")
}

var miArray = new Array(5);
miArray[0] = true;
miArray[1] = 'test';

const testArray = ['test', 'F', 8, true];

function test2(num1) {
    return document.write('test in console: ', num1)
}


const arraytres = [];

arraytres[0]='test';
arraytres[1]=7;
arraytres[5]=true;





console.log(arraytres);
/* console.log(testArray);
console.log(miArray); */
escribirBienvenida('Pepe', 'blue')
test(7, 18);
test2(8);
