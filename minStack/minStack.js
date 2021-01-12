/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.mins = [];
  this.stack = {};
  this.size = 0;
};

/**
* @param {number} x
* @return {void}
*/
MinStack.prototype.push = function(x) {
  if (x <= this.getMin() || this.mins.length === 0) {
      this.mins.push(x);
  }

  this.stack[++this.size] = x;
};

/**
* @return {void}
*/
MinStack.prototype.pop = function() {
  if (this.top() === this.mins[this.mins.length - 1]) {
      this.mins.pop();
  }
  delete this.stack[this.size--];

};

/**
* @return {number}
*/
MinStack.prototype.top = function() {
  return this.stack[this.size];
};

/**
* @return {number}
*/
MinStack.prototype.getMin = function() {
  return this.mins[this.mins.length - 1];
};

/**
* Your MinStack object will be instantiated and called as such:
* var obj = new MinStack()
* obj.push(x)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.getMin()
*/