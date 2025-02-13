/*
 * @lc app=leetcode id=11 lang=javascript
 *
 * [11] Container With Most Water
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  // 左右向中间靠，每次移动较小的那个指针
  let left = 0,
    right = height.length - 1;
  let cap = 0;
  let ans = 0;
  while (left < right) {
    cap = (right - left) * Math.min(height[left], height[right]);
    ans = Math.max(cap, ans);
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return ans;
};
// @lc code=end
