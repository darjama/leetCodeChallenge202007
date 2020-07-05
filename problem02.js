var levelOrderBottom = function(root) {
    if (!root) return [];
    let nodes = [root];
    const result = [[root.val]];
    while (nodes.length) {
        const newNodes = [];
        const newVals = []
        for (let node of nodes) {
            if (node.left) {
                newVals.push(node.left.val);
                newNodes.push(node.left);
            }
            if (node.right) { 
                newVals.push(node.right.val);
                newNodes.push(node.right);
            }
        }
        nodes = newNodes;
        if (newVals.length) result.unshift(newVals);
    }
    return result;
};

/**
 * Binary Tree Level Order Traversal II
 * 
 * Given a binary tree, return the bottom-up level order traversal of its nodes' values. (ie, from left to right, level by level from leaf to root).
 * 
 * For example:
 * Given binary tree [3,9,20,null,null,15,7],
 *     3
 *    / \
 *   9  20
 *     /  \
 *    15   7
 * return its bottom-up level order traversal as:
 * [
 *   [15,7],
 *   [9,20],
 *   [3]
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
