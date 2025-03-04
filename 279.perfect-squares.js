/*
 * @lc app=leetcode id=279 lang=javascript
 *
 * [279] Perfect Squares
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
const N = 10000;
let len = Math.floor(Math.sqrt(10000)) + 1;
let arr = Array.from({ length: len }, () => Array(10001).fill(Infinity));
arr[0][0] = 0;
// i 从 1 开始，保证 i - 1 是合法的索引。
for (let i = 1; i * i <= N; i++) {
  for (let j = 0; j <= N; j++) {
    if (i * i > j) {
      arr[i][j] = arr[i - 1][j];
    } else {
      arr[i][j] = Math.min(arr[i - 1][j], arr[i][j - i * i] + 1);
    }
  }
}

var numSquares = function (n) {
  return arr[Math.floor(Math.sqrt(n))][n];
};
// @lc code=end
