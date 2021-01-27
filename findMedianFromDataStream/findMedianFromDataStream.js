/**
 * initialize your data structure here.
 */
var MedianFinder = function() {
  this.arr = [];
};

/**
* @param {number} num
* @return {void}
*/
MedianFinder.prototype.addNum = function(num) {
  this.arr.push(num);
  this.arr.sort((a, b) => a - b);
};

/**
* @return {number}
*/
MedianFinder.prototype.findMedian = function() {
  if (this.arr.length % 2 === 0) {
      return (this.arr[this.arr.length / 2] + this.arr[this.arr.length / 2 - 1]) / 2;
  } else {
      return this.arr[Math.floor(this.arr.length / 2)];
  }
};

/**
* Your MedianFinder object will be instantiated and called as such:
* var obj = new MedianFinder()
* obj.addNum(num)
* var param_2 = obj.findMedian()
*/