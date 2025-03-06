/*
 * @lc app=leetcode id=72 lang=javascript
 *
 * [72] Edit Distance
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  const m = word1.length;
  const n = word2.length;
  let arr = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

  for (let i = 0; i <= m; i++) {
    arr[i][0] = i; // 从 word1 的前 i 个字符到空字符串的编辑距离
  }
  for (let j = 0; j <= n; j++) {
    arr[0][j] = j; // 从空字符串到 word2 的前 j 个字符的编辑距离
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        arr[i][j] = arr[i - 1][j - 1];
      } else {
        arr[i][j] =
          Math.min(arr[i - 1][j], arr[i][j - 1], arr[i - 1][j - 1]) + 1;
      }
    }
  }
  return arr[m][n];
};
// @lc code=end
