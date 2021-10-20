import json, datetime
import requests
#Se crea la clase que se encarga de consultar los datos del usuario (codigo, criptmonedas y cantidad)
class usuario():
    def __init__(self):
        self.codigo= self.codigoUsuario()
        self.moneda=""
        self.cantidad=0
        self.monto = 0

#En este metodo creamos la conexión al json, que tiene la informació de los usuarios, se lee los datos
    def consultarBDUsuarios(self):
        with open('Python\BD_Usuarios.json') as js:
            consulta = json.load(js)
        return consulta

#En este metodo creamos la conexión al json, que tiene la informació de las criptomonedas, se lee los datos
    def consultarBDCripto(self):
        with open('Python\BD_Criptomoneda.json') as js:
            consulta = json.load(js)
        return consulta

#En este metodo creamos la conexión al json, que tiene la informació de las transacciones, se lee los datos
    def consultarBDTransaccion(self):
        with open('Python\BD_Transaccion.json') as js:
            consulta = json.load(js)
        return consulta

#Verificación de que el usuario ingresado este en el json de los datos para el login
    def codigoUsuario(self):
        verificacion=True
        Datos = self.consultarBDUsuarios()
        usuario = int(input("Ingrese el codigo de usuario"))
        while verificacion:
            for a in Datos['Usuarios']:
                if usuario == a['Codigo']:
                    self.codigo = usuario
                    verificacion=False
            if  verificacion:
                usuario = int(input("El usuario no se encuentra, por favor ingrese el codigo de usuario correcto: "))
        return self.codigo

#Conexión a la página de criptomonedas
    def conexionCriptomonedas(self):
        headers = {  'Accepts': 'application/json',  
                    'X-CMC_PRO_API_KEY':  'b1bc1067-1001-4842-a6c8-f82d1dba7d25'}
        conexion = requests.get("https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",headers=headers).json()
        #conexion = requests.get("https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest",headers=headers).json()
        return conexion

#Creamos una lista de las criptomonedas de la página, para una rápida validación de que existan
    def listaCriptomonedas(self):
        datos = self.conexionCriptomonedas()
        diccionario = {}
        for campos in datos['data']:
            diccionario.setdefault(campos['symbol'],campos['quote']['USD']['price'])
        return diccionario
    
#Lista de criptomonedas que tiene el usuario
    def criptomonedaUsuario(self):
        consulta = self.consultarBDCripto()
        for valor in consulta['Criptomoneda']:
            if self.codigo == valor.get('Codigo'):
                return valor.get('Nombre')
        return 0
        
#Validar que la moneda que se ingrese exista!
    def validarMoneda(self):
        valida = True
        while valida:
            moneda = input("Ingrese la moneda: ")
            if moneda in self.listaCriptomonedas().keys():
                valida = False
                self.moneda =moneda
                print("Moneda correcta!") 
            else:
                print("Moneda incorrecta!")
        return self.moneda

#Se valida que el codigo para recibir moneda sea diferente al que se logueo
    def validarCodigo(self):
        valida = True
        while valida:
            codigo = int(input("Ingrese el codigo: "))
            if codigo != self.codigo:
                valida = False
                print("Codigo correcto!") 
            else:
                print("El codigo debe ser diferente al tuyo!")
        return codigo

#Validad que el numero ingresado sea un flotante y no un string
    def validarCantidad(self):
        while True:
            try:
                numero = float(input("Ingrese la cantidad: "))
                break
            except ValueError:
                print("El numero ingresado es incorrecto")
        return numero

#valida que la cantidad no sea negativa o igual a cero
    def validarMontoRecibido(self):
        self.cantidad = self.validarCantidad()
        while self.cantidad <= 0: 
            print("El monto recibido no puede ser cero o negativo")
            self.cantidad = self.validarCantidad()
        return self.cantidad       

#Creo la conexión para escribir en el archivo, y sumar las monedas que se reciben
    def escribirArchivo(self,data):
        with open("Python\BD_Criptomoneda.json", "w") as jsonFile:
            jsonFile.seek(0)
            json.dump(data, jsonFile, indent=4)
            
    #Creo la conexión para escribir en el archivo, y sumar las monedas que se reciben
    def escribirArchivoTransaccion(self,data):
        with open("Python\BD_Transaccion.json", "w") as jsonFile:
            jsonFile.seek(0)
            json.dump(data, jsonFile, indent=4)
    
