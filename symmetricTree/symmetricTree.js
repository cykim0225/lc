var isSymmetric = function(root) {
  if (!root) {
      return true;
  }

  let left = root.left;
  let right = root.right;
  let res1 = [];
  let res2 = [];

  var check1 = function (node) {
      if (!node) {
          res1.push(null);
          return;
      }
      res1.push(node.val);
      check1(node.left);
      check1(node.right);
  }
  var check2 = function (node) {
      if (!node) {
          res2.push(null);
          return;
      }
      res2.push(node.val);
      check2(node.right);
      check2(node.left);
  }

  check1(left);
  check2(right);

  return JSON.stringify(res1) === JSON.stringify(res2);
};