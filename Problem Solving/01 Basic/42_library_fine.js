function libraryFine(d1, m1, y1, d2, m2, y2) {
  // Write your code here
  // let fine = 0
  // if (y1 < y2 || (y1 === y2 && m1 < m2) || (y1 === y2 && m1 === m2 && d1 < d2)) fine = 0
  // else if (y1 > y2) fine = 10000
  // else if (m1 > m2) fine = (m1 - m2) * 500
  // else if (d1 > d2) fine = (d1 - d2) * 15
  // return fine

  if (y1 > y2) return 10000
  if (y1 < y2) return 0
  if (m1 > m2) return (m1 - m2) * 500
  if (m1 < m2) return 0
  if (d1 > d2) return (d1 - d2) * 15
  return 0
}

let [d1, m1, y1] = [6, 6, 2015]
let [d2, m2, y2] = [9, 6, 2016]
console.log(libraryFine(d1, m2, y1, d2, m2, y2))
