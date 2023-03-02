function utopianTree(n) {
    // Write your code here
    let tree = 1;
    for (let i = 1; i <= n; i++) i % 2 === 0 ? tree++ : tree *= 2;
    return tree;
}

let n = 4;

console.log(utopianTree(n));