/*
 * @lc app=leetcode id=55 lang=javascript
 *
 * [55] Jump Game
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let cover = nums[0];
  const len = nums.length;
  if (!len) {
    return true;
  }
  for (let i = 0; i < cover; i++) {
    cover = Math.max(cover, i + nums[i]);
    if (cover >= len - 1) {
      return true;
    }
  }
  return false;
};

var canJump = function (nums) {
  let cover = nums[0];
  const len = nums.length;
  if (!len) {
    return true;
  }
  for (let i = 0; i < len; i++) {
    if (i > cover) {
      return false;
    }
    cover = Math.max(cover, i + nums[i]);
  }
  return true;
};
// @lc code=end
