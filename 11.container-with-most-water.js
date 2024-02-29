/*
 * @lc app=leetcode id=11 lang=javascript
 *
 * [11] Container With Most Water
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let max = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    const cur = Math.min(height[left], height[right]) * (right - left);
    max = Math.max(cur, max);

    if (height[left] < height[right]) {
      left += 1;
    } else if (height[left] > height[right]) {
      right -= 1;
    } else {
      left += 1;
      right -= 1;
    }
  }

  return max;
};
// @lc code=end
