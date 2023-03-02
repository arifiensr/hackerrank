function hurdleRace(k, height) {
    // Write your code here
    return (Math.max(...height) > k) ? Math.max(...height) - k : 0;
}

let k = 4;
let height = [1,6,3,5,2];

console.log(hurdleRace(k,height));