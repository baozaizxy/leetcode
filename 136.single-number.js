/*
 * @lc app=leetcode id=136 lang=javascript
 *
 * [136] Single Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let single = 0;
  for (let num of nums) {
    single ^= num; // 利用异或运算找出唯一的数字
  }
  return single;
};
// @lc code=end
