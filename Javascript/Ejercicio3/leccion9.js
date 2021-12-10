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

// funcion filter, está disponibles para variables tipo arreglo

var filttrado
var edades
edades = [20,15,30,22,17,18,25,27,29];
filttrado  = edades.filter(function(x){
    return x%2 == 0;
});
console.log(filttrado);

//El equivalente a la funcion anterior es (=> indica que es una funcion)
filttrado = edades.filter( x => {
    return x > 22;
});
console.log(filttrado);

// Ejemplo con un arreglo más completo


var filttrado
var personas

personas = [
    {
        nombre: "Ana",
        edad: 15
    },
    {
        nombre: "Luisa",
        edad: 22
    },
    {
        nombre: "Carlos",
        edad: 30
    }
];

filttrado = personas.filter( x => {
    return x.edad > 19;
})
console.log(filttrado)

filttrado = personas.map( x => {
    return x.nombre;
})
console.log(filttrado) // devuelve ['Ana','Luisa','Carlos']

filttrado = personas.find( x => {
    return x.nombre = "Ana";
})
console.log(filttrado) // devuelve {nombre: 'Ana' , edad: 15}