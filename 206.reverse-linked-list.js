/*
 * @lc app=leetcode id=206 lang=javascript
 *
 * [206] Reverse Linked List
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
var reverseList = function (head) {
  // 链表的前和后都有”空“的存在，而尾节点更是指向”空“ 然后，记得要有3个指针，prev，curr，next，它们组成一个前中后关系;
  // 一个一个转，修改next
  let prev = null,
    curr = head;
  while (curr) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
};

var reverseList = function (head) {
  // 只有最后一个节点或者没有节点，直接返回，所以后续传递的newHead一直是最后一个节点，代代相传
  if (head == null || head.next == null) {
    return head;
  }
  const newHead = reverseList(head.next);
  // 回溯过程，逐个反转和下一个node的连接
  head.next.next = head;
  // 断开原来的连接
  head.next = null;
  return newHead;
};
// @lc code=end

// 使用栈 但是ListNode要自己构造
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

var reverseList = function (head) {
  let array = new Array();
  let temp = new ListNode();
  let res = temp;
  while (head !== null) {
    array.push(head);
    head = head.next;
  }
  while (array.length !== 0) {
    temp.next = array.pop();
    temp = temp.next;
  }
  temp.next = null;
  return res.next;
};
