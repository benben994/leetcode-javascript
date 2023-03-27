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
  const run = (fast, slow) => {
    if (!fast || !fast.next) return false;
    if (fast.next === slow) return true;

    return run(fast.next.next, slow.next);
  };

  return run(head, head);
};
// @lc code=end
