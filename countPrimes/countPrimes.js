/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  let arr = [];
  let count = 0;
  for (let i = 2; i < n; i++) {
      if (!arr[i]) {
          count++;
      }
      for (let j = 2; j * i < n; j++) {
          arr[i * j] = true;
      }
  }

  return count;
};