/*
 * @lc app=leetcode id=88 lang=javascript
 *
 * [88] Merge Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  for (let i = m - 1, j = n - 1, insertIndex = m + n - 1; insertIndex >= 0; insertIndex -= 1) {
    const num1 = nums1[i];
    const num2 = nums2[j];

    if (i < 0 || num2 > num1) {
      nums1[insertIndex] = num2;
      j -= 1;
    } else {
      nums1[insertIndex] = num1;
      i -= 1;
    }
  }

  return nums1;
};

module.exports = merge;
// @lc code=end
