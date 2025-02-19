/*
 * @lc app=leetcode id=104 lang=javascript
 *
 * [104] Maximum Depth of Binary Tree
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
 * @return {number}
 */
// 深度优先遍历+递归
var maxDepth = function (root) {
  if (!root) {
    return 0;
  }
  let leftNode = root.left;
  let rightNode = root.right;
  return Math.max(maxDepth(leftNode), maxDepth(rightNode)) + 1;
};
// @lc code=end
