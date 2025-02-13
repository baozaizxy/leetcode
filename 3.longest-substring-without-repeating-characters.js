/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let set = new Set();
  const len = s.length;
  let right = -1,
    ans = 0;
  // 窗口移动问题，i每增加一，都删掉一个左边过去的字符并探寻右边界，逐一比较
  for (let i = 0; i < len; i++) {
    if (i != 0) {
      set.delete(s.charAt(i - 1));
    }
    while (right + 1 < len && !set.has(s.charAt(right + 1))) {
      set.add(s.charAt(right + 1));
      right++;
    }
    ans = Math.max(ans, right - i + 1);
  }
  return ans;
};
// @lc code=end
