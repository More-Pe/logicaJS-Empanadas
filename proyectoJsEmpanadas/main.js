
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

    //A new array is generated containing the new prices obtained from the empanadas combinations.
    
    const combinations = [];

    while (empanadas.length > 0){
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
    
    //The new array is sorted so that the desired positions can be accessed later.

    combinations.sort((a, b) => b - a);

    //A variable is generated that will store the total price, obtained by adding the elements of the array with index zero and index multiples of 3.

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
