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

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  if (nums.length === 0) {
      return 0;
  }

  let dp = new Array(nums.length);
  dp[0] = 1;

  let maxAns = 1;
  for (let i = 1; i < nums.length; i++) {
      let maxVal = 0;
      for (let j = 0; j < i; j++) {
          if (nums[i] > nums[j]) {
              maxVal = Math.max(maxVal, dp[j]);
          }
          dp[i] = maxVal + 1;
          maxAns = Math.max(maxAns, dp[i]);
      }
  }
  return maxAns;
};