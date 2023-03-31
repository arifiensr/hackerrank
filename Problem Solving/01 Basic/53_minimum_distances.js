/*
 * Complete the 'minimumDistances' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function minimumDistances(a) {
  // Write your code here
  let min = a.length
  for (let i = 0; i < a.length - 1; i++) {
    for (let j = i + 1; j < a.length; j++) {
      if (a[i] === a[j]) min = Math.min(min, j - i)
    }
  }
  return min !== a.length ? min : -1
}

let a = [7, 1, 3, 4, 1, 7]

console.log(minimumDistances(a))
