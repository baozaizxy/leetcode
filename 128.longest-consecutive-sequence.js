/*
 * @lc app=leetcode id=128 lang=javascript
 *
 * [128] Longest Consecutive Sequence
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

var longestConsecutive = function (nums) {
  // 暴力拆解
  if (nums.length === 0) return 0;

  let len = 1;
  let cur = 1;
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) continue;

    if (nums[i] + 1 === nums[i + 1]) {
      cur++;
    } else {
      len = Math.max(len, cur);
      cur = 1;
    }
  }

  return Math.max(len, cur); // 最后需要比较一次，防止结束时连续序列是最长的
};

var longestConsecutive = function (nums) {
  // 这道题中之所以时间复杂度是O(n)，但代码中看上去像是O(n2)，因为我们一眼看上去是一个for循环中嵌套了一个while循环，但是要注意这里的判断条件，当这个值是初始值的时候再进行while计算，也就是说虽然在for循环中取出每一个值，但只要在满足条件时才进行while，那些不满足的直接跳过，于是每一个元素实际上只需要访问一次，而总共有n个元素，所以最后的时间复杂度还是O(n)。
  let num_set = new Set();
  // O(n)
  for (const num of nums) {
    num_set.add(num);
  }

  let longestStreak = 0;
  // O(n)
  for (const num of num_set) {
    // 作为起始值才进入while循环 所以每个数字只会进入一次while循环 所以在for循环内部的时间复杂度是O(1)
    if (!num_set.has(num - 1)) {
      let currentNum = num;
      let currentStreak = 1;

      while (num_set.has(currentNum + 1)) {
        currentNum += 1;
        currentStreak += 1;
      }

      longestStreak = Math.max(longestStreak, currentStreak);
    }
  }

  return longestStreak;
};
// @lc code=end
