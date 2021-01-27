/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  let stack = [];
  let op = '+';
  for (let i = 0; i < s.length; i++) {
      let num = 0;
      if (/[0-9]/.test(s.charAt(i))) {
              while (/[0-9]/.test(s.charAt(i))) {
              num = num * 10 + Number(s.charAt(i));
              i++;
          }
          if (op === '-') {
              stack.push(-num);
          }
          if (op === '+') {
              stack.push(num);
          }
          if (op === '*') {
              stack.push(stack.pop() * num);
          }
          if (op === '/') {
              let val = stack.pop() / num;
              if (val > 0) {
                  val = Math.floor(val);
              } else {
                  val = Math.ceil(val);
              }
              stack.push(val);
          }
          op = s.charAt(i);
      } else if (s.charAt(i) !== ' ') {
          op = s.charAt(i);
      }
  }
  let res = 0;
  for (let j = 0; j < stack.length; j++) {
      res += stack[j];
  }

  return res;
};