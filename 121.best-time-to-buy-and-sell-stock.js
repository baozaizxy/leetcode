/*
 * @lc app=leetcode id=121 lang=javascript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
// 贪心算法
var maxProfit = function (prices) {
  let ans = 0;
  let minPrice = prices[0];
  for (let price of prices) {
    ans = Math.max(ans, price - minPrice);
    minPrice = Math.min(price, minPrice);
  }
  return ans;
};
// @lc code=end
