/*
 * Complete the 'encryption' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function encryption(s) {
  // Write your code here
  s = s.replace(/\s/g, '')
  let row = Math.floor(Math.sqrt(s.length))
  let col = Math.ceil(Math.sqrt(s.length))
  if (row * col < s.length) row = col
  let re = new RegExp(`.{1,${col}}`, 'g')
  s = s.match(re)
  let en = []
  for (let i = 0; i < col; i++) {
    for (let j = 0; j < row; j++) {
      if (en[i] === undefined) en[i] = s[j].charAt(i)
      else en[i] += s[j].charAt(i)
    }
  }
  return en.join(' ')
}

// let s = 'if man was meant to stay on the ground god would have given us roots'
let s = 'chillout'

console.log(encryption(s))
