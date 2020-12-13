/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  let count = {};
  let result = [];
  let bucket = [];

  for (let i = 0; i < nums.length; i++) {
      count[nums[i]] === undefined ? count[nums[i]] = 1 : count[nums[i]]++;
  }

  for (let key in count) {
      bucket.push({ key: key, value: count[key] });
  }

  bucket.sort((a, b) => a.value - b.value);

  while (k > 0) {
      result.push(bucket.pop()['key']);
      k--;
  }

  return result;
};