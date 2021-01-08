/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  let count = {};
  let res = [];

  for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
          for (let k = j + 1; k < nums.length; k++) {
              let triplet = [];
              if (nums[i] + nums[j] + nums[k] === 0) {
                  triplet.push(nums[i]);
                  triplet.push(nums[j]);
                  triplet.push(nums[k]);
                  triplet.sort((a, b) => a - b);
                  if (count[triplet] === undefined) {
                      count[triplet] = triplet;
                  }
              }
          }
      }
  }
  for (let key in count) {
      res.push(count[key]);
  }

  return res;
};