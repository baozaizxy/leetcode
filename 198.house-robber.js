/*
 * @lc app=leetcode id=198 lang=javascript
 *
 * [198] House Robber
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  const len = nums.length;
  let sum = new Array(len).fill(-1);
  const dfs = (i) => {
    if (i < 0) {
      return 0;
    }
    if (sum[i] !== -1) {
      return sum[i];
    }
    sum[i] = Math.max(dfs(i - 1), dfs(i - 2) + nums[i]);
    return sum[i];
  };

  return dfs(len - 1);
};
// @lc code=end
