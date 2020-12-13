/**
 * Initialize your data structure here.
 */
var RandomizedSet = function() {
  this.map = {};
  this.arr = [];
};

/**
* Inserts a value to the set. Returns true if the set did not already contain the specified element.
* @param {number} val
* @return {boolean}
*/
RandomizedSet.prototype.insert = function(val) {
  if (this.map[val] === undefined) {
      this.map[val] = this.arr.length;

      this.arr.push(val);
      return true;
  } else {
      return false;
  }
};

/**
* Removes a value from the set. Returns true if the set contained the specified element.
* @param {number} val
* @return {boolean}
*/
RandomizedSet.prototype.remove = function(val) {
  if (this.map[val] !== undefined) {
      if (this.arr[this.arr.length - 1] !== val) {
          let last = this.arr[this.arr.length - 1];
          let index = this.map[val];
          this.arr[index] = last;
          this.map[last] = index;
      }
      delete this.map[val];
      this.arr.pop();

      return true;
  } else {
      return false;
  }
};

/**
* Get a random element from the set.
* @return {number}
*/
RandomizedSet.prototype.getRandom = function() {
  return this.arr[Math.floor(Math.random() * this.arr.length)];
};

/**
* Your RandomizedSet object will be instantiated and called as such:
* var obj = new RandomizedSet()
* var param_1 = obj.insert(val)
* var param_2 = obj.remove(val)
* var param_3 = obj.getRandom()
*/