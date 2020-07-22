var zigzagLevelOrder = function(root) {
  if (!root) return [];
  let queue = [root]
  let goLTR = true;
  const result = []
  while (queue.length) {
    const newQueue = [];
    result.push([])
    for (let x of queue) {
      if(goLTR) {
        result[result.length-1].push(x.val);
      } else {
        result[result.length-1].unshift(x.val);
      }
      ([x.left, x.right]).forEach(a => {
        if (!!a) newQueue.push(a);
      }) 
    }
    queue = newQueue;
    goLTR = !goLTR;
  }
  return result;
};

/**
 * Binary Tree Zigzag Level Order Traversal
 * 
 * Given a binary tree, return the zigzag level order traversal of its nodes' values. (ie, from left to right, then right to left for the next 
 * level and alternate between).
 * 
 * For example:
 * Given binary tree [3,9,20,null,null,15,7],
 *     3
 *    / \
 *   9  20
 *     /  \
 *    15   7
 * return its zigzag level order traversal as:
 * [
 *   [3],
 *   [20,9],
 *   [15,7]
 * ]
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
