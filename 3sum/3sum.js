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

// pointers
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  nums.sort((a, b) => a - b);

  let res = [];

  for (let i = 0; i < nums.length - 2; i++) {
      if (i === 0 || i > 0 && nums[i] !== nums[i - 1]) {
          let low = i + 1;
          let high = nums.length - 1;
          let sum = 0 - nums[i];
          while (low < high) {
              if (nums[low] + nums[high] === sum) {
                  res.push([nums[i], nums[low], nums[high]]);
                  while (low < high && nums[low] === nums[low + 1]) {
                      low++;
                  }
                  while (low < high && nums[high] === nums[high - 1]) {
                      high--;
                  }
                  low++;
                  high--;
              } else if (nums[low] + nums[high] < sum) {
                  low++;
              } else {
                  high--;
              }
          }
      }
  }

  return res;
};