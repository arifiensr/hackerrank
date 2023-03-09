function getLetter(s) {
  let letter
  // Write your code here
  switch (true) {
    case 'aeiou'.includes(s[0]):
      letter = 'A'
      break
    case 'bcdfg'.includes(s[0]):
      letter = 'B'
      break
    case 'hjklm'.includes(s[0]):
      letter = 'C'
      break
    case 'npqrstvwxyz'.includes(s[0]):
      letter = 'D'
      break
  }

  // switch (s[0]) {
  //     case 'a' || 'e' || 'i' || 'o' || 'u':
  //         letter = 'A';
  //         break;
  //     case 'b' || 'c' || 'd' || 'f' || 'g':
  //         letter = 'B';
  //         break;
  //     case 'h' || 'j' || 'k' || 'l' || 'm':
  //         letter = 'C';
  //         break;
  //     case 'n' || 'p' || 'q' || 'r' || 's' || 't' || 'v' || 'w' || 'x' || 'y' || 'z':
  //         letter = 'D';
  //         break;
  // }
  return letter
}

let s = 'adfgt'

console.log(getLetter(s))
