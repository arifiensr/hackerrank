function cutTheSticks(arr) {
  // let count = 0
  // let output = []
  // while (arr.reduce((a, b) => a + b, 0) !== 0) {
  //   arr = arr.map((x) => {
  //     if (x !== 0) {
  //       x -= Math.min(...arr.filter((ar) => ar !== 0))
  //       count++
  //     }
  //     return x
  //   })
  //   output.push(count)
  //   count = 0
  // }
  // return output

  let count = []
  while (arr.length > 0) {
    count.push(arr.length)
    arr = arr
      .sort((a, b) => a - b)
      .map((ar) => (ar -= arr[0]))
      .filter((ar) => ar > 0)
  }
  return count
}

// let arr = [5, 4, 4, 2, 2, 8]
let arr = [1, 13, 3, 8, 14, 9, 4, 4]

console.log(cutTheSticks(arr))
