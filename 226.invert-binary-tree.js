/*
 * @lc app=leetcode id=226 lang=javascript
 *
 * [226] Invert Binary Tree
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
 * @return {TreeNode}
 */
var invertTree = function (root, cachedNode = new Map()) {
  if (!root) {
    return null;
  }

  while (!cachedNode.has(root)) {
    cachedNode.set(root, { val: root.val });
    Object.assign(cachedNode.get(root), {
      left: invertTree(root.right, cachedNode),
      right: invertTree(root.left, cachedNode),
    });
  }

  return cachedNode.get(root);
};
// @lc code=end
