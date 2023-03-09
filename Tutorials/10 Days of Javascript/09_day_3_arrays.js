/*
 *   Return the second largest number in the array.
 *   @param {Number[]} nums - An array of numbers.
 *   @return {Number} The second largest number in the array.
 */

function getSecondLargest(nums) {
  // Complete the function
  let max = Math.max(...nums)
  let sec = 0
  for (let i = 0; i < nums.length; i++) {
    if (sec <= nums[i] && nums[i] < max) {
      sec = nums[i]
    }
  }
  return sec
}

let nums = [2, 3, 6, 6, 5]

console.log(getSecondLargest(nums))
