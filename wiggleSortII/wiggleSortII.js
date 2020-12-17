/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function(nums) {
  let copy = nums.slice();
  copy.sort((a, b) => a - b);
  let index = nums.length - 1;

  for (let i = 1; i < nums.length; i += 2) {
      nums[i] = copy[index--];
  }
  for (let j = 0; j < nums.length; j += 2) {
      nums[j] = copy[index--];
  }
};