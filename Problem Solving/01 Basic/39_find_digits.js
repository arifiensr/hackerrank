function findDigits(n) {
    // Write your code here
    let count = 0;
    let x = Array.from(String(n), Number);
    x.forEach(x => {
        if (n % x === 0) count++;
    });          
    return count;
}

let n = 124;

console.log(findDigits(n));