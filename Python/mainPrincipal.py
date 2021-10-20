import json
from ClaseProyectoFinalPython import usuario

datos = usuario()

opcion = 0
while opcion != 6:
    print("Elija una opción: ")
    print("")
    opcion = int(input("\n 1.Recibir cantidad: \n 2.Transferir monto: \n 3.Mostrar balance una moneda: \n 4.Mostrar balance general: \n 5.Mostrar histórico de transacciones: \n 6.Salir del programa \n"))
    print("")
    if opcion == 1:
        datos.validarMoneda()
        datos.validarCodigo()
        datos.guardarCriptomoneda()
        datos.guardarTransaccion("Recibir")
    elif opcion == 2 :
        datos.criptomonedaUsuarioTransferir()
        datos.validarMontoPosible()
        datos.restarMonto()
        datos.guardarTransaccion("Transferir")
    elif opcion == 3:
        moneda = datos.validarMoneda()
        print(f"La moneda {moneda}: el cual tiene un costo actual de : {datos.montoCriptoActual()}, y cuenta con una cantidad de : {datos.cantidadCriptoBilletera()} para un total de {datos.montoBilletera()}")
    elif opcion == 4:
        datos.balanceGeneral()
    elif opcion == 5:
        datos.historico()
    elif opcion == 6:
        print("Cerrar billetera!")
    else:
        print("Opción no valida!")