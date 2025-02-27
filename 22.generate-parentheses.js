/*
 * @lc app=leetcode id=22 lang=javascript
 *
 * [22] Generate Parentheses
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let res = [];
  let path = [];
  let left = 0;
  let right = 0;
  const dfs = function () {
    // 如果生成了 2n 个括号，说明已经是一种合法的组合
    if (path.length === 2 * n) {
      res.push(path.join("")); // 将当前组合加入结果
      return;
    }
    // 如果左括号数量小于 n，可以继续添加左括号
    if (left < n) {
      path.push("(");
      left++;
      dfs();
      path.pop(); // 回溯，撤销当前的选择
      left--; // 更新左括号计数
    }
    // 如果右括号数量小于左括号数量，可以继续添加右括号
    if (right < left) {
      path.push(")");
      right++;
      dfs();
      path.pop(); // 回溯，撤销当前的选择
      right--; // 更新右括号计数
    }
  };
  dfs(); // 启动递归
  return res; // 返回所有合法的括号组合
};
// @lc code=end
