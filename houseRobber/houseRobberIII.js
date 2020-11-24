var rob = function(root) {
  if (!root) {
      return 0;
  }

  let queue = new Queue();
  let depth = 0;
  let even = 0;
  let odd = 0;
  let item;
  let res = [];
  queue.enqueue({ tree: root, depth: depth });
  while (item = queue.dequeue()) {
      let node = item.tree;
      let depth = item.depth;
      if (depth % 2 === 0) {
          even += node.val;
      }
      if (depth % 2 === 1) {
          odd += node.val;
      }
      if (node.left !== null) {
          queue.enqueue({ tree: node.left, depth: depth + 1});
      }
      if (node.right !== null) {
          queue.enqueue({ tree: node.right, depth: depth + 1});
      }
      depth++;
  }

  return Math.max(even, odd);
};