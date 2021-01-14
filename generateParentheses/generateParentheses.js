/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  let res = [];

  let recurse = (str, open, close, max) => {
      if (str.length === 2 * max) {
          res.push(str);
          return;
      }

      if (open < max) {
          recurse(str + '(', open + 1, close, max);
      }
      if (close < open) {
          recurse(str + ')', open, close + 1, max);
      }
  }

  recurse('', 0, 0, n)

  return res;
};