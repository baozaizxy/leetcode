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
// 遍历每个点做为起始点的最大子串
var lengthOfLongestSubstring = function (s) {
  let set = new Set();
  const len = s.length;
  let right = -1,
    ans = 0;
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

// 找到第一个右端点，然后从此开始找以每个右端点稳定下左端点的位置
var lengthOfLongestSubstring = function (s) {
  let ans = 0;
  let left = 0;
  const window = new Set(); // 维护从下标 left 到下标 right 的字符
  for (let right = 0; right < s.length; right++) {
    const c = s[right];
    // 如果窗口内已经包含 c，那么再加入一个 c 会导致窗口内有重复元素
    // 所以要在加入 c 之前，先移出窗口内的 c
    while (window.has(c)) {
      // 窗口内有 c
      window.delete(s[left]);
      left++; // 缩小窗口
    }
    window.add(c); // 加入 c
    ans = Math.max(ans, right - left + 1); // 更新窗口长度最大值
  }
  return ans;
};
// @lc code=end
