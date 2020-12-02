/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
  // let obj = {};

  // for (let i = 0; i < nums.length; i++) {
  //     !obj[nums[i]] ? obj[nums[i]] = 1 : obj[nums[i]]++;
  // }

  // for (let key in obj) {
  //     if (obj[key] > 1) {
  //         return key;
  //     }
  // }

  // Floyd Algorithm
  let slow = nums[0];
  let fast = nums[nums[0]];

  while (fast !== slow) {
    slow = nums[slow];
    fast = nums[nums[fast]];
  }

  fast = 0;

  while (fast !== slow) {
    slow = nums[slow];
    fast = nums[fast];
  }

  return slow;
};