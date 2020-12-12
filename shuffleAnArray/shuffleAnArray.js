/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
  this.nums = nums;
};

/**
* Resets the array to its original configuration and return it.
* @return {number[]}
*/
Solution.prototype.reset = function() {
  return this.nums;
};

/**
* Returns a random shuffling of the array.
* @return {number[]}
*/
Solution.prototype.shuffle = function() {
  let scratch = this.nums.slice();
  let result = [];
  let n = scratch.length;

  for (let i = 0; i < this.nums.length; i++) {
      let ran = Math.floor(Math.random() * n--);
      result[i] = scratch[ran];
      scratch.splice(ran, 1);
  }

  return result;
};

/**
* Your Solution object will be instantiated and called as such:
* var obj = new Solution(nums)
* var param_1 = obj.reset()
* var param_2 = obj.shuffle()
*/