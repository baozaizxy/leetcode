/*
 * @lc app=leetcode id=162 lang=javascript
 *
 * [162] Find Peak Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  // 红色 峰顶左侧元素 蓝色 峰顶及峰顶右侧元素
  let left = 0,
    right = nums.length - 2;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] > nums[mid + 1]) {
      // right指针朝着离开正确区间的方向移动
      right = mid - 1;
    } else {
      // left朝着peak走去
      left = mid + 1;
    }
  }
  return left;
};
// @lc code=end
