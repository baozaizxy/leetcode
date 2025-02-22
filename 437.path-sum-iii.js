/*
 * @lc app=leetcode id=437 lang=javascript
 *
 * [437] Path Sum III
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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function (root, targetSum) {
  // 前缀和
  let ans = 0;
  const map = new Map();
  map.set(0, 1);
  let prefixSum = 0;

  const dfs = (node, k) => {
    if (!node) {
      return;
    }

    prefixSum += node.val;
    if (map.has(prefixSum - k)) {
      ans += map.get(prefixSum - k);
    }
    map.set(prefixSum, (map.get(prefixSum) || 0) + 1);
    dfs(node.left, k);
    dfs(node.right, k);

    map.set(prefixSum, map.get(prefixSum) - 1);
    prefixSum -= node.val;
  };

  dfs(root, targetSum);
  return ans;
};
// @lc code=end
