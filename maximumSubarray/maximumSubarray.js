/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let local_max = 0;
  let global_max = -Infinity;

  for (let i = 0; i < nums.length; i++) {
      local_max = Math.max(nums[i], nums[i] + local_max);
      global_max = Math.max(local_max, global_max);
  }

  return global_max;
};