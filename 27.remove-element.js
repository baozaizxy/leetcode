/*
 * @lc app=leetcode id=27 lang=javascript
 *
 * [27] Remove Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let left = 0;
  const len = nums.length;
  for (let right = 0; right < len; right++) {
    if (nums[right] != val) {
      nums[left] = nums[right];
      left++;
    }
  }
  return left;
};
// @lc code=end
