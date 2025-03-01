/*
 * @lc app=leetcode id=739 lang=javascript
 *
 * [739] Daily Temperatures
 */

// @lc code=start
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  let peak = [];
  const len = temperatures.length;
  let ans = Array(len).fill(0);
  for (let i = len - 1; i >= 0; i--) {
    while (
      peak.length &&
      temperatures[peak[peak.length - 1]] <= temperatures[i]
    ) {
      peak.pop();
    }
    if (peak.length) {
      ans[i] = peak[peak.length - 1] - i;
    }
    peak.push(i);
  }
  return ans;
};
// @lc code=end
