/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  let node = head;
  let prev = null;
  while (node) {
    if (node.val === val) {
      if (prev) {
        prev.next = node.next
      } else {
        head = node.next
      }
    } else {
      prev = node
    }
    node = node.next
  }
  return head;
};

/**
 * Remove Linked List Elements
 * Remove all elements from a linked list of integers that have value val.
 * 
 * Example:
 * Input:  1->2->6->3->4->5->6, val = 6
 * Output: 1->2->3->4->5
 * 
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
