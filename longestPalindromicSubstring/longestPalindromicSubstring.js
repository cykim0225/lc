/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  var max = 0;
  var low = 0;

  var extendPalindrome = (s, j, k) => {
      while (j >= 0 && k <= s.length - 1 && s.charAt(j) === s.charAt(k)) {
          j--;
          k++;
      }

      if (max < (k - 1) - (j + 1) + 1) {
          max = (k - 1) - (j + 1) + 1;
          low = j + 1;
      }
  }

  for (let i = 0; i < s.length; i++) {
      extendPalindrome(s, i, i);
      extendPalindrome(s, i, i + 1);
  }
  return s.slice(low, low + max);
};