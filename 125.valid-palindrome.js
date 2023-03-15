/*
 * @lc app=leetcode id=125 lang=javascript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const str = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  if (str.length === 0) return true;

  for (let i = 0; i < str.length / 2; i += 1) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }

  return true;
};

module.exports = isPalindrome;
// @lc code=end
