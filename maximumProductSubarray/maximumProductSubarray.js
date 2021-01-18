/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  if (nums.length === 1) {
      return nums[0];
  }

  let res = -Infinity;

  for (let i = 0; i < nums.length; i++) {
      for (let j = i; j < nums.length; j++) {
          let acc = 1;
          for (let k = i; k <= j; k++) {
              acc *= nums[k];
              res = Math.max(res, acc);
          }
      }
  }

  return res;
};