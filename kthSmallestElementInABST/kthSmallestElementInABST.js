var kthSmallest = function (root, k) {
  let stack = [];
  if (!root) {
    return 0;
  }

  while (root || stack.length !== 0) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    if (--k === 0) {
      return root.val;
    }
    root = root.right;
  }
}