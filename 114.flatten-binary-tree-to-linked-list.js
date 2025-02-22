/*
 * @lc app=leetcode id=114 lang=javascript
 *
 * [114] Flatten Binary Tree to Linked List
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
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
// 头插法，先把head赋给node.right,再把目前的ndoe赋为head，不断更新head
var flatten = function (root) {
  let head = null;
  const dfs = (node) => {
    if (!node) {
      return null;
    }
    // 先遍历右子树，再遍历左子树，最后是根节点
    dfs(node.right);
    dfs(node.left);
    node.left = null;
    node.right = head;
    head = node;
  };
  dfs(root);
};

// 迭代法
var flatten = function (root) {
  const interversal = (node) => {
    let stack = [];
    let res = [];
    while (stack.length || node) {
      while (node) {
        stack.push(node);
        res.push(node);
        node = node.left;
      }
      node = stack.pop();
      node = node.right;
    }
    return res;
  };

  const res = interversal(root);

  let curr = root;

  for (let i = 1; i < res.length; i++) {
    const prev = res[i - 1],
      curr = res[i];
    prev.left = null;
    prev.right = curr;
  }
};
// @lc code=end
