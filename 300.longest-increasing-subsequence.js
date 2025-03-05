/*
 * @lc app=leetcode id=300 lang=javascript
 *
 * [300] Longest Increasing Subsequence
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  let n = nums.length;
  let memo = new Array(n).fill(0);

  const dfs = (i) => {
    if (memo[i] > 0) return memo[i]; // 记忆化
    let res = 1; // 至少包含自己
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        res = Math.max(res, dfs(j) + 1);
      }
    }
    return (memo[i] = res); // 记忆化存储
  };

  let ans = 0;
  for (let i = 0; i < n; i++) {
    ans = Math.max(ans, dfs(i));
  }
  return ans;
};
// @lc code=end
