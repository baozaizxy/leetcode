/*
 * @lc app=leetcode id=108 lang=javascript
 *
 * [108] Convert Sorted Array to Binary Search Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  const rebuild = (nums, left, right) => {
    // 终止条件 right为mid减一,会向left趋近 或者 left为mid+1，会向right趋近
    if (left > right) {
      return null;
    }
    let mid = Math.floor((left + right) / 2);
    let root = new TreeNode(
      nums[mid],
      rebuild(nums, left, mid - 1),
      rebuild(nums, mid + 1, right)
    );

    return root;
  };

  return rebuild(nums, 0, nums.length - 1);
};
// @lc code=end
