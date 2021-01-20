/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    let res = [];

    if (!root) {
        return res;
    }

    let nodes = [];
    nodes.push(root);
    let left = true;

    while (nodes.length !== 0) {
        let temp = [];
        let len = nodes.length;

        for (let i = 0; i < len; i++) {
            let node = nodes.shift();
            if (left) {
                temp.push(node.val);
            } else {
                temp.unshift(node.val);
            }

            if (node.left !== null) {
                nodes.push(node.left);
            }
            if (node.right !== null) {
                nodes.push(node.right);
            }
        }

        left = !left;
        res.push(temp);
    }

    return res;
};