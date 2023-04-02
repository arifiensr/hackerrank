/*
 * Complete the 'workbook' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER k
 *  3. INTEGER_ARRAY arr
 */
const arrayRange = (start, stop, step) => Array.from({ length: (stop - start) / step + 1 }, (value, index) => start + index * step)

// function workbook(n, k, arr) {
//   // Write your code here
//   let prev = 1
//   let next = 0
//   let count = 0
//   for (let i = 0; i < n; i++) {
//     next += arr[i] % k === 0 ? arr[i] / k : Math.ceil(arr[i] / k)
//     arrayRange(prev, next, 1).forEach(x => {
      
//     })
//     console.log(count);
//     prev = next + 1
//   }
//   // return count
// }
function workbook(n, k, arr) {
  // Write your code here
  let page = 0
  for (let x of arr) {
    while (x > 0) {
      page++
      
    }
  }
}

let n = 5
let k = 3
let arr = [4, 2, 6, 1, 10]

console.log(workbook(n, k, arr))
