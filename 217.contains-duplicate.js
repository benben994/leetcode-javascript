/*
 * @lc app=leetcode id=217 lang=javascript
 *
 * [217] Contains Duplicate
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let hashTable = {};
  for (let i = 0; i < nums.length; i += 1) {
    let num = nums[i];
    if (hashTable[num]) return true;
    hashTable[num] = true;
  }
  return false;
};
// @lc code=end
