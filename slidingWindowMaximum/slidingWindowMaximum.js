/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  let q = [];
  let result = [];

  for (let i = 0; i < nums.length; i++) {
      if (q.length !== 0 && q[0] < i - (k - 1)) {
          q.shift();
      }
      while (q.length !== 0 && nums[q[q.length - 1]] <= nums[i]) {
          q.pop();
      }

      q.push(i);

      if (i - (k - 1) >= 0) {
          result.push(nums[q[0]]);
      }
  }

  return result;
};