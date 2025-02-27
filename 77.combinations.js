/*
 * @lc app=leetcode id=77 lang=javascript
 *
 * [77] Combinations
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  let res = [];
  let path = [];
  const dfs = function (i) {
    let d = k - path.length;
    if (!d) {
      res.push([...path]);
      return;
    }

    for (let j = i; j >= d; j--) {
      path.push(j);
      dfs(j - 1);
      path.pop();
    }
  };
  dfs(n);
  return res;
};
// @lc code=end
