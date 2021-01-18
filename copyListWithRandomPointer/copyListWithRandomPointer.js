/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
  if (head === null) {
      return null;
  }

  let visited = new Map();

  let getClone = (node) => {
      if (node !== null) {
          if (visited.has(node)) {
              return visited.get(node);
          } else {
              visited.set(node, new Node(node.val))
              return visited.get(node);
          }
      }

      return null;
  }
  let oldNode = head;
  while (oldNode !== null) {
      getClone(oldNode).random = getClone(oldNode.random);
      getClone(oldNode).next = getClone(oldNode.next);

      oldNode = oldNode.next;
  }

  return visited.get(head);
};