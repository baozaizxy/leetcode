/*
 * @lc app=leetcode id=543 lang=javascript
 *
 * [543] Diameter of Binary Tree
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
var diameterOfBinaryTree = function (root) {
  let ans = 0;
  const dfs = (node) => {
    if (!node) {
      return -1;
    }
    let lf_length = dfs(node.left) + 1;
    let rt_length = dfs(node.right) + 1;
    ans = Math.max(ans, lf_length + rt_length);
    return Math.max(lf_length, rt_length);
  };
  dfs(root);

  return ans;
};
// @lc code=end
