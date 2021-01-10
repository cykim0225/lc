/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
  if (s.length === 1 && s.charAt(0) === '0') {
      return 0;
  }
  if (s.length === 1) {
      return 1;
  }

  let dp = new Array(s.length + 1);
  dp.fill(0);

  dp[0] = 1;
  dp[1] = s.charAt(0) === '0' ? 0 : 1;

  for (let i = 2; i <= s.length; i++) {
      let first = Number(s.slice(i - 1, i));
      let second = Number(s.slice(i - 2, i));

      if (first >= 1 && first <= 9) {
          dp[i] = dp[i - 1];
      }

      if (second >= 10 && second <= 26) {
          dp[i] += dp[i - 2];
      }
  }
  return dp[s.length];
};

// 0 2 2 9
// 1 1 2 2