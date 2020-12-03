/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param head The linked list's head.
        Note that the head is guaranteed to be not null, so it contains at least one node.
 * @param {ListNode} head
 */
var Solution = function(head) {
  this.head = head;
};

/**
* Returns a random node's value.
* @return {number}
*/
Solution.prototype.getRandom = function() {
  let length = 0;
  let node = this.head;
  let node2 = this.head;
  while (node) {
      node = node.next;
      length++;
  }

  let index = Math.floor(Math.random() * length);
  while (node2) {
      if (index === 0) {
          return node2.val;
      }

      node2 = node2.next;
      index--;
  }
};

/**
* Your Solution object will be instantiated and called as such:
* var obj = new Solution(head)
* var param_1 = obj.getRandom()
*/