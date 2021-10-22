function totalMinutos(horas, minutos){
    return horas * 60 + minutos;
  }
  
  console.log(totalMinutos(5, 25));
  console.log(totalMinutos(1, 5));
  console.log(totalMinutos(0, 15));
  
  function cantidadRecolectadaSimple(costo, cantidad){
    return costo * cantidad;
  }
  
  console.log(cantidadRecolectadaSimple(10, 5));
  console.log(cantidadRecolectadaSimple(1, 5));
  
  function cantidadRecolectada(costoEstudiante, costoAdulto, cantidadEstudiantes, cantidadAdultos){
    return cantidadRecolectadaSimple(costoEstudiante, cantidadEstudiantes) + cantidadRecolectadaSimple(costoAdulto, cantidadAdultos);
  }
  
  console.log(cantidadRecolectada(1, 5, 20, 4));
  console.log(cantidadRecolectada(0, 5, 20, 3));