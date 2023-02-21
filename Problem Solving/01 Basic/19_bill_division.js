function bonAppetit(bill, k, b) {
    // Write your code here
    bill.splice(k, 1);
    let anna = bill.reduce((a,b) => a + b, 0) / 2;
    console.log(b === anna ? 'Bon Appetit' : b - anna);
}

let bill = [3,10,2,9];
let k = 1;
let b = 7;

bonAppetit(bill, k, b);