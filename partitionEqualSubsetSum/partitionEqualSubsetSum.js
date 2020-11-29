/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
  let sum = 0;
  sum = nums.reduce((acc, curr) => acc + curr) / 2;

  if (sum % 1 !== 0) {
      return false;
  }
  let dp = [];
  for (let i = 0; i < nums.length + 1; i++) {
      dp[i] = new Array(sum + 1);
  };

  dp[0][0] = true;

  for (let i = 1; i < nums.length + 1; i++) {
      dp[i][0] = true;
  }

  for (let i = 1; i < sum + 1; i++) {
      dp[0][i] = false;
  }

  for (let i = 1; i < nums.length + 1; i++) {
      for (let j = 1; j < sum + 1; j++) {
          dp[i][j] = dp[i - 1][j];
          if (j >= nums[i - 1]) {
              dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i - 1]];
          }
      }
  }

  return dp[nums.length][sum]
};