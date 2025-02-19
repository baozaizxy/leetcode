/*
 * @lc app=leetcode id=199 lang=javascript
 *
 * [199] Binary Tree Right Side View
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
 * @return {number[]}
 */
var rightSideView = function (root) {
  let res = [];
  const whether_push = (node, depth) => {
    if (node === null) return;
    if (depth === res.length) {
      res.push(node.val);
    }
    whether_push(node.right, depth + 1);
    whether_push(node.left, depth + 1);
  };
  whether_push(root, 0);
  return res;
};
// @lc code=end
