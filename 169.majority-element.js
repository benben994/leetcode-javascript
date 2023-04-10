/*
 * @lc app=leetcode id=169 lang=javascript
 *
 * [169] Majority Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  // hash table
  // let hashTable = {};

  // for (let i = 0; i < nums.length; i += 1) {
  //   hashTable[nums[i]] = (hashTable[nums[i]] || 0) + 1;
  //   if (hashTable[nums[i]] > nums.length / 2) return nums[i];
  // }

  // Space: O(1)
  let num = 0;
  let count = 0;

  for (let i = 0; i < nums.length; i += 1) {
    if (num !== nums[i] && count > 0) {
      count -= 1;
    } else {
      if (count === 0) {
        num = nums[i];
      }

      count += 1;
    }
  }

  return num;
};
// @lc code=end
