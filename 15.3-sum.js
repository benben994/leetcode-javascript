/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

const SUM = 0;

var threeSum = function (nums) {
  let results = [];

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] > 0) break;
    if (nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      if (nums[i] + nums[left] + nums[right] === SUM) {
        results.push([nums[i], nums[left], nums[right]]);
        left += 1;
        while (nums[left] === nums[left - 1] && left < right) {
          left += 1;
        }
      } else if (nums[i] + nums[left] + nums[right] > SUM) {
        right -= 1;
      } else {
        left += 1;
      }
    }
  }

  return results;
};
// @lc code=end
