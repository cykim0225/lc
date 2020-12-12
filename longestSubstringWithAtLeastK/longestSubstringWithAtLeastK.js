/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function(s, k) {
  let count = {};

  for (let i = 0; i < s.length; i++) {
      count[s.charAt(i)] === undefined ? count[s.charAt(i)] = 1 : count[s.charAt(i)]++;
  }
  for (let key in count) {
      if (count[key] < k) {
          let arr = s.split(key);
          let res = 0;
          for (let word of arr) {
              res = Math.max(res, longestSubstring(word, k));
          }
          return res;
      }
  }

  return s.length;
};