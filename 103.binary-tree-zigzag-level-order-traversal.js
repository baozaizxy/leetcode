/*
 * @lc app=leetcode id=103 lang=javascript
 *
 * [103] Binary Tree Zigzag Level Order Traversal
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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  if (!root) return [];

  let ans = [];
  let queue = [root];
  let level = 0; // 用于跟踪层数，判断是否需要反转

  while (queue.length) {
    let vals = [];
    let size = queue.length; // 记录当前层的节点数

    for (let i = 0; i < size; i++) {
      let node = queue.shift(); // 取出队列头部的节点
      vals.push(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    if (level % 2 === 1) vals.reverse(); // 奇数层反转
    ans.push(vals);
    level++; // 层数递增
  }

  return ans;
};
// @lc code=end
