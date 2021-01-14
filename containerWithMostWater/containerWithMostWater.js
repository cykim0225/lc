/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let max = 0;

  for (let i = 0; i < height.length; i++) {
      for (let j = i + 1; j < height.length; j++) {
          let w = j - i;
          let h = Math.min(height[i], height[j]);
          if (w * h > max) {
              max = w * h;
          }
      }
  }
  return max;
};