function saveThePrisoner(n, m, s) {
    // Write your code here
    // m = m % n;
    // for (let i = 1; i < m; i++) {
    //     (s !== n) ? s++ : s = 1;
    // };
    // return s;

    // m %= n;
    // s -= 1;
    // let z = (s + m);
    // if (z === 0) z = n;
    // return (z > n) ? z % n : z;

    let result = (m + s - 1) % n;
    return (result === 0) ? n : result;
}

// let [n, m, s] = [100000000, 849583471, 3];
let [n, m, s] = [7, 21, 1];
// let [n, m, s] = [3, 587384830, 1];

console.log(saveThePrisoner(n, m , s));