/*
 * @lc app=leetcode id=994 lang=javascript
 *
 * [994] Rotting Oranges
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  const m = grid.length,
    n = grid[0].length;
  let fresh = 0;
  let q = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        fresh++; // 统计新鲜橘子个数
      } else if (grid[i][j] === 2) {
        q.push([i, j]); // 一开始就腐烂的橘子
      }
    }
  }

  let ans = 0;
  while (fresh && q.length) {
    ans++; // 经过一分钟
    const tmp = q;
    q = [];
    for (const [x, y] of tmp) {
      // 已经腐烂的橘子
      for (const [i, j] of [
        [x - 1, y],
        [x + 1, y],
        [x, y - 1],
        [x, y + 1],
      ]) {
        // 四方向
        if (0 <= i && i < m && 0 <= j && j < n && grid[i][j] === 1) {
          // 新鲜橘子
          fresh--;
          grid[i][j] = 2; // 变成腐烂橘子
          q.push([i, j]);
        }
      }
    }
  }

  return fresh ? -1 : ans;
};
// @lc code=end
