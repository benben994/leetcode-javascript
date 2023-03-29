/*
 * @lc app=leetcode id=409 lang=javascript
 *
 * [409] Longest Palindrome
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  let hashTable = {};

  for (let ch of s) {
    hashTable[ch] = (hashTable[ch] || 0) + 1;
  }

  let longest = 0;
  let odd = 0;
  for (let key in hashTable) {
    if (hashTable[key] >= 2) {
      longest += Math.floor(hashTable[key] / 2) * 2;
    }
    if (!odd && hashTable[key] % 2 === 1) {
      odd = 1;
    }
  }

  return longest + odd;
};
// @lc code=end
