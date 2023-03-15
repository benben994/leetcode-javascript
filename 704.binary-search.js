/*
 * @lc app=leetcode id=704 lang=javascript
 *
 * [704] Binary Search
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let start = 0;
  let end = nums.length;

  while (start < end) {
    const mid = Math.floor((start + end) / 2);
    if (nums[mid] === target) return mid;
    if (mid === start) return -1;

    if (nums[mid] > target) {
      end = mid;
    } else {
      start = mid;
    }
  }

  return -1;
};

module.exports = search;
// @lc code=end
