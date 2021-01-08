/**
 * @param {number} N
 * @return {number}
 */
var consecutiveNumbersSum = function(N) {
  let count = 1;

  for (let i = 2; i < Math.sqrt(2*N); i++) {
      if ((N - i * (i - 1) / 2) % i === 0) {
          count++;
      }
  }

  return count;
};