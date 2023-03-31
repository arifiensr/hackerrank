/*
 * Complete the 'beautifulTriplets' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER d
 *  2. INTEGER_ARRAY arr
 */

// * First Solution

// function beautifulTriplets(d, arr) {
//   let count = 0;
//   for (let i = 0; i < arr.length - 2; i++) {
//     if (arr.includes(arr[i] + d)) {
//       if (arr.includes(arr[i] + 2 * d)) {
//         count++;
//       }
//     }
//   }
//   return count;
// }

// * Second Solution

function beautifulTriplets(d, arr) {
  // Write your code here
  let i, j, k
  let triplets = []
  arr.forEach((x) => {
    i = x
    j = arr.filter((y) => y === i + d)[0]
    k = arr.filter((z) => z === j + d)[0]
    if ((j && k) !== undefined) triplets.push([i, j, k])
  })
  return triplets.length
}

const d = 3
let arr = [1, 2, 4, 5, 7, 8, 10]

console.log(beautifulTriplets(d, arr))
