/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let currentMax = 0;
  let max = 0;

  for (let i = 1; i < prices.length; i++) {
      currentMax = Math.max(0, currentMax += prices[i] - prices[i - 1]);
      max = Math.max(currentMax, max);
  }

  return max;
};