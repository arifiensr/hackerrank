// function pickingNumbers(a) {
//   let max = 0
//   let count = 1
//   for (let i = 0; i < a.length - 1; i++) {
//     for (let j = i + 1; j < a.length; j++) {
//       if (Math.abs(a[i] - a[j]) <= 1) count++
//       else {
//         if (max < count) max = count
//         count = 1
//       }
//     }
//     if (max < count) max = count
//     count = 1
//   }
//   return max
// }

function pickingNumbers(a) {
  let max = 0
  let count = 1
  for (let i = 0; i < a.length - 1; i++) {
  }
}

// let a = [1, 2, 2, 3, 1, 2]
let a = [4, 6, 5, 3, 3, 1]

console.log(pickingNumbers(a))
