/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var widthOfBinaryTree = function(root) {
  if (!root) return 0;
  let result = 1;
  let current = [root]
  while (current.length > 0) {
    let next = [];
    let startNonNull = false;
    for (let node of current) {
      if (!node) {
        if (!startNonNull) continue;
        next.push(null);
        next.push(null);
        continue;
      };
      [node.left, node.right].forEach(a => {
        if (startNonNull) {
          next.push(a)
        } else if (a) { 
          startNonNull = true;
          next.push(a)
        }
      })
    }
    while (next[next.length - 1] === null) next.pop();
    result = Math.max(result, next.length);
    current = next;
    next = []
  }
  return result;  
};
