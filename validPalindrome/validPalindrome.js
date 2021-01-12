/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  let j = s.length - 1;

  for (let i = 0; i < s.length; i < j) {
      if (!isLetterOrDigit(s.charAt(i))) {
          i++;
      } else if (!isLetterOrDigit(s.charAt(j))) {
          j--;
      } else if (s.charAt(i++).toLowerCase() !== s.charAt(j--).toLowerCase()) {
          return false;
      }
  }

  return true;
};

var isLetterOrDigit = function(char) {
return (/[a-zA-Z0-9]/).test(char)
}