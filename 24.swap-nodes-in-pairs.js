/*
 * @lc app=leetcode id=24 lang=javascript
 *
 * [24] Swap Nodes in Pairs
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 暴力解法，交换相邻两个节点的值
var swapPairs = function (head) {
  const res = head;
  while (head && head.next) {
    const temp = head.val;
    head.val = head.next.val;
    head.next.val = temp;
    head = head.next.next;
  }
  return res;
};
// 更符合交换节点的要求，上面只是交换了节点的值
var swapPairs = function (head) {
  const dummyHead = new ListNode(0);
  dummyHead.next = head;
  let temp = dummyHead;
  while (temp.next !== null && temp.next.next !== null) {
    const node1 = temp.next;
    const node2 = temp.next.next;
    temp.next = node2;
    node1.next = node2.next;
    node2.next = node1;
    temp = node1;
  }
  return dummyHead.next;
};
// 递归法
var swapPairs = function (head) {
  if (head === null || head.next === null) {
    return head;
  }
  // 交换后的头节点
  const newHead = head.next;
  // 旧的头节点交换后指向第三个节点，为什么第三个节点是swapPairs(newHead.next)呢，因为newHead.next是第三个节点，swapPairs(newHead.next)的返回值是第三个节点交换后的头节点
  head.next = swapPairs(newHead.next);
  // 新的头节点指向旧的头节点
  newHead.next = head;
  // 返回新的头节点
  return newHead;
};
// @lc code=end
