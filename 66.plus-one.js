/*
 * @lc app=leetcode id=66 lang=javascript
 *
 * [66] Plus One
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  for (let i = digits.length - 1, overflow = 1; i >= 0; i -= 1) {
    if (digits[i] + overflow < 10) {
      digits[i] += overflow;
      overflow = 0;
    } else {
      digits[i] = 0;
      overflow = 1;
    }
    if (i === 0 && overflow === 1) {
      digits.unshift(1);
    }
  }

  return digits;
};

module.exports = plusOne;
// @lc code=end
