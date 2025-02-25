/*
 * @lc app=leetcode id=200 lang=javascript
 *
 * [200] Number of Islands
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  const m = grid.length,
    n = grid[0].length;
  function dfs(i, j) {
    // 出界，或者不是 '1'，就不再往下递归
    if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] !== "1") {
      return;
    }
    grid[i][j] = "2"; // 插旗！避免来回横跳无限递归
    dfs(i, j - 1); // 往左走
    dfs(i, j + 1); // 往右走
    dfs(i - 1, j); // 往上走
    dfs(i + 1, j); // 往下走
  }

  let ans = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === "1") {
        // 找到了一个新的岛
        dfs(i, j); // 把这个岛插满旗子，这样后面遍历到的 '1' 一定是新的岛
        ans++;
      }
    }
  }
  return ans;
};
// @lc code=end
