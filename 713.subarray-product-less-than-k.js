/*
 * @lc app=leetcode id=713 lang=javascript
 *
 * [713] Subarray Product Less Than K
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
  if (k <= 1) {
    return 0;
  }
  let ans = 0,
    prod = 1,
    left = 0;
  for (let right = 0; right < nums.length; right++) {
    prod *= nums[right];
    while (prod >= k) {
      // 不满足要求
      prod /= nums[left++];
    }
    // 这个计算方法是在计算右端点为 0,1,2,…,n−1 的子数组分别有多少个，每次 ans += right - left + 1 算的是右端点恰好等于 right 的子数组个数，这样可以不重不漏地统计。
    ans += right - left + 1;
  }
  return ans;
};
// @lc code=end
