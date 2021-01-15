/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  let res = [];

  let swap = (first, second) => {
      let temp = nums[first];
      nums[first] = nums[second];
      nums[second] = temp;
  }

  let recurse = (start) => {
      if (start === nums.length) {
          res.push(nums.slice());
          return;
      }

      for (let i = start; i < nums.length; i++) {
          swap(i, start);
          recurse(start + 1)
          swap(i, start);
      }
  }

  recurse(0);

  return res;
};