var productExceptSelf = function(nums) {
  // create a result array
  let res = [];
  // create two variables to hold multiplied value
  let left = 1;
  let right = 1;
  // iterate through the nums array from start
  for (let i = 0; i < nums.length; i++) {
      // append to the result array element
      res[i] = left;
      left *= nums[i];
  } // [ , 1, 2, 6]
  // iterate through the nums array from end
  for (let j = nums.length - 1; j >= 0; j--) {
      // append to the result array element
      res[j] *= right;
      right *= nums[j];
  }

  return res;
};

//I: an array
//O: an array
//C: O(n) time complexity
//E: when the array length is 2, return the other element