/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function(nums) {
  let count = [];

  for (let i = 0; i < nums.length; i++) {
      let smallerNums = 0;
      for (let j = i + 1; j < nums.length; j++) {
          if (nums[j] < nums[i]) {
              smallerNums++;
          }
      }
      count.push(smallerNums);
  }

  return count;
};