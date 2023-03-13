/*
 * Complete the 'repeatedString' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. LONG_INTEGER n
 */

function repeatedString(s, n) {
  // Write your code here
  // * Use Regex

  // if (!/a/g.test(s)) return 0
  // let sum = 0
  // let s2 = s.substring(0, n % s.length)
  // if (n % s.length !== 0 && /a/g.test(s2)) {
  //   sum = s2.match(/a/g).length
  // }
  // return s.match(/a/g).length * Math.floor(n / s.length) + sum

  // * Use simple for loop
  
  let x = 0
  let y = 0
  let r = n % s.length

  for (let i = s.length - 1; i >= 0; i--) {
    if (s.charAt(i) === 'a') {
      x++
      if (i < r) y++
    }
  }

  return ((n - r) / s.length) * x + y
}

let s = 'abcac'
let n = 14

console.log(repeatedString(s, n))
// console.log(s.substring(0, n % s.length).match(/a/g));



