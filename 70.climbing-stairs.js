/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n < 2) return 1;

  let first = 1,
    second = 1;
  let third;
  for (let i = 2; i <= n; i += 1) {
    third = first + second;
    first = second;
    second = third;
  }

  return third;
};
// @lc code=end
