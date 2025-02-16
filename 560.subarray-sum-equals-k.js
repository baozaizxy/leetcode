/*
 * @lc app=leetcode id=560 lang=javascript
 *
 * [560] Subarray Sum Equals K
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// 错误解法
// 滑动窗口一般仅适用于数组中元素为正数的情况
// var subarraySum = function(nums, k) {
//     if(nums.length === 0){
//         return 0;
//     }
//     const len = nums.length;
//     let res = 0;
//     let temp = nums[0];
//     for(let left = 0, right = 0; right < len; left++){
//         while(temp < k){
//             right++;
//             temp += nums[right];
//         }
//         if(temp == k){
//             res++;
//             temp -= nums[left];
//         }
//         if(temp > k){
//             temp -= nums[left];
//         }
//     }
//     return res;
// };

// 前缀和 + 哈希表
var subarraySum = function (nums, k) {
  let count = 0;
  let prefixSum = 0;
  const map = new Map();

  // 初始前缀和 0 出现一次
  map.set(0, 1);

  for (let num of nums) {
    prefixSum += num;

    if (map.has(prefixSum - k)) {
      count += map.get(prefixSum - k);
    }

    map.set(prefixSum, (map.get(prefixSum) || 0) + 1);
  }

  return count;
};
// @lc code=end
