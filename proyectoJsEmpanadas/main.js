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

He pensado lo siguiente: para poder optimizar la combinación de empanadas sin que me importe la comparación entre
a, b y c (es decir, lo que hice arriba); se puede hacer un array con los precios repetidos tantas veces como la cantidad sea ingresada y luego ordenarlo
de mayor a menor (o al revés, da igual). Al estar ordenado, si comienzo a combinar de a dos desde los extremos hacia el
centro, por ejemplo las posiciones 0 y length del array -1, siempre me aseguraré de coger la más cara con la más barata.
Para combinarlas lo que se hace es sacar el promedio entre ambas y luego poner ese valor en un nuevo array por duplicado,
porque claro, hemos sacado el promedio pero las empanadas con ese precio serán dos. Bien,  en caso de que el lenght de mi array original sea impar, se hará lo mencionado anteriormente y luego se añadirá el valor de la posición central del array
en el array original, sin modificar su precio.
El nuevo array deberá estar ordenado también de mayor a menor para asegurarnos de que al agrupar empanadas cada 3, sí o sí
los valores más caros irán juntos, evitando pagar más innecesariamente. De esta manera, lo que quedaría por hacer finalmente es sumar las posiciones múltiplos de 3 del nuevo array (más la posición 0), para obtener el costo a pagar por todas las empanadas.


*/

//a, b and c are the number of empanadas of 12, 14 and 16 euros respectively
export const fn = (a, b, c) => {
    
    if (a < 0 || b < 0 || c < 0) {
        throw new Error("The quantities cannot be less than zero.");
    }
      
    if ((a + b + c) % 3 !== 0 || a + b + c > 40) {
        throw new Error("The total number of empanadas must be a multiple of 3 and less than 40.");
    }

    //This array contains the prices initially established

    const prices = [12, 14, 16];

    //A new array is started which will contain the prices of the pies repeated as many times as indicated by the quantity.

    const empanadas = [];
    for (let i = 0; i < a; i++){
        empanadas.push(prices[0]);
    }

    for (let i = 0; i < b; i++){
        empanadas.push(prices[1]);
    }

    for (let i = 0; i < c; i++){
        empanadas.push(prices[2]);
    }

    //hasta acá funciona bien
    
    const combinations = [];

    while (empanadas.length > 0) {
        if (empanadas.length === 1) {
          combinations.push(empanadas[0]);
          empanadas.shift();
        } else {
          const firstEmpanada = empanadas.shift();
          const lastEmpanada = empanadas.pop();
          const newPrice = (firstEmpanada + lastEmpanada) / 2;
          combinations.push(newPrice, newPrice);
        }
      }
    
    combinations.sort((a, b) => b - a);

    let totalPrice = 0;
    
    for (let i = 0; i < combinations.length; i += 3){
        totalPrice += combinations[i];
    }

    return totalPrice;
};


console.log(fn(1,1,1));
console.log(fn(3,3,0));
console.log(fn(2,0,1));
console.log(fn(9,10,11));
console.log(fn(11,10,9));
console.log(fn(3,0,0));
console.log(fn(1,2,3));
console.log(fn(3,2,1));
console.log(fn(1,0,2));
console.log(fn(3,0,3));
