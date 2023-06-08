/*
 * Complete the 'cavityMap' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts STRING_ARRAY grid as parameter.
 */

function cavityMap(grid) {
  // Write your code here
  function replaceCharacter(string, index, replacement) {
    return string.slice(0, index) + replacement + string.slice(index + replacement.length)
  }
  for (let i = 1; i < grid.length - 1; i++) {
    for (let j = 1; j < grid[i].length - 1; j++) {
      let x = grid[i].charAt(j)
      if (x > grid[i - 1].charAt(j) && x > grid[i].charAt(j - 1) && x > grid[i].charAt(j + 1) && x > grid[i + 1].charAt(j)) {
        grid[i] = replaceCharacter(grid[i], j, 'X')
      }
    }
  }
  return grid
}

let grid = ['989', '191', '111']
console.log(cavityMap(grid))
