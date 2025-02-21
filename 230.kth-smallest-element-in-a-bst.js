/*
 * @lc app=leetcode id=230 lang=javascript
 *
 * [230] Kth Smallest Element in a BST
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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  let stack = [];
  let res = [];
  let i = 0;
  while (i < k) {
    if (root) {
      stack.push(root);
      while (root.left) {
        root = root.left;
        stack.push(root);
      }
    }
    root = stack.pop();
    res[i] = root.val;
    i++;
    root = root.right;
  }
  return res[k - 1];
};
// @lc code=end
