function beautifulDays(i, j, k) {
    // Write your code here
    let count = 0;
    let reverse = z => z = parseInt(String(z).split('').reverse().join(''));
    for (let x = 0; x <= (j - i); x++) {
        if (((i + x) - reverse(i + x)) % k === 0) count++;
    }
    return count;
}

let [i,j,k] = [20,23,6];;

console.log(beautifulDays(i,j,k));
