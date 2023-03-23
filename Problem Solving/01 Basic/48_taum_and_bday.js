/*
 * Complete the 'taumBday' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER b
 *  2. INTEGER w
 *  3. INTEGER bc
 *  4. INTEGER wc
 *  5. INTEGER z
 */

function taumBday(b, w, bc, wc, z) {
  // Write your code here
  return BigInt(b) * BigInt(Math.min(bc, wc + z)) + BigInt(w) * BigInt(Math.min(wc, bc + z))
}

// let [b, w, bc, wc, z] = [3, 6, 9, 1, 1]
let [b, w, bc, wc, z] = [742407782, 90529439, 847666641, 8651519, 821801924]

console.log(taumBday(b, w, bc, wc, z))