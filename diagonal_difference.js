function diagonalDifference(arr) {
    // Write your code here
    let i = 0;
    let jumlah = 0;
    arr.forEach(sum => {
        jumlah += sum[i];
        i++;
    });
    i = arr.length;
    arr.forEach(sum => {
        jumlah -= sum[i-1];
        i--;
    });
    return Math.abs(jumlah);
}

let input = [
    [1,2,3],
    [4,5,6],
    [9,8,9]
];

console.log(diagonalDifference(input));