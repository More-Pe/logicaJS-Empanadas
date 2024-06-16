
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

    //A new array is started which will contain the prices of the empanadas repeated as many times as indicated by the quantity

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

    //A new array is generated containing the new prices obtained from the empanadas combinations
    
    const combinations = [];

    let i = 0; //First index of the array
    let j = empanadas.length - 1; //Last index of array
    
    while (i <= j) {
      if (i === j) {
        combinations.push(empanadas[i]); //If only one element remains, it is added unchanged
      } else {
        const newPrice = (empanadas[i] + empanadas[j]) / 2; //If not, it is averaged and added twice to the new array
        combinations.push(newPrice, newPrice);
      }
      i++;
      j--;
    }
    
    //The new array is sorted so that the desired positions can be accessed later

    combinations.sort((a, b) => b - a);

    //A variable is generated that will store the total price, obtained by adding the elements of the array with index zero and index multiples of 3

    let totalPrice = 0;
    
    for (let i = 0; i < combinations.length; i += 3){
        totalPrice += combinations[i];
    }

    return totalPrice;
};
