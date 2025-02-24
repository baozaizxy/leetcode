/*
 * @lc app=leetcode id=48 lang=javascript
 *
 * [48] Rotate Image
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
// 暴力解法 开辟单独的空间存放新结果
var rotate = function (matrix) {
  const n = matrix.length;
  // 创建新的二位数组
  const matrix_new = new Array(n).fill(0).map(() => new Array(n).fill(0));
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      matrix_new[j][n - i - 1] = matrix[i][j];
    }
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      matrix[i][j] = matrix_new[i][j];
    }
  }
};
// 原地旋转法
var rotate = function (matrix) {
  const n = matrix.length;
  // 当n为偶数时，我们需要枚举n^2/4=(n/2)×(n/2)个位置
  // 当n为奇数时，由于中心的位置经过旋转后位置不变，我们需要枚举(n^2−1)/4=((n−1)/2)×((n+1)/2)个位置
  for (let i = 0; i < Math.floor(n / 2); ++i) {
    for (let j = 0; j < Math.floor((n + 1) / 2); ++j) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[n - j - 1][i];
      matrix[n - j - 1][i] = matrix[n - i - 1][n - j - 1];
      matrix[n - i - 1][n - j - 1] = matrix[j][n - i - 1];
      matrix[j][n - i - 1] = temp;
    }
  }
};
// @lc code=end
