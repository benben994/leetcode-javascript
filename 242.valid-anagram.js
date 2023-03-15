/*
 * @lc app=leetcode id=242 lang=javascript
 *
 * [242] Valid Anagram
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  let hashTable = {};
  for (let ch of s) {
    hashTable[ch] = (hashTable[ch] || 0) + 1;
  }
  for (let ch of t) {
    if (!hashTable[ch]) return false;
    hashTable[ch] -= 1;
  }

  return true;
};

module.exports = isAnagram;
// @lc code=end
