/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let hashTable = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const complement = target - num;
    if (hashTable[complement] !== undefined) {
      return [hashTable[complement], i];
    }
    hashTable[num] = i;
  }
};

module.exports = twoSum;
// @lc code=end
