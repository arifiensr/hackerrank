/*
 * Complete the 'kaprekarNumbers' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER p
 *  2. INTEGER q
 */

function kaprekarNumbers(p, q) {
  // Write your code here
  let k = []
  for (let i = p; i <= q; i++) {
    let j = (i ** 2).toString()
    let x = Math.floor(j.length / 2)
    j = [j.slice(0, x), j.slice(x)]
      .map(Number)
      .reduce((a, b) => a + b)
    if (i === j) k.push(i)
  }
  k.length !== 0
    ? console.log(k.join(' '))
    : console.log('INVALID RANGE')
}

let [p, q] = [1, 100]

console.log(kaprekarNumbers(p, q))
