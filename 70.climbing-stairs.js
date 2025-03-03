/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  memo = Array(n + 1).fill(0);
  function dfs(i) {
    if (i <= 1) {
      // 递归边界
      return 1;
    }
    if (memo[i]) {
      // 之前计算过
      return memo[i];
    }
    return (memo[i] = dfs(i - 1) + dfs(i - 2)); // 记忆化
  }
  return dfs(n);
};
// @lc code=end
