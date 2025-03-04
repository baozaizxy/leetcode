/*
 * @lc app=leetcode id=322 lang=javascript
 *
 * [322] Coin Change
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  const len = coins.length;
  const inf = Infinity;
  let arr = Array.from({ length: len + 1 }, () => Array(amount + 1).fill(inf));
  arr[0][0] = 0;

  for (let i = 0; i < len; i++) {
    for (let j = 0; j <= amount; j++) {
      if (j < coins[i]) {
        arr[i + 1][j] = arr[i][j];
      } else {
        arr[i + 1][j] = Math.min(arr[i][j], arr[i + 1][j - coins[i]] + 1);
      }
    }
  }

  if (arr[len][amount] < inf) {
    return arr[len][amount];
  }
  return -1;
};
// @lc code=end
