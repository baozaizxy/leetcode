/*
 * @lc app=leetcode id=56 lang=javascript
 *
 * [56] Merge Intervals
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  if (intervals.length === 0) {
    return [];
  }
  intervals.sort((a, b) => a[0] - b[0]);

  let merge = [];
  let len = intervals.length;
  for (let i = 0; i < len; i++) {
    let L = intervals[i][0],
      R = intervals[i][1];
    if (merge.length === 0 || L > merge[merge.length - 1][1]) {
      merge.push(intervals[i]);
    } else {
      merge[merge.length - 1][1] = Math.max(merge[merge.length - 1][1], R);
    }
  }
  return merge;
};
// @lc code=end
