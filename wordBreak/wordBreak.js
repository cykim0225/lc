/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  let dp = [];
  for (let k = 0; k < s.length + 1; k++) {
      dp[k] = false;
  }
  dp[0] = true;

  for (let i = 1; i <= s.length; i++) {
      for (let j = 0; j < i; j++) {
          if (dp[j] && wordDict.includes(s.slice(j, i))) {
              dp[i] = true;
              break;
          }
      }
  }
  return dp[s.length];
};