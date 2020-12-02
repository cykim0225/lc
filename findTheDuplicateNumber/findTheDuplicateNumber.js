/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
  let obj = {};

  for (let i = 0; i < nums.length; i++) {
      !obj[nums[i]] ? obj[nums[i]] = 1 : obj[nums[i]]++;
  }

  for (let key in obj) {
      if (obj[key] > 1) {
          return key;
      }
  }
};