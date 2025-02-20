/*
 * @lc app=leetcode id=124 lang=javascript
 *
 * [124] Binary Tree Maximum Path Sum
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
var maxPathSum = function (root) {
  let res = -Infinity;
  const dfsValue = (node) => {
    if (!node) {
      return 0;
    }
    let lf_value = dfsValue(node.left);
    let rt_value = dfsValue(node.right);
    res = Math.max(res, lf_value + rt_value + node.val);

    return Math.max(0, Math.max(lf_value, rt_value) + node.val);
  };

  dfsValue(root);

  return res;
};
// @lc code=end