#creo que metodo que suma la cantidad de moneda al archivo, primero indico en que posición voy a guardar la cantidad
#averiguo la posición del usuario en la criptomoneda con un contador:
    def sumarCriptomoneda(self,posicion):
        Datos = self.consultarBDCripto()
        cantidadListas=0
        for valores in Datos['Criptomoneda']:
            if self.codigo == valores['Codigo']:
                posicionUsuario = cantidadListas
                valor = valores['Cantidad'][posicion] + self.validarMontoRecibido()
            cantidadListas+=1
        Datos['Criptomoneda'][posicionUsuario]['Cantidad'][posicion] = valor
        self.escribirArchivo(Datos)   
        
## Se adciona la criptomonedda si la persona al momento de recibirla no tinen en inventario la criptomoneda
    def adicionarCirpto(self):
        Datos = self.consultarBDCripto()
        cantidadListas=0
        for valores in Datos['Criptomoneda']:
            if self.codigo == valores['Codigo']:
                posicionUsuario = cantidadListas
                Datos['Criptomoneda'][posicionUsuario]['Nombre'].append(self.moneda)
                Datos['Criptomoneda'][posicionUsuario]['Cantidad'].append(self.validarMontoRecibido())
            cantidadListas+=1
        self.escribirArchivo(Datos)  
    
#Con este metodo averiguo si la criptomoneda la tiene el usuario o no, si la tiene le sumo la cantidad a la que tiene, y si no la tiene
#creo el registro con la neuva criptomoneda y la cantidad recibida
    def guardarCriptomoneda(self):
        moneda = self.moneda
        lista = self.criptomonedaUsuario()
        if moneda in lista:
            posicion = lista.index(moneda)
            self.sumarCriptomoneda(posicion)
        else:
            self.adicionarCirpto()

#Guardamos los datos de la transacción, y el tipo de transacción nos define que logica ejecutar
    def guardarTransaccion(self,tipo):
        self.tipo = tipo
        Datos = self.consultarBDTransaccion()
        posicion=0
        fecha = datetime.datetime.now()
        for valores in Datos['Transaccion']:
            if self.codigo == valores['Codigo']:
                Datos['Transaccion'][posicion]['Fecha'].append(str(fecha))
                Datos['Transaccion'][posicion]['Tipo'].append(self.tipo)
                Datos['Transaccion'][posicion]['Moneda'].append(self.moneda)
                if self.tipo == "Recibir":
                    Datos['Transaccion'][posicion]['Cantidad'].append(self.cantidad)
                    Datos['Transaccion'][posicion]['Monto'].append(self.listaCriptomonedas().get(self.moneda))
                else: 
                    Datos['Transaccion'][posicion]['Cantidad'].append(self.monto / self.listaCriptomonedas()[self.moneda])
                    Datos['Transaccion'][posicion]['Monto'].append(self.monto)
            posicion+=1
            self.escribirArchivoTransaccion(Datos)   
            
########### metodos para transferir

#Se valida que la criptomoneda que la persona quiere tranferir este en billetera, si no le dira que no puede trnasferir una criptomoneda que no tiene
    def criptomonedaUsuarioTransferir(self):
        consulta = self.consultarBDCripto()
        moneda =  input("Ingrese la moneda: ")
        condicion = True
        while condicion:
            for valor in consulta['Criptomoneda']:
                if self.codigo == valor.get('Codigo'):
                    if moneda in str(valor.get('Nombre')):
                        self.moneda =  moneda
                        condicion =  False
                    else:
                        print("No tiene de esta moneda en su billetera, usted tiene: ")
                        print(self.criptomonedaUsuario())
                        moneda = input("Ingrese una que si tenga en la billetera: ")
        return self.moneda
    
