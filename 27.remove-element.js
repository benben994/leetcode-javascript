/*
 * @lc app=leetcode id=27 lang=javascript
 *
 * [27] Remove Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let duplicatedItemsCount = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      duplicatedItemsCount += 1;
    } else {
      nums[i - duplicatedItemsCount] = nums[i];
    }
  }

  return nums.length - duplicatedItemsCount;
};

module.exports = removeElement;
// @lc code=end
