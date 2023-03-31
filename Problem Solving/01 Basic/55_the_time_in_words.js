/*
 * Complete the 'timeInWords' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER h
 *  2. INTEGER m
 */

function timeInWords(h, m) {
  // Write your code here
  let s = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'quarter',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eightteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'half',
  }
  if (m === 15 || m === 30) return `${s[m]} past ${s[h]}`
  else if (m === 1) return `${s[m]} minute past ${s[h]}`
  else if (m === 0) return `${s[h]} o' clock`
  else if (m <= 20) return `${s[m]} minutes past ${s[h]}`
  else if (m < 30) return `${s[20]} ${s[m - 20]} minutes past ${s[h]}`
  else if (m === 45) return `${s[15]} to ${s[h + 1]}`
  else if (m === 59) return `${s[1]} minute to ${s[h + 1]}`
  else if (m < 40) return `${s[20]} ${s[40 - m]} minutes to ${s[h + 1]}`
  else if (m < 60) return `${s[60 - m]} minutes to ${s[h + 1]}`
}

let [h, m] = [5, 00]

console.log(timeInWords(h, m))