#Con este metodo calculamos el monto que tiene la persona en la billetera, para que no pueda transferir más de lo que tiene
    def montoBilletera(self):
        Datos = self.consultarBDCripto()
        cantidadListas=0
        posicion = self.criptomonedaUsuario().index(self.moneda)
        precio = self.listaCriptomonedas()[self.moneda]
        for valores in Datos['Criptomoneda']:
            if self.codigo == valores['Codigo']:
                posicionUsuario = cantidadListas
                cantidad = Datos['Criptomoneda'][posicionUsuario]['Cantidad'][posicion]
            cantidadListas+=1
        montoBilletera = cantidad * precio
        return montoBilletera
    
#Validad que el monto ingresado sea un flotante y no un string
    def validarMonto(self):
        while True:
            try:
                numero = float(input("Ingrese el monto en USD: "))
                break
            except ValueError:
                print("El monto ingresado es incorrecto")
        return numero

#valida que el monto no sea negativa o igual a cero
    def validarMontoPositivo(self):
        monto = self.validarMonto()
        while monto <= 0: 
            print("El monto recibido no puede ser cero o negativo")
            monto = self.validarMonto()
        return monto
    
#Valida que el saldo a transferir sea menor al que tiene en la billetera
    def validarMontoPosible(self):
        montoBilletera = self.montoBilletera()
        monto = self.validarMontoPositivo()
        while monto > montoBilletera:
            print("El monto ingresado es mayor al que tiene en la billetera, por favor ingrese un saldo menor!")
            monto = self.validarMontoPositivo()
        self.monto = monto
        return self.monto

#Restamos la cantidad a las mondedas que se tienen en la billetera, calculando primero a cuanto equivale en USD
    def restarMonto(self):
        cantidadListas=0
        Datos = self.consultarBDCripto()
        posicion = self.criptomonedaUsuario().index(self.moneda)
        for valores in Datos['Criptomoneda']:
            if self.codigo == valores['Codigo']:
                posicionUsuario = cantidadListas
                Datos['Criptomoneda'][posicionUsuario]['Cantidad'][posicion] -= (self.monto / self.listaCriptomonedas()[self.moneda])
            cantidadListas+=1
        self.escribirArchivo(Datos)

#Monstrar el precio actual de la moneda
    def montoCriptoActual(self):
        montoActual = self.listaCriptomonedas().get(self.moneda)
        return montoActual
        
#retornamos la cantidad que se tienen de criptomonedas para el momento
    def cantidadCriptoBilletera(self):
        Datos = self.consultarBDCripto()
        cantidadListas=0
        posicion = self.criptomonedaUsuario().index(self.moneda)
        for valores in Datos['Criptomoneda']:
            if self.codigo == valores.get('Codigo'):
                posicionUsuario = cantidadListas
                cantidad = Datos['Criptomoneda'][posicionUsuario]['Cantidad'][posicion]
            cantidadListas+=1
        return cantidad

#Funcion para el punto 4 de balance general
    def balanceGeneral(self):
        consulta = self.consultarBDCripto()
        diccionarioPrecio = self.listaCriptomonedas()
        acumulador = 0
        for valor in consulta['Criptomoneda']:
            if self.codigo == valor.get('Codigo'):
                for nombre, cantidad  in zip(valor['Nombre'],valor['Cantidad']):
                    precio = diccionarioPrecio[nombre]
                    print(f"La moneda: {nombre}, tiene un precio en USD actual de {precio}. Cuenta en la billetera con {cantidad} para un monto de {cantidad * precio}")
                    acumulador += (cantidad * precio)
        print(f"Monto toda en USD de todas las monedas {acumulador}")

#Método para ver el histórico de transacciones
    def historico(self):
        consulta = self.consultarBDTransaccion()
        for valor in consulta['Transaccion']:
            if self.codigo == valor.get('Codigo'):
                for fecha, Tipo, cantidad, moneda, montn  in zip(valor['Fecha'],valor['Tipo'],valor['Cantidad'],valor['Moneda'], valor['Monto']):
                    print("...............................")
                    print("Fecha: ", fecha)
                    print("Tipo: ", Tipo)
                    print("Cantidad: ", cantidad)
                    print("Moneda: ", moneda)
                    print("Monto: ", montn)
                    print("...............................")
