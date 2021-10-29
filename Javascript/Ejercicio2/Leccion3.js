var recetaVegete  = ["Brocoly", "Zanahoria","Habichuela","Pepino"];
var recetaNoVegete  = ["Carne", "Yuca","Papa","Pollo"];
var esVegetariano = true;
function menu(esVeget, recetas){
    if(esVeget){
        console.log("La receta para el menú vegetariano es: ");
        for (var i=0 ; i <= recetas.length; i++){
            console.log(`${i+1}.  ${recetas[i]}`);
        }
    }else{
        console.log("La receta para el menú no vegetariano es: ");
        for (i=0; i <= recetas.length; i++){
            console.log(`${i+1}.  ${recetas[i]}`);
        }
    }
}

// Segunda actividad

var nombre = "Francisco";
var apellido = "Echeverri";
var genero = "MASCULINO"; //(puede ser “FEMENINO” o “MASCULINO”)
var evento = "Pasear";
var minutosQueFaltan = 500;

function Nombre (palabra){
    return palabra.trim().toUpperCase();
}

function Eventos (evento){
    if(evento <60*24){
        return "recuerda hoy el evento";
    }else if (evento < ((60*24)*2)){
        return "recuerda mañana el evento";
    }else{
        return "recuerda pronto el evento";
    }
}

function Saludo(nombre, apellido, genero, evento, minutos){
    switch (genero){
        case "MASCULINO" :
            console.log(`Buenvenido ${Nombre(nombre)} ${Nombre(apellido)}, ${Eventos(minutos)} (${evento})`);
            break;
        case "FEMENINO" :
            console.log(`Buenvenido ${Nombre(nombre)} ${Nombre(apellido)}, ${Eventos(minutos)} (${evento})`);
            break;
        default :
            console.log("Género ??")
     }
}