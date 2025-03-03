/*
 * @lc app=leetcode id=118 lang=javascript
 *
 * [118] Pascal's Triangle
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  let res = [];
  while (res.length < numRows) {
    let temp = new Array(res.length + 1).fill(1);
    res.push(temp);
  }
  let n = 2;
  while (n < numRows) {
    for (let i = 1; i < n; i++) {
      res[n][i] = res[n - 1][i - 1] + res[n - 1][i];
    }
    n++;
  }
  return res;
};
// @lc code=end
