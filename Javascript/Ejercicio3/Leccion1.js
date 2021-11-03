var persona;
persona = {
    nombre:"Francisco",
    apellido:"Echevrri"
};

console.log(persona.nombre);
console.log(persona['nombre']);
var propiedad = 'nombre';
console.log(persona[propiedad]);

// segunda opcion

var persona;
persona = {
    nombre:"Francisco",
    apellido:"Echevrri",
    telefonos: ["123456" ,"456789"]
};

console.log(persona.telefonos[0]);
console.log(persona.telefonos.length);


// Tercera opcion

var persona;
persona = {
    nombre:"Francisco",
    apellido:"Echevrri",
    telefonos: ["123456" ,"456789"],
    direccion : {
        estado: "Principal",
        ciudad: "dorado",
        calle: "7",
        casa: 5
    }
};

console.log(persona.direccion.calle);
console.log(persona.edad);
persona.edad = 20
console.log(persona.edad);
