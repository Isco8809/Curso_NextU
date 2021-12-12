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


// Taller

var eventos = [
    {
        nombre: "e1",
        fecha: new Date(2018,3,20)
    },
    {
        nombre: "e2",
        fecha: new Date(2018,2,20)
    },
    {
        nombre: "e3",
        fecha: new Date(2018,3,10)
    },
    {
        nombre: "e4",
        fecha: new Date(2018,5,20)
    },
    {
        nombre: "e5",
        fecha: new Date(2018,6,20)
    },
    {
        nombre: "e6",
        fecha: new Date(2018,0,20)
    },
    {
        nombre: "e7",
        fecha: new Date(2018,8,20)
    },
 ];

function organizarEventos(evento, fechaRef) {
    var futuros;
    var pasados;
// Separo los eventos pasados y futuros en difernetes arreglos
    futuros = evento.filter( x => x.fecha.getTime() >
        fechaRef.getTime() )
    pasados = evento.filter( x => x.fecha.getTime() <
        fechaRef.getTime())
//Ordeno los arrglos por separado, con la funcion sort
    futuros = futuros.sort((a,b)=>{
        if (a.fecha.getTime() > b.fecha.getTime()){
            return 1;
        }
        if (a.fecha.getTime() < b.fecha.getTime()){
            return -1;
        }
            return 0;
        })
    
    pasados = pasados.sort((a,b)=>{
        if (a.fecha.getTime() > b.fecha.getTime()){
                return -1;
        }
        if (a.fecha.getTime() < b.fecha.getTime()){
                return 1;
        }
                return 0;
        })
    
    return [futuros,pasados]
}

var resultado = organizarEventos(eventos, new Date(2018, 3, 21));
console.log(resultado[0])
console.log(resultado[1])