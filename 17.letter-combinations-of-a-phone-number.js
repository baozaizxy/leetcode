/*
 * @lc app=leetcode id=17 lang=javascript
 *
 * [17] Letter Combinations of a Phone Number
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const phoneMap = new Map([
    ["2", "abc"],
    ["3", "def"],
    ["4", "ghi"],
    ["5", "jkl"],
    ["6", "mno"],
    ["7", "pqrs"],
    ["8", "tuv"],
    ["9", "wxyz"],
  ]);
  if (!digits) {
    return [];
  }
  let digitsArray = Array.from(digits);
  let letters = [];

  for (let digit of digitsArray) {
    letters.push(phoneMap.get(digit));
  }

  const concatLetter = function (meta) {
    let prev = meta.shift().split("");
    while (meta.length) {
      let next = meta.shift().split("");
      let curr = [];
      for (let i = 0; i < prev.length; i++) {
        for (let j = 0; j < next.length; j++) {
          curr.push(prev[i].concat(next[j]));
        }
      }
      prev = [...curr];
    }
    return prev;
  };

  return concatLetter(letters);
};
// 回溯算法
var letterCombinations = function (digits) {
  // 只有固定的 2-9 键，不需要动态增删，所以用普通对象即可
  // 对象查找 O(1)，比 Map.get() 语法更简洁
  const phoneMap = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };
  if (!digits) {
    return [];
  }
  const res = [];
  const backTrack = function (curr, index) {
    if (index === digits.length) {
      res.push(curr);
      return;
    }
    letter = phoneMap[digits[index]];
    for (let char of letter) {
      backTrack(curr + char, index + 1);
    }
  };
  backTrack("", 0);
  return res;
};
// @lc code=end
