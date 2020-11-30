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

//Recursion + memo

var rob = function (nums) {
  let memo = new Array(nums.length + 1);
  memo.fill(-1);

  let recursion = (nums, i) => {
    if (i < 0) {
      return 0;
    }
    if (memo[i] >= 0) {
      return memo[i];
    }

    let result = Math.max(recurse(nums, i - 2) + nums[i], recurse(nums, i - 1));
    memo[i] = result;

    return result;
  }

  return recurse(nums, nums.length - 1);
}