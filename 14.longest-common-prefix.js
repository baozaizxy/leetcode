/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let tire = [];
  const len = strs.reduce((res, cur) => Math.min(res, cur.length), Infinity);
  for (let i = 0; i < len; i++) {
    tire.push(strs[0][i]);
    for (let str of strs) {
      if (tire[i] != str[i]) {
        if (tire.length - 1) {
          return tire.slice(0, tire.length - 1).join("");
        } else {
          return "";
        }
      }
    }
  }
  return tire.join("");
};
// @lc code=end
