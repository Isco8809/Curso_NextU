function saludar(amigo) {
    console.log(`hola ${amigo}`);
}
saludar('Ana');
function saludarYMas(amigo, otraFuncion) {
    console.log(`hola ${amigo}`);
    otraFuncion('Lucia');
}
function fin(amigo) {
    console.log(`fin ... ${amigo}`)
}
saludarYMas('Pedro',fin)

// Ejemplo con la funcion foreach
var amiguitos = ["Ana", "Lorena", "Sofia"];
amiguitos.forEach(function (amiguito, index) {
    console.log(`hola ${amiguito} y ${index}`);
});
// esta funcion es un metodo de un arreglo, el metood recibe una funcion como argumento, cuyo cuerpo es lo de adentro de los ()
// Lo que hace foreach  es a llamar a la funcion tantas veces tenga el arreglo, pasandole el elemtno actual


function GestionarEstudiante (estudiante,nota1,nota2, Gestion){
    var resGestion = Gestion(nota1,nota2);
    console.log (`Nombre Completo del Estudiante: ${estudiante} ${resGestion}`);
}
function Promedio (nota1,nota2){
    return (nota1+nota2)/2;
}
GestionarEstudiante('Jose Carrillo', 18,20, Promedio);