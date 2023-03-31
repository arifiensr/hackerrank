/*
 * Complete the 'howManyGames' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER p
 *  2. INTEGER d
 *  3. INTEGER m
 *  4. INTEGER s
 */

function howManyGames(p, d, m, s) {
  // Return the number of games you can buy
  let count = 0
  while (s >= p) {
    s -= p
    p = Math.max(m, p - d)
    count++
  }
  return count
}

// let [p, d, m, s] = [20, 3, 6, 70]
// let [p, d, m, s] = [20, 3, 6, 80]
let [p, d, m, s] = [20, 3, 6, 85]

console.log(howManyGames(p, d, m, s))
