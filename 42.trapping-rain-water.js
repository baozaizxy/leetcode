/*
 * @lc app=leetcode id=42 lang=javascript
 *
 * [42] Trapping Rain Water
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  // 横着算
  let ans = 0;
  const st = [];
  for (let i = 0; i < height.length; i++) {
    while (st.length && height[i] >= height[st[st.length - 1]]) {
      const bottomH = height[st.pop()];
      if (st.length === 0) {
        break;
      }
      const left = st[st.length - 1];
      const dh = Math.min(height[left], height[i]) - bottomH; // 面积的高
      ans += dh * (i - left - 1);
    }
    st.push(i);
  }
  return ans;
};
// @lc code=end
