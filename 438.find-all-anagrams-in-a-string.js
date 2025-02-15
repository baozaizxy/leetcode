/*
 * @lc app=leetcode id=438 lang=javascript
 *
 * [438] Find All Anagrams in a String
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  /* •	slice(i, i + pl) 需要 O(pl) 时间
	•	sort() 需要 O(pl log pl) 时间
	•	join('') 需要 O(pl) 时间 */
  const pl = p.length;
  const sortedP = [...p].sort().join("");
  const sArray = [...s];
  let ans = [];
  for (let i = 0; i <= sArray.length - pl; i++) {
    fragment = sArray
      .slice(i, i + pl)
      .sort()
      .join("");
    if (fragment == sortedP) {
      ans.push(i);
    }
  }
  return ans;
};
// @lc code=end
