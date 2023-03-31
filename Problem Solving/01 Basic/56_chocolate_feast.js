/*
 * Complete the 'chocolateFeast' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER c
 *  3. INTEGER m
 */

function chocolateFeast(n, c, m) {
  // Write your code here
  let extra
  let candy = Math.floor(n/c)
  let wrapper = Math.floor(n/c)
  while (wrapper >= m) {
    extra = Math.floor(wrapper/m)
    candy += extra
    wrapper += -m * extra + extra
  }
  return candy
}

// function chocolateFeast(n, c, m) {
//   // Write your code here
//   let w = Math.floor(n / c)
//   return w + Math.ceil(w / (m - 1)) - 1
// }

let [n, c, m] = [15, 3, 2]

console.log(chocolateFeast(n, c, m))
