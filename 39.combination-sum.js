/*
 * @lc app=leetcode id=39 lang=javascript
 *
 * [39] Combination Sum
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const len = candidates.length;
  let res = [];
  let path = [];
  const dfs = function (i, t) {
    if (!t) {
      res.push([...path]);
      return;
    }

    if (i >= len || t < 0) return; // 防止访问越界 & 剪枝

    dfs(i + 1, t);

    path.push(candidates[i]);
    dfs(i, t - candidates[i]);
    path.pop();
  };

  dfs(0, target);
  return res;
};
// @lc code=end
