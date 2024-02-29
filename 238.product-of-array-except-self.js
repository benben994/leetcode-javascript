/*
 * @lc app=leetcode id=238 lang=javascript
 *
 * [238] Product of Array Except Self
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const prefix = [1];
  for (let i = 1; i < nums.length; i += 1) {
    prefix.push(nums[i - 1] * prefix[i - 1]);
  }

  const postfix = [1];
  for (let i = nums.length - 2; i >= 0; i -= 1) {
    postfix.unshift(nums[i + 1] * postfix[0]);
  }

  return nums.map((_, i) => {
    return prefix[i] * postfix[i];
  });
};
// @lc code=end
