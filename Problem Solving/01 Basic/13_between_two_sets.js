//* FIRST METHOD

function getTotalX(a, b) {
    let arrays = [];
    let x = a.slice(-1);
    let y = b.slice(0,1);
    let check = true;
    for (let i = x[0]; i <= y[0]; i++) {
        a.forEach(a => {
            b.forEach(b => {
                if (((i % a) !== 0) || ((b % i) !== 0)) check = false;
            });
        });
        if (check === true) arrays.push(i);
        check = true;
    };
    return arrays.length;
} 

//* SECOND METHOD

function getTotalX(a, b) {
    let count = 0;
    for (let i = 1; i <= 100; i++) {
        if (a.every(a => (i % a === 0))) {
            if (b.every(b => (b % i === 0))) {
                count++;
            }
        }
    }
    return count;
} 

let a = [2,4];
let b = [16,32,96];

console.log(getTotalX(a,b));