/*
 * @lc app=leetcode id=74 lang=javascript
 *
 * [74] Search a 2D Matrix
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  const flatten = matrix.flat(Infinity);
  const len = flatten.length;
  let left = -1,
    right = len;
  while (left + 1 < right) {
    let mid = Math.floor((left + right) / 2);
    if (flatten[mid] < target) {
      left = mid;
    } else {
      right = mid;
    }
  }
  if (flatten[right] !== target) {
    return false;
  }
  return true;
};
// @lc code=end
