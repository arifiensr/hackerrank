function regexVar() {
  /*
   * Declare a RegExp object variable named 're'
   * It must match a string that starts with 'Mr.', 'Mrs.', 'Ms.', 'Dr.', or 'Er.', 
   * followed by one or more letters.
   */
  
  let re = /^(Mr|Mrs|Ms|Dr|Er)\.[A-Za-a]+$/
  
  /*
   * Do not remove the return statement
   */
  return re;
}

let re = regexVar()
let s = 'Mr.X'

console.log(re.test(s))
