function diagonalDifference(arr) {
  // Write your code here
  // let i = 0;
  // let jumlah = 0;
  // arr.forEach(sum => {
  //     jumlah += sum[i];
  //     i++;
  // });
  // i = arr.length;
  // arr.forEach(sum => {
  //     jumlah -= sum[i-1];
  //     i--;
  // });
  // return Math.abs(jumlah);
  // let i = 0
  // let j = arr.length - 1
  // let sum = 0
  // arr.forEach((ar) => {
  //   sum += ar[i] - ar[j]
  //   i++
  //   j--
  // })
  // return Math.abs(sum)
  let sum = 0
  for (let i = 0, j = arr.length - 1; i < arr.length, j >= 0; i++, j--) {
    sum += arr[i][i] - arr[i][j]
  }
  return Math.abs(sum)
}

let input = [
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9],
]

console.log(diagonalDifference(input))
