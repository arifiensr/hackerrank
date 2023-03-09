/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */

function vowelsAndConsonants(s) {
  let vowels = ['a', 'i', 'u', 'e', 'o']

  for (let i of s) {
    if (vowels.includes(i)) {
      console.log(i)
    }
  }

  for (let i of s) {
    if (!vowels.includes(i)) {
      console.log(i)
    }
  }
}

let s = 'javascriptloops'

vowelsAndConsonants(s)
