var twoSum = function(nums, target) {
  let obj = {};

  for (let i = 0; i < nums.length; i++) {
      let another = target - nums[i];

      if (another in obj) {
          return [obj[another], i];
      }

      obj[nums[i]] = i;
  }

  return null;
};