/*
 * Create the function factorial here
 */

function factorial(n) {
  // if (n < 1)
  //     return -1;
  // else if ( n == 1)
  //     return 1;
  // else
  //     return n * factorial(n - 1);

  let sum = n
  if (n >= 1) {
    for (let i = n - 1; i > 1; i--) {
      sum *= i
    }
  }
  return sum
}

let n = 4

console.log(factorial(n))
