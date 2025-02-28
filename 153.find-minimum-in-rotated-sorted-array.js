/*
 * @lc app=leetcode id=153 lang=javascript
 *
 * [153] Find Minimum in Rotated Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  // 和最后一个数比大小
  // 比最后一个数大：一定为红色
  // 比最后一个数小，一定为蓝色，将蓝色位置不断向左逼近直至红蓝中间没有空间
  let left = -1,
    right = nums.length - 1;
  while (left + 1 < right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] < nums[nums.length - 1]) {
      right = mid;
    } else {
      left = mid;
    }
  }
  return nums[right];
};
// @lc code=end
