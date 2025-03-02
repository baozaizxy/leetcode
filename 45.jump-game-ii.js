/*
 * @lc app=leetcode id=45 lang=javascript
 *
 * [45] Jump Game II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  const len = nums.length;
  let count = 1;
  let cover = nums[0];
  let temp = 0;
  if (len <= 1) {
    return 0;
  }

  for (let i = 0; i <= cover; i++) {
    temp = Math.max(temp, i + nums[i]);
    if (i == cover) {
      if (cover < len - 1) {
        count++;
        cover = temp;
      }
      if (cover >= len - 1) {
        return count;
      }
    }
  }
  return count;
};
// @lc code=end
