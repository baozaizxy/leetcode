/*
 * @lc app=leetcode id=160 lang=javascript
 *
 * [160] Intersection of Two Linked Lists
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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  // 哈希表法 set存储独一无二的对象
  const visited = new Set();
  let temp = headA;
  while (temp != null) {
    visited.add(temp);
    temp = temp.next;
  }
  temp = headB;
  while (temp != null) {
    if (visited.has(temp)) {
      return temp;
    }
    temp = temp.next;
  }
  return null;
};

var getIntersectionNode = function (headA, headB) {
  // 双指针法 如果走到尽头也没有找到你都踪影，那么我就换另一条路从头寻找
  if (!headA || !headB) return null;

  let pA = headA;
  let pB = headB;

  while (pA != pB) {
    pA = pA ? pA.next : headB;
    pB = pB ? pB.next : headA;
  }

  return pA;
};
// @lc code=end
