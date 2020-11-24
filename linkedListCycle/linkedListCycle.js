var hasCycle = function(head) {
  let node = head;
  while (node) {
      if (node.visited) {
          return true;
      }
      node.visited = true;
      node = node.next;
  }

  return false;
};