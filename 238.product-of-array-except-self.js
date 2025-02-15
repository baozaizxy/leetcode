/*
 * @lc app=leetcode id=238 lang=javascript
 *
 * [238] Product of Array Except Self
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  // 时间复杂度限制O(n)  不能使用双层for循环 则使用双指针，两次遍历O(n)，时间复杂度仍然是O(n)
  // 利用先赋值，再累计的方式，将“num[i]”数据除去
  const len = nums.length;
  let answer = new Array(len).fill(1);
  let left = 1,
    right = 1;
  for (let i = 0; i < len; i++) {
    answer[i] = left;
    left *= nums[i];
  }
  for (let i = len - 1; i >= 0; i--) {
    answer[i] *= right;
    right *= nums[i];
  }
  return answer;
};
// @lc code=end
