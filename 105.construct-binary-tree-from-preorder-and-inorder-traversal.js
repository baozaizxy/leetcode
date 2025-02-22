/*
 * @lc app=leetcode id=105 lang=javascript
 *
 * [105] Construct Binary Tree from Preorder and Inorder Traversal
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  if (!preorder.length) {
    return null;
  }

  const leftSize = inorder.indexOf(preorder[0]);
  const in_left = inorder.slice(0, leftSize);
  const in_right = inorder.slice(1 + leftSize, inorder.length);
  const pre_left = preorder.slice(1, leftSize + 1);
  const pre_right = preorder.slice(leftSize + 1, preorder.length);
  const left = buildTree(pre_left, in_left);
  const right = buildTree(pre_right, in_right);

  return new TreeNode(preorder[0], left, right);
};
// @lc code=end
