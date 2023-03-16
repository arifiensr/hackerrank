/*
 * Complete the 'equalizeArray' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function equalizeArray(arr) {
  // Write your code here
  let [max, count] = [0, 1]
  arr.sort((a, b) => a - b)
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i] === arr[i + 1])
    if (arr[i] === arr[i + 1]) count++
    else {
      if (max < count) max = count
      count = 1
    }
  }
  return arr.length - max
}

let arr = [3, 3, 2, 1, 3]

console.log(equalizeArray(arr))
