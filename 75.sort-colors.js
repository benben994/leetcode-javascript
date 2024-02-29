/*
 * @lc app=leetcode id=75 lang=javascript
 *
 * [75] Sort Colors
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let redIndex = 0;
  let blueIndex = nums.length - 1;
  let i = 0;

  while (i <= blueIndex) {
    if (nums[i] === 0) {
      [nums[i], nums[redIndex]] = [nums[redIndex], nums[i]];
      redIndex += 1;
      i += 1;
    } else if (nums[i] === 2) {
      [nums[i], nums[blueIndex]] = [nums[blueIndex], nums[i]];
      blueIndex -= 1;
    } else {
      i += 1;
    }
  }
};
// @lc code=end
