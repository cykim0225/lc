/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  let recursion = (nums, prev, curr) => {
      if (nums.length === curr) {
          return 0;
      }

      let taken = 0;
      if (nums[curr] > prev) {
          taken = 1 + recursion(nums, nums[curr], curr + 1);
      }
      let nottaken = recursion(nums, prev, curr + 1);

      return Math.max(taken, nottaken);
  }

  return recursion(nums, -Infinity, 0);
};