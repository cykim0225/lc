var inorderTraversal = function (root) {
  let res = [];
  let stacks = [];

  if (!root) {
    return res;
  }

  while (root || stacks.length !== 0) {
    while (root) {
      stacks.push(root);
      root = root.left;
    }
    root = stacks.pop(root);
    res.push(root);
    root = root.right;
  }

  return res;
}