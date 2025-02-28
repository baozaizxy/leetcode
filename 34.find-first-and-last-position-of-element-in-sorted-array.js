/*
 * @lc app=leetcode id=34 lang=javascript
 *
 * [34] Find First and Last Position of Element in Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  const len = nums.length;
  const low_ground = function (nums, target) {
    let left = 0,
      right = len - 1;
    while (left <= right) {
      // 区间不为空
      const mid = Math.floor((left + right) / 2);
      if (nums[mid] >= target) {
        right = mid - 1; // 范围缩小到 [left, mid-1]
      } else {
        left = mid + 1; // 范围缩小到 [mid+1, right]
      }
    }
    return left;
  };
  const left = low_ground(nums, target);
  if (left === len || nums[left] !== target) {
    return [-1, -1];
  }
  const right = low_ground(nums, target + 1) - 1;
  return [left, right];
};
// @lc code=end
