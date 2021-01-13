/**
 * @param {string} digits
 * @return {string[]}
 */
const nums = {
  2: 'abc',
  3: 'def',
  4: 'ghi',
  5: 'jkl',
  6: 'mno',
  7: 'pqrs',
  8: 'tuv',
  9: 'wxyz'
}

var letterCombinations = function(digits) {
  let res = [];

  if (digits.length === 0) {
      return [];
  }

  let recurse = (d, letters) => {
      if (letters.length === digits.length) {
          res.push(letters);
          return;
      }

      let curr = nums[d[0]];
      let other = d.slice(1);

      for (let i = 0; i < curr.length; i++) {
          recurse(other, letters + curr[i])
      }
  }

  recurse(digits, '');

  return res;
};