var flatten = function(head) {
  let node = head;
  while(node) {
    if (node.child) {
      let temp = node.next;
      node.next = flatten(node.child)
      node.next.prev = node;
      node.child = null;
      while(node.next) node = node.next
      node.next = temp;
      if (temp) temp.prev = node;
    }
    node = node.next;
  }
  return head;  
};

/**
 * Flatten a Multilevel Doubly Linked List
 * 
 * You are given a doubly linked list which in addition to the next and previous pointers, it could have a child pointer, which may or may not point to a 
 * separate doubly linked list. These child lists may have one or more children of their own, and so on, to produce a multilevel data structure, as shown 
 * in the example below.
 * 
 * Flatten the list so that all the nodes appear in a single-level, doubly linked list. You are given the head of the first level of the list.
 * 
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
