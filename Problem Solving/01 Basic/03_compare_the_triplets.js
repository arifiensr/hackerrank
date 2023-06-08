function compareTriplets(a, b) {
  let score = [0, 0]
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) score[0]++
    else if (a[i] < b[i]) score[1]++
  }
  return score
}

let a = [5, 6, 7]
let b = [3, 6, 10]

console.log(compareTriplets(a, b))
