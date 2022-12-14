/*
 * @lc app=leetcode id=26 lang=javascript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let duplicatedItemsCount = 0;
  for (let i = 1, curVal = nums[0]; i < nums.length; i += 1) {
    if (nums[i] === curVal) {
      duplicatedItemsCount += 1;
    } else {
      nums[i - duplicatedItemsCount] = nums[i];
      curVal = nums[i];
    }
  }

  return nums.length - duplicatedItemsCount;
};

module.exports = removeDuplicates;
// @lc code=end
