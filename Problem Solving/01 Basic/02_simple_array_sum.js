function simpleArraySum(ar) {
    // Write your code here
    let sum = 0;
    for (let i = 0; i < ar.length; i++) {
        sum = sum + ar[i];
    }
    return sum;
}

let arrays = [1,2,3,4,10,11];

console.log(simpleArraySum(arrays));