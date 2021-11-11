function formatoString(string){
    return string.trim()
}

function tamanoStringNombre(largo){
    if (largo >= 3){
        return true
    }else{
        return false
    }
}

function tamanoStringDescripcion(largo){
    if (largo >= 10){
        return true
    }else{
        return false
    }
}

function stringValido(string, largo) {
    if ((formatoString(string) != null || formatoString(string) != undefined ) && (largo)){
        return true
    }else{
        return false
    }
}

function eventoValido(evento){
    if(stringValido(evento.nombre,tamanoStringNombre(evento.nombre.length))){
        if(stringValido(evento.descripcion,tamanoStringDescripcion(evento.descripcion.length))){
            return true
        }else{
            return false
        }
    }else{
        return false
    }
}

var evento = {
    nombre: "Evento 1",
    descripcion: "Esto es una descripción",
    fecha: new Date(2018,10,1)
};

console.log(eventoValido(evento));

// Resuelto por Nextu

function stringValido(string, largo){
    if (string == null || string == undefined){
    return false;
    }
    if (largo && string.trim().length < largo){
    return false;
    }
    return true;
}

function fechaValida(fecha,minimaFecha){
    if (fecha == null || fecha == undefined){
    return false;
    }
    if (minimaFecha && fecha.getTime() < minimaFecha.getTime()){
    return false;
    }
    return true;
}

function eventoValido(evento){
    if (evento == null || evento == undefined){
    return false;
    }
    return (
    stringValido(evento.nombre, 3) &&
    stringValido(evento.descripcion, 10) &&
    fechaValida(evento.fecha, new Date(2018,0,1,0,0,0))
    )
}

var evento = {
    nombre: "Evento 1",
    descripcion: "Esto es una descripción",
    fecha: new Date(2018,10,1)
};

console.log(eventoValido(evento));