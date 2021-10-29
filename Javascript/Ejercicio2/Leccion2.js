/*
Prueba para leer las filas y retornar los valores 

Ejemplo: para la fila  "     LuiS, BLANCO        "
*/

function letraCapital (x) {
    return x.charAt(0).toUpperCase() + x.slice(1).toLowerCase()
}

function procesarFila (fila){
    var arreglo =  fila.split(",");
    var nombre = arreglo[0].trim();
    var apellido = arreglo[1].trim();
    return letraCapital(nombre) + " " + letraCapital(apellido)
}

var fila = "     aNa, BLANCO        "

console.log(procesarFila(fila))
