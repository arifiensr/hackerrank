/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 *
 * Parameter(s):
 * nums: An array of numbers.
 */

function modifyArray(nums) {
  return nums.map((x) => {
    if (x % 2 === 0) x *= 2
    else x *= 3
    return x
  })
}

let nums = [1, 2, 3, 4, 5]

console.log(modifyArray(nums))
