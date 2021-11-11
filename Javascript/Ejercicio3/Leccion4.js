var vehiculos = [
    { tipo: "sedan" }
]; 
var carros = vehiculos; 

carros.push({ modelo: "comonuevo", a: 1967 }); 
console.log(carros); 
console.log(vehiculos);

// Ejercicio leccion 

var judosss 
judosss = {
    nombre: "Perro",
    origen: "Japón",
    clubes:{
        jodo: "Sensei VU",
        ciudad: "Inmaculada",
        jodo: "Sensei Sato",
        ciudad: "Tokio",
    }
};

function judos(judo){
    /*const varibale =
    Object.keys(judo).map(key => {
        const value = judo[key]
        console.log(key , '->' , value)
    })*/

    /*Object.entries(judo.clubes)
        .map(entry => {
            var [key, value] = entry
            console.log({key, value})
        });*/
    console.log(Object.entries(judo.clubes))
    
    /*for (var [city,CityName] of Object.entries(judo)){
        console.log(city,":",CityName);
    }*/
};

console.log(judos(judosss))