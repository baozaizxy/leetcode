/*
 * @lc app=leetcode id=189 lang=javascript
 *
 * [189] Rotate Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var rotate = function (nums, k) {
//   // 最终位置 = (当前位置 + k) % 数组长度
//   const n = nums.length;
//   const newArr = new Array(n);
//   for (let i = 0; i < n; ++i) {
//     newArr[(i + k) % n] = nums[i];
//   }
//   for (let i = 0; i < n; ++i) {
//     nums[i] = newArr[i];
//   }

// };

const gcd = (x, y) => (y ? gcd(y, x % y) : x);

var rotate = function (nums, k) {
  const n = nums.length;
  k = k % n;
  let count = gcd(k, n);
  for (let start = 0; start < count; ++start) {
    let current = start;
    let prev = nums[start];
    do {
      const next = (current + k) % n;
      const temp = nums[next];
      nums[next] = prev;
      prev = temp;
      current = next;
    } while (start !== current);
  }
};
// @lc code=end
