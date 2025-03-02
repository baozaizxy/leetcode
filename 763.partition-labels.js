/*
 * @lc app=leetcode id=763 lang=javascript
 *
 * [763] Partition Labels
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
  let hash = new Array(26);
  const len = s.length;
  for (let i = 0; i < len; i++) {
    hash[s.charCodeAt(i) - "a".charCodeAt(0)] = i;
  }

  let ans = [];
  let start = 0,
    end = 0;
  for (let i = 0; i < len; i++) {
    end = Math.max(end, hash[s.charCodeAt(i) - "a".charCodeAt(0)]);
    if (i === end) {
      ans.push(end - start + 1);
      start = i + 1;
    }
  }
  return ans;
};
// @lc code=end
