/*
 * @lc app=leetcode id=240 lang=javascript
 *
 * [240] Search a 2D Matrix II
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  const m = matrix.length;
  const n = matrix[0].length;
  let i = 0,
    j = n - 1;
  while (i < m && j >= 0) {
    let curr = matrix[i][j];
    if (curr == target) {
      return true;
    }
    if (curr > target) {
      --j;
    }
    if (curr < target) {
      ++i;
    }
  }
  return false;
};
// @lc code=end
