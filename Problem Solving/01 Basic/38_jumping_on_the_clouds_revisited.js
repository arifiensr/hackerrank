function jumpingOnClouds(c, k) {
    // let e = 100;
    // for (let i = 0; i < (c.length / k); i++) {
    //     (c[i + k] === 0) ? e-- : e -= 3;
    // }
    // return e;

    let e = 100;
    let x = 0;
    do {
        x += k;
        if (x >= c.length) (x = x % c.length);
        c[x] === 0 ? e-- : e -= 3;
    } while (x !== 0);
    return e;
}

let c = [1, 1, 1, 0, 1, 1, 0, 0, 0, 0];
let k = 3;

console.log(jumpingOnClouds(c, k));    