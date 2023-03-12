function regexVar() {
  /*
   * Declare a RegExp object variable named 're'
   * It must match ALL occurrences of numbers in a string.
   */
  
  let re = /\d+/g
  
  /*
   * Do not remove the return statement
   */
  return re;
}

let re = regexVar()
let s = '102, 1948948 and 1.3 and 4.5'

console.log(s.match(re))
