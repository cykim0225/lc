var sortedArrayToBST = function(nums) {

  let recurse = function(arr, low, high) {
      if (low > high) { //Done
          return null;
      }

      let mid = Math.floor((low + high) / 2);
      let node = new TreeNode(arr[mid]);

      node.left = recurse(arr, low, mid - 1);
      node.right = recurse(arr, mid + 1, high);
      return node;
  }

  let treenode = recurse(nums, 0, nums.length - 1);
  return treenode;
};