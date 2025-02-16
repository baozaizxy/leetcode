/*
 * @lc app=leetcode id=234 lang=javascript
 *
 * [234] Palindrome Linked List
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
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let array = new Array();
  let curr = head;
  while (curr) {
    array.push(curr);
    curr = curr.next;
  }
  while (array.length > 0) {
    const rev = array.pop();
    if (rev.val !== head.val) {
      return false;
    }
    head = head.next;
  }
  return true;
};

// 递归解法
let front;
const recursivelyCheck = (curr) => {
  if (curr !== null) {
    if (!recursivelyCheck(curr.next)) {
      return false;
    }
    if (front.val !== curr.val) {
      return false;
    }
    front = front.next;
  }
  return true;
};

var isPalindrome = function (head) {
  front = head;
  return recursivelyCheck(head);
};
// @lc code=end
