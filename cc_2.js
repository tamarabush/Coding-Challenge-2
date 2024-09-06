// TASK 1 - Calculate Tip:

let bill = 250;

let tip = (bill >= 50 && bill <= 300) ? (bill * 0.15) : (bill * 0.20); 
// if true 250 >= 50 and <= 300, than we use a 15% tip. if false we use 20%.

console.log(tip); //Output = 37.5 



// TASK 2 - Output Details:

let totalAmount = bill + tip; // Output = 287.5 (sum of bill and tip)

console.log(`The bill is $${bill}, the tip is $${tip}, and the total value is $${totalAmount}.`); 
//The bill is $250, the tip is $37.5, and the total value is $287.5.
