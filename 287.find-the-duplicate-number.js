/*
 * @lc app=leetcode id=287 lang=javascript
 *
 * [287] Find the Duplicate Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  let slow = 0,
    fast = 0;

  // 阶段 1：快慢指针寻找相遇点
  while (true) {
    slow = nums[slow]; // 慢指针走一步
    fast = nums[nums[fast]]; // 快指针走两步
    if (slow === fast) break;
  }

  // 阶段 2：寻找环的入口（即重复的数）
  let finder = 0;
  while (true) {
    slow = nums[slow]; // 慢指针走一步
    finder = nums[finder]; // finder 走一步
    if (slow === finder) break;
  }

  return slow; // 返回重复的数
};
// @lc code=end
