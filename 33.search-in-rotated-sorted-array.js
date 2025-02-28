/*
 * @lc app=leetcode id=33 lang=javascript
 *
 * [33] Search in Rotated Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  const len = nums.length;
  // 查找确认blue是target及更右，blue不断向左逼近
  const isBlue = function (mid) {
    if (nums[mid] > nums[len - 1]) {
      return target > nums[len - 1] && nums[mid] >= target;
    } else {
      return target > nums[len - 1] || nums[mid] >= target;
    }
  };
  let left = -1,
    right = len;
  while (left + 1 < right) {
    let mid = Math.floor((left + right) / 2);
    if (isBlue(mid)) {
      right = mid;
    } else {
      left = mid;
    }
  }

  if (nums[right] !== target) {
    return -1;
  }
  return right;
};
// @lc code=end
