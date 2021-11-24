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