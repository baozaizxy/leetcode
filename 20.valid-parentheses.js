/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let array = Array.from(s);
  let stack = [];
  if (array.length % 2 !== 0) {
    return false;
  }
  for (let char of array) {
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else {
      let x = stack.pop();
      if (
        !(
          (x === "(" && char === ")") ||
          (x === "{" && char === "}") ||
          (x === "[" && char === "]")
        )
      ) {
        return false;
      }
    }
  }
  if (stack.length) {
    return false;
  }
  return true;
};
// @lc code=end
