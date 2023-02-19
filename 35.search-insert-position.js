/*
 * @lc app=leetcode id=35 lang=javascript
 *
 * [35] Search Insert Position
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// Always think of the situation where there's only 2 elements left
var searchInsert = function (nums, target) {
  let start = 0;
  let end = nums.length;
  while (start < end) {
    const mid = Math.floor((start + end) / 2);
    if (target === nums[mid]) {
      start = mid;
      break;
    } else if (target > nums[mid]) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }

  return start;
};
console.log(searchInsert([1, 3, 5, 6], 7));

module.exports = searchInsert;
// @lc code=end
