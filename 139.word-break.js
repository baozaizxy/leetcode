/*
 * @lc app=leetcode id=139 lang=javascript
 *
 * [139] Word Break
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  const maxLen = Math.max(...wordDict.map((word) => word.length));
  const words = new Set(wordDict);
  const memo = Array(s.length + 1);

  const dfs = (i) => {
    if (i === s.length) {
      return true;
    }
    if (memo[i] !== undefined) {
      // 之前计算过
      return memo[i];
    }

    for (let j = i + 1; j <= Math.min(i + maxLen, s.length); j++) {
      if (words.has(s.slice(i, j)) && dfs(j)) {
        memo[i] = true;
        return true;
      }
      memo[i] = false;
    }
    return false;
  };

  return dfs(0);
};
// @lc code=end
