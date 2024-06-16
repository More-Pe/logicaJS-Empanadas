# 🥟 Reto de Lógica: compra de empanadas 🥟

## 📜 Enunciado del problema

El profesor Maple se embarca en la tarea de adquirir empanadas para todos los participantes del bootcamp de programación. Dado que hoy es el Día de las Empanadas,  hay una oferta especial en la que te llevas hasta tres empanadas y solo pagas la más cara. Con un presupuesto ajustado para el curso, los profesores debaten para intentar minimizar el gasto total por todas las empanadas.

Entonces, el profesor Maple decide seguir la siguiente estrategia: como la empanada más cara la tendrá que pagar de todas formas, la comprará junto a la segunda y tercera más caras, que ofrecen el mayor ahorro. Con las n-3 empanadas restantes, aplicará el mismo procedimiento hasta que no quede ninguna.

Los profesores reflexionan y llegan a la conclusión de que esta es la mejor estrategia. Pero cuando están a punto de pagar, escuchan la siguiente conversación de una familia de al lado:

"Queremos una empanada de pollo, de 12 euros, una de carne, de 14 euros, y una vegetariana, de 16 euros."

Los profesores piensan inmediatamente: "Cogerán la oferta 3x1, de forma que solo paguen los 16 euros de la empanada vegetariana y se lleven gratis la de carne y la de pollo". A lo cual, la familia continúa:

"Pero pónganosla de la siguiente forma: Dos empanadas mitad pollo y mitad vegetariana, y la de carne aparte. Como todas las empanadas valen 14 euros, cogeremos la oferta 3x1 y nos las llevaremos por 14 euros".

Cuando los profesores salen de su asombro, deciden que lo más sensato es utilizar el hecho de que las empanadas se pueden pedir mitad de un tipo y mitad de otro, pagando por ella la media del costo de las dos empanadas enteras. Así, una empanada mitad pollo y mitad vegetariana valdrá (12 + 16)/2 = 14 euros. Sin embargo, no logran decidir cuál es la mejor forma de repartir las empanadas en mitades primero, y en grupos después, para minimizar el precio.

Ayúdales haciendo una función que lo calcule lo más rápido posible: hay decenas de estudiantes hambrientos que dependen de ti.

Las empanadas que han elegido los profesores tienen 3, 4 o 5 ingredientes. La masa de una empanada vale 6 euros, y cada ingrediente adicional vale 2 euros. Así, las empanadas pueden valer 12, 14 o 16 euros. Se garantiza que el número total de empanadas será múltiplo de 3.

### 📥 Entrada

La función debe tener tres parámetros de entrada. Cada conjunto de entrada consta de tres enteros, a b c, que son el número de empanadas de 3, 4 y 5 ingredientes, respectivamente. Se garantiza que el número de empanadas, a + b + c, cumple que a + b + c < 40. Además, el número de empanadas es divisible entre 3.

### 📤 Salida

Por cada conjunto de entrada, retornar un único entero: la mínima cantidad de euros que se puede pagar para llevarse todas las empanadas.

### Ejemplos de casos de uso

| Entrada     | Salida      |
| ----------- | ----------- |
| 1, 1, 1     | 14          |
| 3, 3, 0     | 26          |
| 2, 0, 1     | 14          |
| 9, 10, 11   | 142         |

## :question: Proceso de resolución del problema

### :mag_right: Búsqueda de los datos principales.

En la resolución de problemas, es imprescindible enfocarse en dos cosas: 
1. Los datos que tenemos y nos ayudarán a resolver el problema (hay varios datos innecesarios).
2. El objetivo al cuál se quiere llegar.

Por esto el primer paso fue leer detenidamente el problema y extraer lo que realmente es relevante:

#### Precios y Cantidades:
Hay empanadas de 12, 14 y 16 euros.
Las cantidades de cada tipo de empanada se denotan como a, b y c respectivamente.

#### Oferta Especial:
Hay una oferta 3x1, donde se paga solo la empanada más cara de cada grupo de 3.

#### Condiciones:
La cantidad total de empanadas (a + b + c) debe ser múltiplo de 3.
La cantidad total de empanadas no debe exceder 40.
Las cantidades de empanadas no pueden ser negativas.

#### Combinaciones:
Las empanadas pueden combinarse en grupos de dos para crear empanadas con precios promedio. Por ejemplo, una empanada de 12 euros y una de 16 euros pueden combinarse para formar dos empanadas de 14 euros.

#### Objetivo:
Pagar el precio **mínimo** al comprar todas las empanadas.

### :pencil2: Análisis de los posibles casos.

En papel, comencé a analizar los casos y combinaciones posibles para intentar encontrar patrones que me ayuden a resolver el problema: sabía cómo era la forma de combinar para los casos particulares pero no lograba poder llegar a una generalización, es decir, una solución que me valga para todos los casos.

Llegué a las siguientes conclusiones:

* Separarlo por casos, como hice al principio (que todas las empanadas sean de un solo precio, que sean de dos precios o que sean de tres precios diferentes), no era el camino.
* Siempre debía combinar todas las empanadas posibles, siendo la mejor combinación las de mayor precio con las de menor precio.
* Debía agrupar las empanadas de a 3 y descubrir cuál era la de mayor precio (para pagar esa) y si existían otras de ese valor, incluirlas en el mismo grupo para evitar pagarlas.









