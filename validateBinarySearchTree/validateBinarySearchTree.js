var isValidBST = function(root, min = null, max = null) {
  if (!root) {
    return true;
  }
  if (min && root.val < min.val) {
    return false;
  }
  if (max && root.val > max.val) {
    return false;
  }

  return isValidBST(root.left, min, root) && isValidBST(root.right, root, max);

  //ITERATIVE
  // let stack = [];

  // while (root || stack.length !== 0) {
  //     while (root) {
  //         stack.push(root);
  //         root = root.left;
  //     }
  //     root = stack.pop();
  //     if (pre !== null && root.val <= pre.val) {
  //         return false;
  //     }

  //     pre = root;
  //     root = root.right;
  // }
  // return true;
}