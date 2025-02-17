/*
 * @lc app=leetcode id=19 lang=javascript
 *
 * [19] Remove Nth Node From End of List
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
 * @param {number} n
 * @return {ListNode}
 */
// 递归
var removeNthFromEnd = function (head, n) {
  let dummy = new ListNode(0, head);

  function remove(node) {
    if (!node) return 0;
    let count = remove(node.next) + 1;
    if (count === n + 1) {
      node.next = node.next.next;
    }
    return count;
  }

  remove(dummy);
  return dummy.next;
};

// 双指针法，快指针比慢指针快 n 个节点，当快指针到达末尾时，慢指针的下一个节点就是要删除的节点
function removeNthFromEnd(head, n) {
  // 创建哑节点，用于处理边界情况（例如删除头节点）
  const dummy = new ListNode(0, head);
  const stack = [];
  let cur = dummy;

  // 将所有节点压入栈中
  while (cur !== null) {
    stack.push(cur);
    cur = cur.next;
  }

  // 弹出 n 个节点，找到待删除节点的前一个节点
  for (let i = 0; i < n; i++) {
    stack.pop();
  }

  // 栈顶就是待删除节点的前一个节点
  const prev = stack[stack.length - 1];
  prev.next = prev.next.next;

  // 返回删除节点后的链表
  return dummy.next;
}

// 方法三 先反转链表，然后删除第 n 个节点，再反转回去
// @lc code=end
