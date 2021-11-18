/*class Perro {
    // color
    // nombre
    constructor(){
        this.color = "blanco"
    }
    function ladrar() {
        //......
    };
};*/

//var Nala =  new Perro();
// Nala.color -> devuevle "blanco"
////...
class Persona{
    constructor(){
        this.nombre = "Francisco";
        this.apellido = "Echverri";
    };
    nombreCompleto(){
        return `${this.nombre} ${this.apellido}`
    }
};

var p = new Persona();
console.log(p.nombreCompleto())

class Mascota{
    constructor(nombreApodo,edad){
        this.apodo = nombreApodo;
        this.edad = edad;
    }

    setPropietario(propietario){
        this.propietario = propietario;
    }
}

var m1 = new Mascota("Nala",23);
console.log(m1.apodo)
//Se instancia la funcion de setPropietario y se le pasa el objeto persona
m1.setPropietario(p)
//La funcion propietario ahora tiene el objeto persona, por lo que se puede imprimir el nombre de la clase persona
console.log(m1.propietario.nombreCompleto())


//Herencia

class Empleado extends Persona{
    constructor(id){
        super();
        this.id=id;
    }
}

var em = new Empleado(123);
console.log(em.id)
console.log(em.nombreCompleto())