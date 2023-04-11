/*
 * @lc app=leetcode id=67 lang=javascript
 *
 * [67] Add Binary
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let carry = 0;
  let result = "";
  let maxLength = Math.max(a.length, b.length);

  // a = 1010, b = 1011
  for (let i = 1; i <= maxLength || carry; i += 1) {
    const num1 = Number(a[a.length - i]) || 0;
    const num2 = Number(b[b.length - i]) || 0;
    sum = (num1 + num2 + carry) % 2;
    carry = Math.floor((num1 + num2 + carry) / 2);
    result = `${sum}${result}`;
  }

  return result;
};
// @lc code=end
