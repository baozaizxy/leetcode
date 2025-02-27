/*
 * @lc app=leetcode id=207 lang=javascript
 *
 * [207] Course Schedule
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  const g = Array.from({ length: numCourses }, () => []);
  let colors = new Array(numCourses);
  colors.fill(0);

  // 把每个 prerequisites[i]=[a,b] 看成一条有向边 b→a，构建一个有向图 g。
  for (const [a, b] of prerequisites) {
    g[b].push(a);
  }
  function dfs(x) {
    colors[x] = 1;
    for (const y of g[x]) {
      if (colors[y] === 1 || (colors[y] === 0 && dfs(y))) {
        return true; // 找到了环
      }
    }
    colors[x] = 2;
    return false;
  }
  for (let i = 0; i < numCourses; i++) {
    if (colors[i] === 0 && dfs(i)) {
      return false; // 有环
    }
  }
  // 没环
  return true;
};
// @lc code=end
