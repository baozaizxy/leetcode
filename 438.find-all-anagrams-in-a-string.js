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

var findAnagrams = function (s, p) {
  // 相比于比较string是否一致，这里的算法是比较各个字母在窗口下出现的次数，次数一致则一定是字母异位词
  const sLen = s.length,
    pLen = p.length;

  if (sLen < pLen) {
    return [];
  }

  const ans = [];
  const sCount = new Array(26).fill(0);
  const pCount = new Array(26).fill(0);

  // 初始化窗口：统计 s 中前 pLen 个字符以及 p 中所有字符的频率
  for (let i = 0; i < pLen; ++i) {
    ++sCount[s[i].charCodeAt() - "a".charCodeAt()];
    ++pCount[p[i].charCodeAt() - "a".charCodeAt()];
  }

  // 如果初始窗口中的频率与 p 中的频率相等，则说明索引 0 是一个有效的起点
  if (sCount.toString() === pCount.toString()) {
    ans.push(0);
  }
  // 开始滑动窗口
  for (let i = 0; i < sLen - pLen; ++i) {
    --sCount[s[i].charCodeAt() - "a".charCodeAt()];
    ++sCount[s[i + pLen].charCodeAt() - "a".charCodeAt()];

    if (sCount.toString() === pCount.toString()) {
      ans.push(i + 1);
    }
  }

  return ans;
};
// @lc code=end
