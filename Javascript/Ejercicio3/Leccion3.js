var personas
personas = [
    {
        nombre: "Francisco"
    }
]
console.log(personas);
personas.push({
    nombre: "Pacho",
    edad: 25
})
console.log(personas);

personas[1].amigos = ["Ana", "Oscar"];
var usuarios = personas;
console.log(personas);
console.log(usuarios);

usuarios[1].nombre = "Roberto";

usuarios
personas

//Las variables simples y complejas:
// Lac complejas si varian el resultado despues de declarar una nueva varibale con la antigua