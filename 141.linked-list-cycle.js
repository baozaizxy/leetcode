/*
 * @lc app=leetcode id=141 lang=javascript
 *
 * [141] Linked List Cycle
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
 * @return {boolean}
 */
var hasCycle = function (head) {
  // 哈希表法
  if (head == null) {
    return false;
  }
  let visited = new Set();
  let node = head;
  while (node != null) {
    if (visited.has(node)) {
      return true;
    }
    visited.add(node);
    node = node.next;
  }
  return false;
};

var hasCycle = function (head) {
  // 「Floyd 判圈算法」（又称龟兔赛跑算法）
  //  时间复杂度O(N)，空间复杂度O(1)
  //  当链表中存在环时，每一轮移动后，快慢指针的距离将减小一。而初始距离为环的长度，因此至多移动 N 轮。
  if (head == null) {
    return false;
  }
  let slow = head;
  let fast = head.next;
  while (slow != fast) {
    // 每轮兔子比乌龟快一步，假设圈内n个node,第n轮乌龟被兔子套圈相遇
    if (fast == null || fast.next == null) {
      return false;
    }
    slow = slow.next;
    fast = fast.next.next;
  }
  return true;
};
// @lc code=end
