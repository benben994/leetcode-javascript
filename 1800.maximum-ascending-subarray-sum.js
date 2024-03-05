/*
 * @lc app=leetcode id=1800 lang=javascript
 *
 * [1800] Maximum Ascending Subarray Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function (nums) {
  let max = 0;
  let cur = 0;

  for (let i = 0; i < nums.length; i += 1) {
    if (i === 0 || nums[i] > nums[i - 1]) {
      cur += nums[i];
    } else {
      cur = nums[i];
    }

    max = Math.max(max, cur);
  }

  return max;
};
// @lc code=end
