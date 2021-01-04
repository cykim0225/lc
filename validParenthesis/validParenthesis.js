/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let stacks = [];

  for (let i = 0; i < s.length; i++) {
      if (s[i] === '(') {
          stacks.push(')');
      } else if (s[i] === '{') {
          stacks.push('}');
      } else if (s[i] === '[') {
          stacks.push(']');
      } else if (stacks.length === 0 || stacks.pop() !== s[i]) {
          return false;
      }
  }

  return !stacks.length;
};