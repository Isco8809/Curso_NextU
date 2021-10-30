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

