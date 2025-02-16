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

var detectCycle = function (head) {
  // 环形链表结论：快慢指针相遇发生在慢指针没走完一圈的时候
  // 慢指针从相遇点走的时候，head也从头移动，他们一定在环入口相遇
  if (head === null) {
    return null;
  }
  let slow = head,
    fast = head;
  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow == fast) {
      while (head !== slow) {
        head = head.next;
        slow = slow.next;
      }
      return head;
    }
  }
  return null;
};
// @lc code=end
