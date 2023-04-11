/*
 * @lc app=leetcode id=543 lang=javascript
 *
 * [543] Diameter of Binary Tree
 */

// @lc code=start
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
var diameterOfBinaryTree = function (root) {
  let diameter = 0;
  const maxDepth = (root) => {
    if (!root) return 0;

    const leftMaxDepth = maxDepth(root.left);
    const rightMaxDepth = maxDepth(root.right);

    diameter = Math.max(diameter, leftMaxDepth + rightMaxDepth);

    return 1 + Math.max(leftMaxDepth, rightMaxDepth);
  };

  maxDepth(root);

  return diameter;
};
// @lc code=end
