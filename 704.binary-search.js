/*
 * @lc app=leetcode id=704 lang=javascript
 *
 * [704] Binary Search
 */

// @lc code=lo
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let lo = 0;
  let hi = nums.length - 1;

  while (lo < hi) {
    const mid = lo + Math.floor((hi - lo) / 2);
    if (nums[mid] === target) return mid;

    if (target > nums[mid]) {
      lo = mid + 1;
    } else {
      hi = mid;
    }
  }

  return nums[lo] == target ? lo : -1;
};

module.exports = search;
// @lc code=hi
