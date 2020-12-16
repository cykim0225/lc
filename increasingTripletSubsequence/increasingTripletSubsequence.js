/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
  let low = Infinity;
  let high = Infinity;

  for (let i = 0; i < nums.length; i++) {
      if (nums[i] <= low) {
          low = nums[i];
      } else if (nums[i] <= high) {
          high = nums[i];
      } else {
          return true;
      }
  }

  return false;
};