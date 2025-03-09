/*
 * @lc app=leetcode id=31 lang=javascript
 *
 * [31] Next Permutation
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  if (nums.length <= 1) return;

  let i = nums.length - 2,
    j = nums.length - 1,
    k = nums.length - 1;

  // 找到第一对 nums[i] < nums[j]（从右向左）即找到拐弯的点
  while (i >= 0 && nums[i] >= nums[j]) {
    i--;
    j--;
  }

  if (i >= 0) {
    // 不是最后一个排列
    // 找到 第一个 nums[k] > nums[i] 的元素，诉求是新的i要比现在的大，但同时要尽可能小
    while (nums[i] >= nums[k]) {
      k--;
    }
    // 交换 nums[i] 和 nums[k]
    [nums[i], nums[k]] = [nums[k], nums[i]];
  }

  // 反转 nums[j:end]，使其变为升序
  let left = j,
    right = nums.length - 1;
  while (left < right) {
    [nums[left], nums[right]] = [nums[right], nums[left]];
    left++;
    right--;
  }
};
// @lc code=end
