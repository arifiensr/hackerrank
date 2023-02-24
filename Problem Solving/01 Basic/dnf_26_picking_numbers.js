function pickingNumbers(a) {
    let max = 0;
    let count = 1;
    for (let i = 0; i < (a.length - 1); i++) {
            if (Math.abs(a[i] - a[i + 1]) <= 1) count++;
            else {
                if (max < count) max = count;
                count = 1;
            }
    }
    return (max >= 5) ? 5 : max;

}

let a = [1,2,2,3,1,2];

console.log(pickingNumbers(a));