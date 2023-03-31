/*
 * Complete the 'serviceLane' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. 2D_INTEGER_ARRAY cases
 */

function serviceLane(width, cases) {
  // Write your code here
  let max = []
  for (let i = 0; i < cases.length; i++) {
    max.push(Math.min(...width.slice(cases[i][0], cases[i][1] + 1)))
  }
  return max
}

let width = [2, 3, 1, 2, 3, 2, 3, 3]
let cases = [
  [0, 3],
  [4, 6],
  [6, 7],
  [3, 5],
  [0, 7],
]

console.log(serviceLane(width, cases))
