/*
 * @lc app=leetcode id=5 lang=javascript
 *
 * [5] Longest Palindromic Substring
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  const len = s.length;
  let arr = Array.from({ length: len }, () => Array(len).fill(0));
  let res = "";
  for (let i = len - 1; i >= 0; i--) {
    for (let j = i; j < len; j++) {
      if (j - i <= 1) {
        arr[i][j] = s[i] === s[j];
      } else {
        arr[i][j] = s[i] === s[j] && arr[i + 1][j - 1];
      }
      if (arr[i][j] && j - i + 1 > res.length) {
        // 更新最长回文子串
        res = s.slice(i, j + 1);
      }
    }
  }
  return res;
};
// @lc code=end
