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

Mensajes de error: "Throw error on negative input value"
"Throws error when the total sum of inputs (2+2+1) is not a multiple of 3"
"Throws error when the total sum of inputs (15+15+20) is not less than 40"

Casos de combinación.
Si hay un valor de empanadas:
switch
case a!==0 && b===0 && c===0
 (totalEmpanadas/3)*12;
 break;
(a===0 && b!==0 && c===0) || (a===0 && b===0 && c!==0)){
totalEmpanadas/3}
Si hay dos valores de empanadas:
if ((a===0 && b!==0 && c!==0) || (a!==0 && b===0 && c!==0) || (a!==0 && b!==0 && c===0))
Si hay tres valores de empanadas:
if (a!==0 && b!==0 && c!==0)*/

export const fn = (a, b, c) => {
   if (a < 0 || b < 0 || c < 0) {
      console.log("The quantities cannot be less than zero.");
   };
  
   if ((a + b + c) % 3!== 0 && a + b + c < 40) {
      console.log("The total sum of the empanadas must be a multiple of three and less than 40.");
   };

   if (isNaN(a) || isNaN(b) || isNaN(c)) {
      console.log("Enter a numerical value.")
   }

}

