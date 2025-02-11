/*
 * @lc app=leetcode id=283 lang=javascript
 *
 * [283] Move Zeroes
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  // 双指针问题，快指针i校验是否为0，慢指针cur记存储位置
  let cur = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      nums[cur] = nums[i];
      cur++;
    }
  }
  for (let i = cur; i < nums.length; i++) {
    nums[i] = 0;
  }
};
// @lc code=end
