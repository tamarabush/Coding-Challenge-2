// TASK 1 - Calculate Tip:

let bill = 250;

let tip = (bill >= 50 && bill <= 300) ? (bill * 0.15) : (bill * 0.20); 
// if true 250 >= 50 and <= 300, than we use a 15% tip. if false we use 20%.

console.log(tip); //Output = 37.5 



// TASK 2 - Output Details:

let totalAmount = bill + tip; // Output = 287.5 (sum of bill and tip)

console.log(`The bill is $${bill}, the tip is $${tip}, and the total value is $${totalAmount}.`); 
//The bill is $250, the tip is $37.5, and the total value is $287.5.



// TASK 3 - Create a Function and Testing:

function calculateTip(bill) { 
    return (bill >= 50 && bill <= 300) ? (bill * 0.15) : (bill * 0.20);
}  //Used function declaration by using bill as the input and returned the calculated tip  

let testBill = 100; 

let testTip = calculateTip(testBill); //applied function declaration to testbill

console.log(`The bill is $${testBill} and the tip is $${testTip}.`); //The bill is $100 and the tip is $15.

