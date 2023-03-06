function permutationEquation(p) {
    // Write your code here
    let z = [];
    for (let i = 1; i <= p.length; i++) z.push(p.indexOf(p.indexOf(i) + 1) + 1);
    return z;
};

let p = [4,3,5,1,2];

console.log(permutationEquation(p));