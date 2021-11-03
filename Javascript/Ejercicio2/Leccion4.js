var arreglo = [3,4,5,6,7,8,];
var suma = 0;
 for (var i in arreglo){
     suma = suma +arreglo[i];
 }

 suma

 // Ejercicio 2

var arreglo = [3,4,5,6,7,8,];
var suma = 0;
 for (var elemento of arreglo){
     suma = suma + elemento;
 }

suma


//Ejercicio 3

var contador = 0;

while (contador < 10) {
    console.log(contador);
    contador++;
}

do{
    console.log(contador);
    if(contador>5){
        break;
    }
    contador++;
}while(contador < 10)
contador


do{
    contador++;

    if(contador>5){
        continue;
    }
    
    console.log(contador);
}while(contador < 10)
contador


//Ejercicio 4

var donaciones = [5,15,22,25,30,52,5,1,0];

function minimmo (arr) {
    var k = 0;
    for (var i = 0 ; i < arr.length ; i++){
        if (arr[k] >= arr[i+1]){
            k = i+1;
            arr[k] = arr[i+1];
        }
    }
    return arr[k];
}

function maximo (arr) {
    var k = 0;
    for (var i = 0 ; i < arr.length ; i++){
        if (arr[k] <= arr[i+1]){
            k = i+1;
            arr[k] = arr[i+1];
        }
    }
    return arr[k];
}


function promedio (min , max , donaciones){
    var suma = 0;
    var cantidad = 0;
    for (var elemento of donaciones){
        if(elemento != min && elemento != max){
            suma = suma + elemento;
            cantidad ++;
        }
    }
    return suma/cantidad;
}
var min = minimmo(donaciones);
var max = maximo(donaciones);
console.log(promedio(min,max,donaciones))