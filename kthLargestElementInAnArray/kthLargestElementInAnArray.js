/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  nums.sort((a, b) => b - a);

  let i = 0;
  while (k-- > 0) {
      if (k === 0) {
          return nums[i];
      }
      i++;
  }
};