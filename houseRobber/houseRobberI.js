//Recursion
var rob = function (nums) {
  var recurse = function (nums, i) {
    if (i < 0) {
      return 0;
    }

    return Math.max(recurse(nums, i - 2) + nums[i], recurse(nums, i - 1));
  }

  return recurse(nums, nums.length - 1);
}

