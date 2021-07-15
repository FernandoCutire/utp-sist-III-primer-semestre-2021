
from src.controllers.control_receta import control_receta

if __name__ == '__main__':
    # Flujo básico del programa

    # nombre_receta = int(input())
    # nombre_receta = ''
    # calorias = 0
    # tiempo_coccion = ''
    # porciones = ''
    # imagen = ''
    ingredientes = []
    cantidad = []
    medidas = []
    procedimiento = []
    horario = ['desayuno, merienda, almuerzo, cena']
    print('Bienvenido al programa:')
    print('Elige de las siguientes opciones: ')
    print('1. Crear Receta')
    print('2. Modificar Receta')
    print('3. Eliminar Receta')
    print('Has elegido Crear Receta')
    print('Ingresa el nombre de la receta')
    nombre_receta = str(input())
    print('Ingresa el número de calorías')
    calorias = int(input())
    # Establece por favor un entero
    print('Ingresa el tiempo de cocción en horas (sin minutos, ni segundos) ejemplo 2 horas no 2.5 o 3.5')
    tiempo_coccion = int(input())
    # Establece un numero de porciones
    print('Ingresa el número de porciones. ejemplo 1 o 2 porciones no 1.5 o 3.5 porciones')
    porciones = int(input())
    print('Inserta alguna imagen de la receta.')
    imagen = str(input())
    print('Tu receta es: ')
    print(nombre_receta)
    print(calorias)
    print(tiempo_coccion)
    print(porciones)
    print(imagen)
