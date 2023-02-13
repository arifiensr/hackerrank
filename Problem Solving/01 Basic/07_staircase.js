function staircase(n) {
    // Write your code here
    // let array = new Array(n).fill(' ');
    // for (let i = n - 1; i >= 0; i--) {
    //     array[i] = '#';
    //     console.log(array.join(''));
    // }
    for (let i = 1; i <= n; i++) {
        console.log("#".repeat(i).padStart(n));
    }
}

let n = 6;

staircase(n);