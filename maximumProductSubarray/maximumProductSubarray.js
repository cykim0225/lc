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

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  let max = nums[0];
  let min = nums[0];
  let res = max;

  for (let i = 1; i < nums.length; i++) {
      let curr = nums[i];
      let tempMax = Math.max(curr, Math.max(max * curr, min * curr));
      min = Math.min(curr, Math.min(max * curr, min * curr));
      max = tempMax;


      res = Math.max(res, max);
  }
  return res;
};