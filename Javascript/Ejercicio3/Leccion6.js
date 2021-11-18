class ElementoInstruccional{
    constructor(identificador, tipo, version){
        this.identificar=identificador;
        this.tipo=tipo;
        this.version=version;
    }
    nombreArchivo(){
        return `COMP18S_${this.identificar}_${this.tipo}_${this.version}.midoc`
    }
}

var a1 = new ElementoInstruccional(1, "Interactiva", "V1");
var a2 = new ElementoInstruccional(2, "Ejercicio", "V2");
var a3 = new ElementoInstruccional(3, "Laboratorio", "V1");

console.log(a1.nombreArchivo())
console.log(a2.nombreArchivo())
console.log(a3.nombreArchivo())

//Ejercicio.. Unidad 2  - Leccion 2

class Evento {
    constructor(id, nombre, cantidadAsistentes, precioPorAsistente){
        this.id=id;
        this.nombre=nombre;
        this.cantidadAsistentes=cantidadAsistentes;
        this.precioPorAsistente=precioPorAsistente;
    }
    enlace(){
        return `/${this.nombre}/${this.id}`
    }
    dineroTotalRecaudado(){
        return this.cantidadAsistentes * this.precioPorAsistente
    }
}

var evento1 = new Evento(1,"e1", 12, 5);

console.log(evento1.enlace())
console.log(evento1.dineroTotalRecaudado())