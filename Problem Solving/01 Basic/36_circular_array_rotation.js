function circularArrayRotation(a, k, queries) {
    // Write your code here
    k %= a.length;
    for (let i = 0; i < k; i++) a.unshift(a.pop());
    return queries.map(q => a[q]);
}

let a = [1, 2, 3];
let k = 2;
let queries = [0, 1, 2];

console.log(circularArrayRotation(a, k, queries));