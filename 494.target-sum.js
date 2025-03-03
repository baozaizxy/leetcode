/*
 * @lc app=leetcode id=494 lang=javascript
 *
 * [494] Target Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function findTargetSumWays(nums, target) {
  let s = nums.reduce((a, b) => a + b, 0) - Math.abs(target);
  if (s < 0 || s % 2 !== 0) return 0;
  let m = s / 2; // 背包容量

  // 记忆化缓存，避免重复计算
  const memo = new Map();

  function dfs(i, c) {
    if (i < 0) return c === 0 ? 1 : 0;
    let key = `${i},${c}`;
    if (memo.has(key)) return memo.get(key);

    let res = dfs(i - 1, c); // 不选当前元素
    if (c >= nums[i]) res += dfs(i - 1, c - nums[i]); // 选当前元素

    memo.set(key, res);
    return res;
  }

  return dfs(nums.length - 1, m);
}
// @lc code=end
