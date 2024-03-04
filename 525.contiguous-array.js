/*
 * @lc app=leetcode id=525 lang=javascript
 *
 * [525] Contiguous Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
  let hashmap = { 0: -1 };
  let max = 0;
  let sum = 0;

  for (let i = 0; i < nums.length; i += 1) {
    sum += nums[i] === 1 ? 1 : -1;

    if (hashmap[sum] !== undefined) {
      max = Math.max(i - hashmap[sum], max);
    } else {
      hashmap[sum] = i;
    }
  }

  return max;
};
// @lc code=end
