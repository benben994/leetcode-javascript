/*
 * @lc app=leetcode id=383 lang=javascript
 *
 * [383] Ransom Note
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  let hashMap1 = {};
  let hashMap2 = {};

  for (let i = 0; i < ransomNote.length; i += 1) {
    let ch = ransomNote[i];
    hashMap1[ch] = (hashMap1[ch] || 0) + 1;
  }
  for (let i = 0; i < magazine.length; i += 1) {
    let ch = magazine[i];
    hashMap2[ch] = (hashMap2[ch] || 0) + 1;
  }

  for (let key in hashMap1) {
    if (!hashMap2[key] || hashMap2[key] < hashMap1[key]) return false;
  }
  return true;
};
// @lc code=end
