/*
 * @lc app=leetcode id=169 lang=javascript
 *
 * [169] Majority Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let votes = 0,
    candidate = null;

  for (let num of nums) {
    if (votes === 0) {
      candidate = num;
    }
    votes += num === candidate ? 1 : -1;
  }

  return candidate;
};
// @lc code=end
