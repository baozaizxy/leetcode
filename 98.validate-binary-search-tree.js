/*
 * @lc app=leetcode id=98 lang=javascript
 *
 * [98] Validate Binary Search Tree
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
 * @return {boolean}
 */
// 前序遍历
var isValidBST = function (root, left = -Infinity, right = Infinity) {
  if (!root) {
    return true;
  }
  const val = root.val;
  return (
    left < val &&
    val < right &&
    isValidBST(root.left, left, val) &&
    isValidBST(root.right, val, right)
  );
};
// 后序遍历
// 所谓左子树右子树都是相对的，在深度为3时是左子树可能在深度为2时就是右子树了，所以左右边界都很重要，要记录下目前为止当前节点所有节点的最大值和最小值
// 这里的递归函数返回的是当前子树的最小值和最大值
var isValidBST = function (root) {
  function dfs(node) {
    if (node == null) {
      return [Infinity, -Infinity];
    }
    const [lMin, lMax] = dfs(node.left);
    const [rMin, rMax] = dfs(node.right);
    const x = node.val;
    // 也可以在递归完左子树之后立刻判断，如果发现不是二叉搜索树，就不用递归右子树了
    if (x <= lMax || x >= rMin) {
      return [-Infinity, Infinity];
    }
    return [Math.min(lMin, x), Math.max(rMax, x)];
  }
  return dfs(root)[1] !== Infinity;
};
// @lc code=end
