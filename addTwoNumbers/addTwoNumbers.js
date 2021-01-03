/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let sum = 0;
  let head = new ListNode(0);
  let res = head;

  while (l1 || l2) {
      sum = Math.floor(sum / 10);
      if (l1) {
          sum += l1.val;
          l1 = l1.next;
      }
      if (l2) {
          sum += l2.val;
          l2 = l2.next;
      }
      head.next = new ListNode(sum % 10);
      head = head.next;
  }
  if (Math.floor(sum / 10) === 1) {
      head.next = new ListNode(1);
  }
  return res.next;
};