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



// Segunda actividad ******************

var ingredi1 = "Pasta";
var ingredi2 = "Queso";
var ingredi3 = "pesto";
var ingredi4 = "Aceite oliva";
var ingredi5 = "Especies variadas";

var nombreReceta = "Pasta al Pesto";

function receta(ingre1, ingre2,ingre3,ingre4,ingre5,Nombre){
    var resultado = `Mi bolsa de comida: tiene los siguientes ingredientes:  ${ingre1}, ${ingre2}, ${ingre3}, \n ${ingre4}, ${ingre5} Nombre de la receta: ${Nombre}`;

    return resultado;
}

console.log(receta(ingredi1,ingredi2,ingredi3,ingredi4,ingredi5, nombreReceta));


// Tercera actividad ******************



function encabezadoEvento(nombre, lugar){
    return `Evento: ${nombre}. Lugar: ${lugar}`;
  }
  console.log(encabezadoEvento("Intercambio de Libros", "Biblioteca"));
  console.log(encabezadoEvento("Lectura de Poemas", "Sala A"));
  
  function limpiarNombreParticipante(nombre, apellidos){
    return `${apellidos.trim().toUpperCase()}, ${nombre.trim().toLowerCase()}`;
  }
  
  console.log(limpiarNombreParticipante("    Luis", "Castro   "));
  console.log(limpiarNombreParticipante(" ANA", "MENDEZ   "));