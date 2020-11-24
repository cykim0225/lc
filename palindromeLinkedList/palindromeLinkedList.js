var isPalindrome = function(head) {
  let count = head;
  let node = head;
  let length = 0;
  let half = [];
  let odd = false;

  while (count) {
      length++;
      count = count.next;
  }

  if (length === 1) {
      return true;
  }
  if (length % 2 === 1) {
      odd = true;
  }

  length = Math.floor(length / 2);
  let i = length - 1;

  while (node) {
      while (length) {
          half.push(node.val);
          if (odd && length === 1) {
              node = node.next.next;
              length--;
              break;
          }
          length--;
          node = node.next;
      }
      if (node.val !== half[i]) {
          return false;
      }
      i--;
      node = node.next;
  }

  return true;
};