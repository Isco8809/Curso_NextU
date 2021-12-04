var palabra;
var expreionRegular;

//la "i" al final indica que no importa si es minuscula o mayuscula
expreionRegular = /as/i;
console.log(expreionRegular.test("pASa"))


palabra = "ai1"
//Se instancia el metodo RegExp
//En la expresion regular se indica que la cadena debe comenzar con la letra a, b o c
//Seguida con el caracter "i", seguida con un digito del cero al nueve
expresionRegular = new RegExp('^[abc]i[0-9]')
var resultado = palabra.match(expresionRegular)
console.log(resultado)

//Utilizar expresiones regulares de manera practica
var fila = "Francisco.Echeverri"

//([^.]*)El parentesis camptura el dato, el asterisco indica que es todo antes del punto, y el punto adentro indica 
var filaProcesada = fila.replace(/^([^.]*).([^.]*)/, "$2 --> $1")
filaProcesada

/*Taller
1. Crea una función que valide si un string es un número telefónico (Solo debe soportar números y guiones).
2. Crea una función que valide si un string es una fecha DD-MM-AAAA.
3. Crea una función que valide si un string es un código de exactamente 3 dígitos.*/

function telefono(palabra) {
    expreionRegular = /^\d{3}-\d{4}-?\d?\d?\d?$/;
    var resultado = expreionRegular.test(palabra);
    return resultado
}
function fecha(palabra) {
    expreionRegular = /^(\d{2}-){2}\d{4}/;
    var resultado = expreionRegular.test(palabra);
    return resultado
}
function caracter(palabra) {
    expreionRegular = /^\d{3}$/;
    var resultado = expreionRegular.test(palabra);
    return resultado
}
console.log(fecha("12-11-1999"))
console.log(telefono("123-1212-123"))
console.log(caracter("000"))