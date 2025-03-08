/*
 * @lc app=leetcode id=75 lang=javascript
 *
 * [75] Sort Colors
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let zero = 0,
    two = nums.length,
    i = 0;

  while (i < two) {
    if (nums[i] === 0) {
      [nums[i], nums[zero]] = [nums[zero], nums[i]]; // 交换 0 到 zero 位置
      zero++;
      i++;
    } else if (nums[i] === 1) {
      i++;
    } else {
      // nums[i] === 2
      two--;
      [nums[i], nums[two]] = [nums[two], nums[i]]; // 交换 2 到 two 位置
    }
  }
};
// @lc code=end
