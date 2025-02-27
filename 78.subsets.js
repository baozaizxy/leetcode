/*
 * @lc app=leetcode id=78 lang=javascript
 *
 * [78] Subsets
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 输入视角 选或者不选
var subsets = function (nums) {
  const n = nums.length;
  const ans = [];
  const path = [];
  function dfs(i) {
    if (i === n) {
      // 子集构造完毕
      ans.push(path.slice()); // 复制 path
      return;
    }

    // 不选 nums[i]
    dfs(i + 1);

    // 选 nums[i]
    path.push(nums[i]);
    dfs(i + 1);
    path.pop(); // 恢复现场
  }
  dfs(0);
  return ans;
};

// 站在答案的角度，每次都要枚举出一个新的数，从空开始，每个节点都算进res
var subsets = function (nums) {
  let res = [];
  if (!nums) {
    return [];
  }
  const len = nums.length;
  let path = [];
  const backTrack = (index) => {
    // 递归到的每个节点都是答案的一部分
    res.push([...path]);
    for (let i = index; i < len; i++) {
      path.push(nums[i]);
      backTrack(i + 1);
      // 恢复现场 回溯
      path.pop();
    }
  };
  backTrack(0);
  return res;
};
// @lc code=end
