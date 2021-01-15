/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
      let mid = Math.floor((high - low) / 2) + low;
      if (nums[mid] > nums[nums.length - 1]) {
          low = mid + 1;
      } else {
          high = mid - 1;
      }
  }
  let rot = low;
  if (target >= nums[0]) {
      low = 0;
      high = rot - 1;
  } else {
      low = rot;
      high = nums.length - 1;
  }
  if (nums[rot] === target) {
      return rot;
  }
  if (rot === 0) {
      low = 0;
      high = nums.length - 1;
  }
  while (low <= high) {
      let mid = Math.floor((high - low) / 2) + low;
      if (nums[mid] === target) {
          return mid;
      }

      if (nums[mid] < target) {
          low = mid + 1;
      } else {
          high = mid - 1;
      }
  }

  return -1;
};