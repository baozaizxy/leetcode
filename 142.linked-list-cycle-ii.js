/*
 * @lc app=leetcode id=142 lang=javascript
 *
 * [142] Linked List Cycle II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// hash表
var detectCycle = function (head) {
  let set = new Set();
  let n;
  if (head === null) {
    return null;
  }

  while (head !== null) {
    if (set.has(head)) {
      return head;
    }
    set.add(head);
    head = head.next;
  }
  return null;
};

var detectCycle = function (head) {};
// @lc code=end
