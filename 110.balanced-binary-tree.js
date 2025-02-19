/*
 * @lc app=leetcode id=110 lang=javascript
 *
 * [110] Balanced Binary Tree
 */

// @lc code=start
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
 * @return {boolean}
 */
var isBalanced = function (root) {
  const tree_height = (node) => {
    if (!node) {
      return 0;
    }
    let left_height = tree_height(node.left);
    if (left_height === -1) {
      return -1;
    }
    let right_height = tree_height(node.right);
    if (right_height === -1 || Math.abs(left_height - right_height > 1)) {
      return -1;
    }
    return Math.max(left_height, right_height) + 1;
  };

  return tree_height(root) !== -1;
};
// @lc code=end
