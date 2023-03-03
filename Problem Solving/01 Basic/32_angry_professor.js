function angryProfessor(k, a) {
    // Write your code here
    let students = a.filter(a => a <= 0).length;
    return students < k ? 'YES' : 'NO';
}

let k = 3;
let a = [-1,-3,4,2]

console.log(angryProfessor(k, a));