/*
 * @lc app=leetcode id=110 lang=javascript
 *
 * [110] Balanced Binary Tree
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
 * @return {boolean}
 */
var isBalanced = function (root) {
  if (!root) return true;

  let result = true;
  const height = (node) => {
    if (!node) return 0;

    let leftHeight = 1 + height(node.left);
    let rightHeight = 1 + height(node.right);
    if (Math.abs(leftHeight - rightHeight) > 1) {
      result = false;
    }

    return Math.max(leftHeight, rightHeight);
  };
  height(root);

  return result;
};
// @lc code=end
