/*
 * @lc app=leetcode id=209 lang=javascript
 *
 * [209] Minimum Size Subarray Sum
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
// 滑动窗口
var minSubArrayLen = function (target, nums) {
  const len = nums.length;
  let res = len + 1;
  let sum = 0;
  let left = 0;
  for (let right = 0; right < len; right++) {
    sum += nums[right];
    if (sum >= target) {
      while (sum - nums[left] >= target) {
        sum -= nums[left];
        left++;
      }
      if (sum >= target) {
        res = Math.min(res, right - left + 1);
      }
    }
  }
  return res > len ? 0 : res;
};
// @lc code=end
