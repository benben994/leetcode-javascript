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
  return nums1.filter((num) => nums2.includes(num)).filter((num, i, self) => self.indexOf(num) === i);
};

module.exports = intersection;
// @lc code=end
