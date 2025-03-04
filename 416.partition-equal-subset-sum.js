/*
 * @lc app=leetcode id=416 lang=javascript
 *
 * [416] Partition Equal Subset Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  let sum = nums.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
  if (sum % 2) {
    return false;
  }
  let target = sum / 2;
  let len = nums.length;
  let arr = Array.from({ length: len + 1 }, () =>
    Array(target + 1).fill(false)
  );
  arr[0][0] = true;
  for (let i = 1; i <= len; i++) {
    for (let j = 0; j <= target; j++) {
      if (nums[i - 1] > j) {
        arr[i][j] = arr[i - 1][j];
      } else {
        arr[i][j] = arr[i - 1][j] || arr[i - 1][j - nums[i - 1]];
      }
    }
  }
  return arr[len][target];
};
// @lc code=end
