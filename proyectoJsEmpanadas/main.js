/*

Datos:
a= cantidad de empanadas de 12 euros
b= cantidad de empanadas de 14 euros
c= cantidad de empanadas empanadas de 16 euros

ab= mixtas de 13 euros
ac= mixtas de 14 euros
bc= mixtas de 15 euros

x= cantidad total de empanadas (a+b+c)

y= cantidad total de empanadas a pagar (x/3)

Van a existir tres casos fuertemente diferenciados:

Caso 1: que todas las empanadas sean del mismo valor, en ese caso simplemente se deberá calcular las empanadas a pagar y
multiplicarlas por el precio correspondiente.

Caso 2: que haya empanadas de dos precios diferentes; en principio pensé que serviría hacer el promedio, pero no sirve
para todos los casos, por lo cual se resolverá igual que el caso 3:

Caso 3: que haya empanadas de tres precios diferentes:

Pienso que la forma de resolver el problema sería combinar la máxima cantidad de empanadas posibles para
minimizar el costo y luego ordenar todas de mayor a menor, luego combinarlas de a tres y cobrar la más cara de cada
grupo, o sea la que esté más a la izquierda ya que están ordenadas de mayor a menor. Esto nos aseguraría que en caso
de haber dos o 3 empanadas de mayor valor, se incluyan en el mismo grupo para evitar pagar dos o tres veces ese valor al
combinarlas en otros grupos.


*/





export const fn = (/* argumentos de la función */) => {
   // Cuerpo de la función: Completa la lógica de la función aquí.
};
