/*
 * @lc app=leetcode id=349 lang=javascript
 *
 * [349] Intersection of Two Arrays
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  let results = [];
  for (let i = 0; i < nums1.length; i++) {
    const num1 = nums1[i];
    for (let j = 0; i < nums2.length; j++) {
      const num2 = nums2[j];
      if (num1 === num2) {
        results.push(num1);
      }
    }
  }
};

module.exports = intersection;
// @lc code=end
