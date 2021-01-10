/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if (s.length < 1) {
      return 0;
  }

  let max = 0;
  let j = 0;
  let hash = {};

  for (let i = 0; i < s.length; i++) {
      if (hash[s[i]] !== undefined) {
          j = Math.max(j, hash[s[i]] + 1);
          hash[s[i]] = j;
      }
      hash[s[i]] = i;
      max = Math.max(max, i - j + 1);

  console.log(hash,j )
  }

  return max;
};