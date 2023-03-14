/*
 * Complete the 'jumpingOnClouds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY c as parameter.
 */

function jumpingOnClouds(c) {
  // Write your code here
  let jump = 0
  for (let i = 0; i < c.length - 1; i++) {
    console.log(i)
    c[i + 2] !== 1 ? (i += 1) : i
    jump++
  }
  return jump
}

let c = [0, 0, 1, 0, 0, 1, 0]

console.log(jumpingOnClouds(c))
